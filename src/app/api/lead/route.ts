import { NextRequest, NextResponse } from 'next/server';

// Forwards leads to the Yes Crew CRM form endpoint for this business.
// The provider is resolved there from the opaque form_key — never spoofable.
const CRM_FORM_URL =
  'https://yescrew-dashboard.vercel.app/api/forms/011cb28bfd16490bb3065c4f2503771c/submit';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message, source, submission_id, elapsed_ms, company_website } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // The CRM submit endpoint requires a phone number (400 without it).
    // Newsletter signups (matching the original Divi site) collect no phone —
    // acknowledge them without forwarding rather than silently failing.
    if (!phone) {
      if (source === 'newsletter') {
        return NextResponse.json({ success: true, stored: false });
      }
      return NextResponse.json({ error: 'Please enter a phone number.' }, { status: 400 });
    }

    const crmResponse = await fetch(CRM_FORM_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `${firstName ?? ''} ${lastName ?? ''}`.trim(),
        email,
        phone,
        service_needed:
          message ||
          (source === 'newsletter' ? 'NEWSLETTER SIGNUP (website newsletter form)' : null),
        submission_id,
        elapsed_ms,
        company_website, // honeypot passthrough
      }),
    });

    if (!crmResponse.ok) {
      console.error('CRM form submit failed:', crmResponse.status);
      return NextResponse.json({ error: 'Failed to submit lead' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json({ error: 'Failed to submit lead' }, { status: 500 });
  }
}
