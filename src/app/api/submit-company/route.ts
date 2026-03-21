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
    const { companyName, companyWebsite, companyCategory, submitterName, submitterEmail, notes } = body;

    if (!companyName) {
      return NextResponse.json({ error: 'Company name is required' }, { status: 400 });
    }

    const { error } = await supabase.from('company_submissions').insert({
      company_name: companyName,
      company_website: companyWebsite || null,
      company_category: companyCategory || null,
      submitter_name: submitterName || null,
      submitter_email: submitterEmail || null,
      notes: notes || null,
    });

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json({ error: 'Failed to submit company' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Submit company error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
