import * as functions from "firebase-functions"  
import admin from "firebase-admin"          
import fetch from "node-fetch"                  

admin.initializeApp()

export const sendContactEmail = functions.https.onRequest(async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const RESEND_API_KEY = functions.config().resend.key

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).send("Missing fields")
  }

  try {
    const response = await fetch("https://api.resend.com/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "info@bespokewebengineers.com",
        to: "info@bespokewebengineers.com",
        subject: `New Contact from ${name}`,
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    res.status(200).send("Email sent successfully")
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error")
  }
})
