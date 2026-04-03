import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function GET() {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: `"TeDebo 💸" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "PRUEBA FINAL",
    html: "<h1>🔥 FUNCIONA 🔥</h1>",
  })

  return NextResponse.json({ enviado: true })
}


export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"TeDebo 💸" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Invitación a TeDebo",
      html: `
        <h2>Te han invitado a TeDebo 💸</h2>
        <p>Entra en la app y acepta la invitación.</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Error enviando email" }, { status: 500 })
  }
}
