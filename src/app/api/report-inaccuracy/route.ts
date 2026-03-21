import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Report inaccuracy error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
