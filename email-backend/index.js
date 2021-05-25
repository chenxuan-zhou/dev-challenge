import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import EmailDAO from "./dao/emailDAO.js"

dotenv.config()
const MongoClient = mongodb.MongoClient
console.log(process.env)
const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.DB_URI,
    {
        poolSize: 50,
        connectTimeoutMS: 2500,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).catch(err => {
    console.error(err.stack)
    process.exit(1)
}).then(async client => {
    // inject database
    await EmailDAO.injectDB(client)
    // start web server
    app.listen(port, () => {
        console.log(`Listening on the port ${port}`)
    })
})