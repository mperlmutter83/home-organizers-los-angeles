import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Log the lead (in production, send to CRM/webhook)
    console.log('New lead received:', { name, email, phone, service, message });

    // Here you would typically:
    // 1. Send to your CRM
    // 2. Send notification email
    // 3. Store in database

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
