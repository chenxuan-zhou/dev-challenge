import EmailDAO from "../dao/emailDAO.js"

export default class EmailController {
    static async apiInsertEmail(req, res, next) {
        try {
            const email = req.body.email;

            const EmailResponse = await EmailDAO.insertEmail(
                email
            )
            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    static async apiGetAllEmails(req, res, next) {
        const { emailList, totalNumEmails } = await EmailDAO.getAllEmails()

        let response = {
            emails: emailList,
            total_results: totalNumEmails,
        }
        res.json(response)
    }


}