# html-template-email-sender

A simple example on how we can send HTML content in emails using javascript.

This example using the service [MailJet](https://app.mailjet.com/signin?redirect=aHR0cHM6Ly9hcHAubWFpbGpldC5jb20vfDI0fDgyMzU3ZDFmMWE4Y2NjMjc4ZWRhMzI0MDUzZTNlMjY0) to send emails.

# Requirements
- Create a MailJet account
- Create a `.env` file on the root folder (copy/paste `.env.example` file)
- Fill out `MAILJET_API_KEY` and `MAILJET_API_SECRET` (get them from your created MailJet account)
- Fill out the other variables `EMAIL_FROM`, `NAME_FROM`, `EMAIL_TO` and `NAME_TO` with the email you want to receive the test
- Create a `template.html` file with the HTML content you want to send
- Run `npm start`.

You should receive an email with the HTML content. It would probably be placed in the **Spam** folder.
