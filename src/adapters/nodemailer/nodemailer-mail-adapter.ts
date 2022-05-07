require('dotenv').config()

import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.USER_NODEMAILER,
    pass: process.env.PASS_NODEMAILER,
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <liliancmartinsfritzen@gmail.com",
      to: "Lílian Martins Fritzen liliancmartinsfritzen@gmail.com",
      subject,
      html: body,
    });
  }
}
