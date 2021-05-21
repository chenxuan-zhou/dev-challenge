let email_collection

export default class EmailDAO {
    static async injectDB(conn) {
        if (email_collection) {
            return
        }
        try {
            email_collection = await conn.db(process.env.DB_NAME).collection("email")
        } catch (e) {
            console.error(`Unable to establish collection handles in userDAO: ${e}`)
        }
    }

    static async insertEmail(email) {
        try {
            const emailDoc = {
                email: email
            }
            return await email_collection.update(emailDoc,emailDoc,{upsert:true})
        } catch (e) {
            console.error(`Unable to insert email: ${e}`)
            return { error: e }
        }
    }

    static async getAllEmails() {
        let cursor
        try {
            cursor = await email_collection.find()
        } catch (e) {
            console.error('Unable to issue find all emails.')
            return { emailList: [], totalNumEmails: 0 }
        }
       
        try {
            const emailDocList = await cursor.toArray()
            const emailList = emailDocList.map(x => x.email)
            const totalNumEmails = emailList.length
            return { emailList, totalNumEmails}
        } catch (e) {
            console.error(`Unable to convert cursor to array or problem counting documents, ${e}`)
            return { emailList: [], totalNumEmails: 0 }
        }
    }

}