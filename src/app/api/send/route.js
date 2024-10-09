import { NextResponse } from "next/server";

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const SENDER_EMAIL = process.env.SENDER_EMAIL;
const SENDER_NAME = process.env.SENDER_NAME;
const TO_EMAIL = process.env.TO_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();
  console.log("Received request:", { email, subject, message });

  const url = "https://api.brevo.com/v3/smtp/email";
  const options = {
    method: "POST",
    headers: {
      "accept": "application/json",
      "api-key": BREVO_API_KEY,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      sender: { name: SENDER_NAME, email: SENDER_EMAIL },
      to: [{ email: TO_EMAIL }],
      replyTo: { email: email },
      subject: subject,
      htmlContent: `<html><body><h1>${subject}</h1><p>From: ${email}</p><p>${message}</p></body></html>`
    })
  };

  try {
    console.log("Attempting to send email...");
    const response = await fetch(url, options);
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to send email');
    console.log('Email sent successfully. Returned data:', data);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
