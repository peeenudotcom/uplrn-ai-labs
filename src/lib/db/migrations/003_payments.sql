-- Payments table for Razorpay transactions
-- Run this in Supabase SQL Editor

CREATE TABLE IF NOT EXISTS payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_name TEXT NOT NULL,
  student_email TEXT NOT NULL,
  student_phone TEXT,
  course_slug TEXT NOT NULL,
  course_title TEXT NOT NULL,
  amount INTEGER NOT NULL,
  currency TEXT DEFAULT 'INR',
  razorpay_order_id TEXT,
  razorpay_payment_id TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can manage payments"
  ON payments FOR ALL
  USING (auth.role() = 'service_role');

CREATE INDEX IF NOT EXISTS idx_payments_email ON payments(student_email);
CREATE INDEX IF NOT EXISTS idx_payments_course ON payments(course_slug);
CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);
