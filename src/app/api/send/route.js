import { NextResponse } from "next/server";
import SibApiV3Sdk from '@getbrevo/brevo';

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
const apiKey = apiInstance.authentications['apiKey'];
apiKey.apiKey = process.env.BREVO_API_KEY;

const senderEmail = process.env.SENDER_EMAIL;
const senderName = process.env.SENDER_NAME;
const toEmail = process.env.TO_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();
  console.log("Received request:", { email, subject, message });

  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  sendSmtpEmail.subject = subject;
  sendSmtpEmail.htmlContent = `<html><body><h1>${subject}</h1><p>From: ${email}</p><p>${message}</p></body></html>`;
  sendSmtpEmail.sender = { name: senderName, email: senderEmail };
  sendSmtpEmail.to = [{ email: toEmail }];
  sendSmtpEmail.replyTo = { email: email };

  try {
    console.log("Attempting to send email...");
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log('Email sent successfully. Returned data: ' + JSON.stringify(data));
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
