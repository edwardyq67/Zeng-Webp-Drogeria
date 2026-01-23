import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();
    
    const { nombre, email, mensaje, telefono = '', empresa = '' } = data;

    // Validación
    if (!nombre?.trim() || !email?.trim() || !mensaje?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Datos requeridos faltantes' },
        { status: 400 }
      );
    }
    
    // Enviar email con Resend
    const { error } = await resend.emails.send({
      from: 'Inversiones Bienestar Zeng <onboarding@resend.dev>',
      to: ['contacto@inversionesbienestarzeng.com'],
      replyTo: email,
      subject: `📞 Contacto web: ${nombre}`,
      html: `
        <h3>📨 Nuevo mensaje desde la web</h3>
        <p><strong>👤 Nombre:</strong> ${nombre}</p>
        <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>📞 Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
        <p><strong>🏢 Empresa:</strong> ${empresa || 'No proporcionada'}</p>
        <p><strong>💬 Mensaje:</strong></p>
        <p>${mensaje.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>📅 Enviado: ${new Date().toLocaleString('es-PE')}</small></p>
      `,
      text: `
NUEVO CONTACTO - INVERSIONES BIENESTAR ZENG
===========================================

👤 Nombre: ${nombre}
📧 Email: ${email}
📞 Teléfono: ${telefono || 'No proporcionado'}
🏢 Empresa: ${empresa || 'No proporcionada'}

💬 Mensaje:
${mensaje}

---
📅 Fecha: ${new Date().toLocaleString('es-PE')}
      `
    });
    
    if (error) {
      console.error('❌ Error Resend:', error);
      throw new Error('Error al enviar email');
    }
     
    return NextResponse.json({
      success: true,
      message: 'Mensaje enviado correctamente'
    });
    
  } catch (error) {
    console.error('❌ Error en API:', error);
    
    return NextResponse.json(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}