import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

// NodeMailer Config
const transporter: nodemailer.Transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(req: Request) {
  const { name, phone, email, message, agreement } = await req.json();
  try {
    if (!name || !phone || !email || !message || !agreement) {
      return NextResponse.json({ message: "ALL_FIELDS_ARE_REQUIRED" }, { status: 400 });
    }

    console.log(process.env.SMTP_PASSWORD);

    // Message Config
    const mailOptions: Mail.Options = {
      from: `"SolutionBox - Formularz kontaktowy" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: "SolutionBox - Nowa wiadomość z formularza kontaktowego",
      html: `
        <h2>I-Clinic - Nowa wiadomość z formularza kontaktowego</h2>
        <p><strong>Imię i nazwisko:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Wyrazenie zgody:</strong> ${agreement ? "Tak" : "Nie"}</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log(`[${new Date().toJSON()}]`, " Wiadomość wysłana: email", email);

    return NextResponse.json({ message: "SUCCESS" }, { status: 200 });
  } catch (error) {
    console.error("Błąd wysyłania maila:", email, error);
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
}
