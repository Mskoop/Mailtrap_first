import express from "express"
import cors from "cors"
import nodemailer from "nodemailer"

const superhelden = ["Batman", "Superman", "Iron Man", "Black Widow"]

const app = express()
const PORT = 8989

// Copy -Paste die Daten von dem Provider:
// Mailtrap.io/My Inbox / STMp Settings!
//

 const transport = nodemailer.createTransport ({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
    user: "66c1ac3ea01a81",
    pass: "16ce4ee7c86a0b"
    }
}) 
//Emil Route anlegen: Message Configuration vom Nodemailer

app.get("/email", (req, res) => {
const message = {
    from: "dasistfake@bla.de",
    to: "beliebig@check_seite.de",
    subject: "Worum geht es",
    text:"KOMMT ES AUCH AN...",
    html: "<h1>Ich bin HTML</h1>"
    }
transport.sendMail(message, (err, info) => {
    if (err) console.log("Error ist da", err)
    else console.log("Die Info", info)
    res.end()
})

}) 

app.get("/", (req, res) => {
 console.log("Test für Mail", req.method, req.url)
 res.json(superhelden)
})

app.post("/", (req, res) => {
    superhelden.push("Tanos")
    res.json(superhelden)
})


app.listen(PORT, () => console.log("Das ist bestimmt ein Port", PORT))

