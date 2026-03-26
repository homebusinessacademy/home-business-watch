import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const resendApiKey = process.env.RESEND_API_KEY || '';

export async function POST(request: NextRequest) {
  try {
    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Supabase not configured');
      return NextResponse.json({ error: 'Service not configured' }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const body = await request.json();
    const { companySlug, companyName, suggestedCorrection, reporterEmail } = body;

    if (!companySlug || !companyName || !suggestedCorrection) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { error } = await supabase.from('inaccuracy_reports').insert({
      company_slug: companySlug,
      company_name: companyName,
      suggested_correction: suggestedCorrection,
      reporter_email: reporterEmail || null,
    });

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json({ error: 'Failed to submit report' }, { status: 500 });
    }

    // Send email notification
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: 'HomeBusinessWatch <noreply@homebusinesswatch.com>',
          to: 'assistant@paulhutchings.net',
          subject: `[HBW] Inaccuracy Report: ${companyName}`,
          text: `New inaccuracy report submitted for HomeBusinessWatch.

Company: ${companyName}
Page: https://homebusinesswatch.com/companies/${companySlug}

Suggested Correction:
${suggestedCorrection}

Reporter Email: ${reporterEmail || 'Not provided'}

---
Review this report and update the company data if the correction is valid.`,
        });
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
        // Don't fail the request if email fails - report is already saved
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Report inaccuracy error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
