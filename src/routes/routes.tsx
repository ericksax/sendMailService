import express from "express";
import { createTransport } from "nodemailer";
import { Email } from "../email";
import { render } from "@react-email/render";
import React from "react";

export const route = express.Router();

route.post("/send_mail", (req, res) => {
  const {list, contact, email} = req.body

  const transporter = createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e0b645e19b6e12",
      pass: "dc6737859d53be"
    }
  });

  const emailHtml = render(<Email contact={contact} list={list} email={email}/>);

  const options = {
    from: "contato@ativahospitalar.com",
    to: email,
    subject: "hello world",
    html: emailHtml,
  };

  transporter.sendMail(options).then(() => console.log("sent!!")).catch(error => console.log(error));
  res.send();
});
