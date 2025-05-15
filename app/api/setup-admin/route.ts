import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export async function GET() {
  const sql = neon(process.env.DATABASE_URL!);
  try {
    // Crear la tabla bot_mm si no existe
    await sql`
      CREATE TABLE IF NOT EXISTS bot_mm (
        id SERIAL PRIMARY KEY,
        usuario VARCHAR(255) UNIQUE NOT NULL,
        contrasena VARCHAR(255) NOT NULL
      );
    `;

    // Consultar todos los usuarios de la tabla bot_mm
    const users = await sql`SELECT * FROM bot_mm;`;

    return NextResponse.json({ message: 'Admin user setup complete. Current users:', users: users.rows });
  } catch (error) {
    console.error('Error setting up admin user:', error);
    return NextResponse.json({ error: 'Failed to setup admin user.' }, { status: 500 });
  }
}