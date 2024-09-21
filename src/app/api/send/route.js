import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Extract the sender's email address from environment variables
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  try {
    // Extract the request body
    const { email, subject, message } = await req.json();
    
    console.log("Sending email to:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    // Convert your JSX to HTML string
    const htmlContent = `
      <div>
        <h1>${subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
        <p>${message}</p>
      </div>
    `;

    // Send the email using Resend's API
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      html: htmlContent,  // Use 'html' instead of 'react'
    });

    // Return success response
    return NextResponse.json(data);

  } catch (error) {
    console.error("Error sending email:", error);

    // Return error response
    return NextResponse.json({ error: error.message || 'Error sending email' });
  }
}
