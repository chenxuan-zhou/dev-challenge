import express from "express"
import EmailController from "./email.controller.js"

const router = express.Router()

// route to email controller
router
  .route("/api/email")
  .get(EmailController.apiGetAllEmails)
  .post(EmailController.apiInsertEmail)

export default router