import { NextRequest, NextResponse } from 'next/server';
import { saveEmail } from './axiosClient';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const result = await saveEmail(email);
    return NextResponse.json({ message: 'Subscribed successfully', result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}