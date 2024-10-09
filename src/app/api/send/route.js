import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL; // Add this line

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log("Received request:", { email, subject, message });
  console.log("Environment variables:", { fromEmail, toEmail });

  try {
    console.log("Attempting to send email...");
    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail], // Send to your personal email
      reply_to: email, // Set reply-to as the sender's email
      subject: subject,
      html: `
        <h1>${subject}</h1>
        <p>From: ${email}</p>
        <p>${message}</p>
      `,
    });
    console.log("Email sent successfully:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
