import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, reason, company, message } = body;

    if (!name || !email || !reason || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Build email content
    const subject = `[HomeBusinessWatch] ${reason}${company ? ` — ${company}` : ''}`;
    const text = `
New contact form submission from HomeBusinessWatch.com

Reason: ${reason}
Name: ${name}
Email: ${email}
${company ? `Company: ${company}\n` : ''}
Message:
${message}

---
Submitted via homebusinesswatch.com/contact
    `.trim();

    // Send via Resend (free tier: 3,000 emails/month)
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not set');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'HomeBusinessWatch Contact <onboarding@resend.dev>',
        to: ['paulmhutchings@gmail.com'],
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Resend error:', err);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
