import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const formData = await request.json();
  const { name, email, subject, message } = formData;

  // Configure your email transporter
  // You might need to use environment variables for security
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Example: using Gmail
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  const mailOptions = {
    from: email, // Sender's email from the form
    to: 'dtricoma@gmail.com', // Recipient email address
    subject: `Contacto App BotMM: ${subject}`, // Predefined subject + form subject
    text: `Nombre: ${name}\nCorreo: ${email}\nMensaje:\n${message}`, // Email body
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email', error: error.message }, { status: 500 });
  }
}