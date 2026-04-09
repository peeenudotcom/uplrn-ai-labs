import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { createServiceClient } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      courseSlug,
      courseTitle,
      studentName,
      studentEmail,
      studentPhone,
      amount,
    } = await req.json();

    // Verify signature
    const body = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(body)
      .digest('hex');

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json({ error: 'Invalid payment signature' }, { status: 400 });
    }

    // Payment verified — save to Supabase
    const db = createServiceClient();
    await db.from('payments').insert({
      student_name: studentName,
      student_email: studentEmail,
      student_phone: studentPhone || null,
      course_slug: courseSlug,
      course_title: courseTitle,
      amount,
      currency: 'INR',
      razorpay_order_id,
      razorpay_payment_id,
      status: 'paid',
    });

    return NextResponse.json({ success: true, paymentId: razorpay_payment_id });
  } catch (error) {
    console.error('Payment verify error:', error);
    return NextResponse.json(
      { error: 'Payment verification failed' },
      { status: 500 }
    );
  }
}
