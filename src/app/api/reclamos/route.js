// app/api/reclamos/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

// Función para generar código único
function generarCodigoReclamo() {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `REC-${timestamp}-${random}`;
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validación
    const camposRequeridos = [
      'nombres', 'apellidos', 'email', 'telefono', 
      'tipoDocumento', 'numeroDocumento', 'direccion',
      'departamento', 'provincia', 'distrito',
      'bienServicio', 'montoReclamado', 'descripcionBien',
      'tipoReclamo', 'fechaHecho', 'descripcion', 'pedido'
    ];
    
    for (const campo of camposRequeridos) {
      if (!data[campo]?.toString().trim()) {
        return NextResponse.json(
          { 
            success: false, 
            error: `Campo requerido faltante: ${campo}`,
            message: 'Por favor complete todos los campos obligatorios'
          },
          { status: 400 }
        );
      }
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email inválido',
          message: 'Por favor ingrese un email válido'
        },
        { status: 400 }
      );
    }
    
    // Validar longitud de descripción
    if (data.descripcion.length > 1000) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Descripción muy larga',
          message: 'La descripción no puede exceder los 1000 caracteres'
        },
        { status: 400 }
      );
    }
    
    // Generar código único
    const codigoReclamo = generarCodigoReclamo();
    
    // Enviar email con Resend - USANDO EL MISMO DOMINIO QUE FUNCIONA
    const { error } = await resend.emails.send({
      from: 'Inversiones Bienestar Zeng <onboarding@resend.dev>',
      to: ['contacto@inversionesbienestarzeng.com'], // <-- Cambia esto
      replyTo: data.email,
      subject: `📄 NUEVO RECLAMO: ${codigoReclamo}`,
      html: `
        <h3>📄 NUEVO RECLAMO REGISTRADO</h3>
        <p><strong>Código:</strong> ${codigoReclamo}</p>
        <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-PE')}</p>
        
        <h4>👤 INFORMACIÓN DEL RECLAMANTE</h4>
        <p><strong>Nombre:</strong> ${data.nombres} ${data.apellidos}</p>
        <p><strong>Documento:</strong> ${data.tipoDocumento.toUpperCase()}: ${data.numeroDocumento}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Teléfono:</strong> ${data.telefono}</p>
        <p><strong>Dirección:</strong> ${data.direccion}, ${data.distrito}, ${data.provincia}, ${data.departamento}</p>
        
        <h4>📋 DETALLE DEL RECLAMO</h4>
        <p><strong>Tipo:</strong> ${data.tipoReclamo}</p>
        <p><strong>Fecha del hecho:</strong> ${data.fechaHecho}</p>
        <p><strong>Bien/Servicio:</strong> ${data.bienServicio}</p>
        <p><strong>Monto reclamado:</strong> S/ ${parseFloat(data.montoReclamado).toFixed(2)}</p>
        
        <h4>📝 DESCRIPCIÓN</h4>
        <p>${data.descripcion.replace(/\n/g, '<br>')}</p>
        
        <h4>🎯 SOLUCIÓN ESPERADA</h4>
        <p>${data.pedido.replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p><small>⚠️ Este reclamo debe ser atendido en 15 días hábiles</small></p>
      `,
      text: `
NUEVO RECLAMO - ${codigoReclamo}
================================

👤 INFORMACIÓN DEL RECLAMANTE
Nombre: ${data.nombres} ${data.apellidos}
Documento: ${data.tipoDocumento.toUpperCase()}: ${data.numeroDocumento}
Email: ${data.email}
Teléfono: ${data.telefono}
Dirección: ${data.direccion}, ${data.distrito}, ${data.provincia}, ${data.departamento}

📋 DETALLE DEL RECLAMO
Tipo: ${data.tipoReclamo}
Fecha del hecho: ${data.fechaHecho}
Bien/Servicio: ${data.bienServicio}
Monto reclamado: S/ ${parseFloat(data.montoReclamado).toFixed(2)}

📝 DESCRIPCIÓN
${data.descripcion}

🎯 SOLUCIÓN ESPERADA
${data.pedido}

---
📅 Fecha registro: ${new Date().toLocaleString('es-PE')}
⚠️  Plazo de atención: 15 días hábiles
      `
    });
    
    if (error) {
      console.error('❌ Error Resend:', error);
      throw new Error('Error al enviar email');
    }
    
    return NextResponse.json({
      success: true,
      codigoReclamo: codigoReclamo,
      message: 'Reclamo registrado exitosamente'
    });
    
  } catch (error) {
    console.error('❌ Error en API de reclamos:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error interno del servidor',
        message: 'Ocurrió un error al procesar su reclamo'
      },
      { status: 500 }
    );
  }
}