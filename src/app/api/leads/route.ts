import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, courseInterest, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const db = createServiceClient();

    const { error } = await db.from('leads').insert({
      name,
      email,
      phone: phone || null,
      course_interest: courseInterest || null,
      message: message || null,
      source: 'contact_form',
    });

    if (error) {
      console.error('Lead insert error:', error);
      throw new Error('Failed to save lead');
    }

    // Also add to subscribers
    await db
      .from('subscribers')
      .upsert({ email, name }, { onConflict: 'email' })
      .select();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Leads API error:', error);
    return NextResponse.json(
      { error: 'Failed to submit. Please try again.' },
      { status: 500 }
    );
  }
}
