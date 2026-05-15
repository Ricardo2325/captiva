import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const FROM = 'onboarding@resend.dev';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const TO = process.env.CONTACT_EMAIL ?? 'hola@baifostudio.com';
  const body = await req.json();
  const { nombre, email, telefono, mensaje } = body as Record<string, string>;

  if (!nombre?.trim() || !email?.trim() || !mensaje?.trim()) {
    return NextResponse.json({ error: 'Faltan campos obligatorios.' }, { status: 400 });
  }

  try {
    // Notificación al equipo
    await resend.emails.send({
      from: FROM,
      to: TO,
      subject: `Nuevo contacto web: ${nombre}`,
      text: [
        `Nombre: ${nombre}`,
        `Email: ${email}`,
        `Teléfono: ${telefono || 'No indicado'}`,
        ``,
        `Mensaje:`,
        mensaje,
      ].join('\n'),
    });

    // Confirmación al usuario
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: 'Hemos recibido tu mensaje — Baifo Studio',
      text: [
        `Hola ${nombre},`,
        ``,
        `Hemos recibido tu mensaje y te respondemos en menos de 24 horas.`,
        ``,
        `El equipo de Baifo Studio`,
        `hola@baifostudio.com`,
      ].join('\n'),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Error al enviar el mensaje.' }, { status: 500 });
  }
}
