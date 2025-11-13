import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { RowDataPacket } from 'mysql2';

export async function POST(request: Request) {
  try {
    const { name, phone } = await request.json();

    // Validasi input
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: 'Nama dan nomor telepon harus diisi' },
        { status: 400 }
      );
    }

    // Cek nomor telepon duplikat
    const [rows] = await pool.query<RowDataPacket[]>(
      'SELECT * FROM registrations WHERE phone = ?',
      [phone]
    );

    if (rows.length > 0) {
      return NextResponse.json(
        { success: false, message: 'Nomor telepon sudah terdaftar' },
        { status: 409 }
      );
    }

    // Insert data baru
    await pool.query(
      'INSERT INTO registrations (name, phone) VALUES (?, ?)',
      [name, phone]
    );

    return NextResponse.json(
      { success: true, message: 'Registrasi berhasil!' },
      { status: 201 }
    );

  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { success: false, message: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}