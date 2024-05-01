const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));
app.use(express.json());
app.use(cors());
const nodemailer = require("nodemailer");
const corsOptions = {
  origin: "*", // Allow requests from this origin
};

app.use(cors(corsOptions));
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "user",
    pass: "pass",
  },
});

app.post("/email", async (req, res) => {
  console.log(req.body);
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"BackendDeveloper" <email>', // sender address
      to: req.body.rec, // list of receivers
      subject: req.body.subject, // Subject line
      text: req.body.text, // plain text body
      html: `<b>${req.body.text}</b>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    // res.sendStatus(200);
    res.sendStatus(200);
  }

  main().catch(console.error);
});
app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}!`)
);
