import express from "express";
import logics from "../logics";
export const router = express.Router();

router.post("/sendmail", logics.sendMail);
