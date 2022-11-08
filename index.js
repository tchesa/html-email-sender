const Mailjet = require("node-mailjet");
const fs = require("fs");
require("dotenv").config();

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_API_SECRET,
});

const template = fs.readFileSync("./template.html").toString("utf8");

const request = mailjet.post("send", { version: "v3.1" }).request({
  Messages: [
    {
      From: {
        Email: process.env.EMAIL_FROM,
        Name: process.env.NAME_FROM,
      },
      To: [
        {
          Email: process.env.EMAIL_TO,
          Name: process.env.NAME_TO,
        },
      ],
      Subject: "Greetings from Mailjet.",
      // TextPart: "This is the text part",
      HTMLPart: template,
      // CustomID: "AppGettingStartedTest",
    },
  ],
});
request
  .then((result) => {
    console.log(result.body);
  })
  .catch((err) => {
    console.log(err.statusCode);
  });
