import "dotenv/config";
import { renderToBuffer } from "@react-pdf/renderer";
import { Response, Request } from "express";
import { createTransport } from "nodemailer";
import { PDFDocument } from "../template";
import React from "react";
import { html } from "../template/htmlbody";

const sendMail = async (req: Request, res: Response) => {
  try {
    const { email, list, contact, numberOrc } = req.body;

    const pdfBuffer = await renderToBuffer(
      <PDFDocument list={list} contact={contact} numberOrc={numberOrc} />
    );

    const transporter = createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: "licitacao01@ativahospitalar.com.br",
      to: email,
      subject: "ORÇAMENTO ESTIMATIVO EMPRESA ATIVA MEDICO CIRÚRGICA LTDA",
      text: `Segue em anexo o arquivo docuemnto em PDF com o orçamento estimativo solicitado.  
      Estamos a disposição dessa secretaria no email: licitacao@ativahospitalar.com.br e 
      nos telefones 32 2101‐1567 , 32 2101‐1583 ; 32 2101‐1572 `,
      html: html,
      attachments: [
        {
          filename: "arquivo.pdf",
          content: pdfBuffer,
        },
      ],
    };

    await transporter
      .sendMail(mailOptions)
      .then(() => console.log("sent!!"))
      .catch((error) => console.log(error));

    return res.status(200).json({ message: "Email sent!" });
  } catch (error) {
    console.error("Erro ao enviar o e-mail:", error);
  }
};

export default { sendMail };
