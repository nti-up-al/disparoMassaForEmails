import { createTransport, Transporter } from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import path from "path";

type SendResult = {
  success: boolean;
  error?: unknown;
};

export abstract class BaseMailer {
  private configs: Record<string, string>;

  constructor(
    public to: string,
    public subject: string,
    public template: string,
    public context: Record<string, string | number> = {}
  ) {
    this.configs = {
      from: process.env.SMTP_FROM,
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      password: process.env.SMTP_PASSWORD,
    };
  }

  async send(): Promise<SendResult> {
    try {
      await this.getTransporter().sendMail(this.getMailOptions());
      console.log(`Email enviado para ${this.to}`);

      return { success: true };
    } catch (error) {
      console.error(`Falha ao enviar email para ${this.to}.`, error);

      return { success: false, error: error };
    }
  }

  private getTransporter(): Transporter {
    const transportOptions: SMTPTransport.Options = {
      service: "gmail",
      auth: {
        user: this.configs.user,
        pass: this.configs.password,
      },
    };

    const templatesBasePath = path.resolve("./email_templates/");
    const handlebarOptions = {
      viewEngine: {
        partialsDir: templatesBasePath,
        defaultLayout: path.join(templatesBasePath, "layout"),
      },
      viewPath: path.join(templatesBasePath, "views"),
    };

    const transporter = createTransport(transportOptions);
    transporter.use("compile", hbs(handlebarOptions));

    return transporter;
  }

  private getMailOptions() {
    return {
      from: `"UP Alagoas" <${this.configs.from}>`,
      to: this.to,
      subject: this.subject,
      template: this.template,
      context: { ...this.context, year: new Date().getFullYear() },
      attachments: [
        {
          filename: "up.png",
          path: path.resolve("./email_templates/assets/up_logo.png"),
          cid: "UPLogo",
        },
      ],
    };
  }
}
