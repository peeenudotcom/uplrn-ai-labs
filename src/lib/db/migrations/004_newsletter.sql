-- Newsletter system: issues, subscriber enhancements, unsubscribe tokens
-- Run this in Supabase SQL Editor

-- Ensure subscribers table has all columns we need (idempotent)
CREATE TABLE IF NOT EXISTS subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add unsubscribe token and active status if not present
ALTER TABLE subscribers
  ADD COLUMN IF NOT EXISTS unsubscribe_token TEXT UNIQUE DEFAULT encode(gen_random_bytes(16), 'hex'),
  ADD COLUMN IF NOT EXISTS active BOOLEAN DEFAULT TRUE,
  ADD COLUMN IF NOT EXISTS unsubscribed_at TIMESTAMPTZ;

-- Backfill unsubscribe_token for any existing rows that don't have one
UPDATE subscribers
SET unsubscribe_token = encode(gen_random_bytes(16), 'hex')
WHERE unsubscribe_token IS NULL;

-- Newsletter issues: log of everything sent
CREATE TABLE IF NOT EXISTS newsletter_issues (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  subject TEXT NOT NULL,
  content_html TEXT NOT NULL,
  content_markdown TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'sent')),
  sent_at TIMESTAMPTZ,
  sent_to_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Policies
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Drop old policies if they exist (idempotent)
DROP POLICY IF EXISTS "Anyone can insert subscribers" ON subscribers;
DROP POLICY IF EXISTS "Service role can read subscribers" ON subscribers;
DROP POLICY IF EXISTS "Anyone can update their subscription by token" ON subscribers;

CREATE POLICY "Anyone can insert subscribers"
  ON subscribers FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Service role can read subscribers"
  ON subscribers FOR SELECT
  USING (auth.role() = 'service_role');

CREATE POLICY "Service role can update subscribers"
  ON subscribers FOR UPDATE
  USING (auth.role() = 'service_role');

ALTER TABLE newsletter_issues ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Service role manages newsletter issues" ON newsletter_issues;

CREATE POLICY "Service role manages newsletter issues"
  ON newsletter_issues FOR ALL
  USING (auth.role() = 'service_role');

-- Indexes
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);
CREATE INDEX IF NOT EXISTS idx_subscribers_active ON subscribers(active) WHERE active = TRUE;
CREATE INDEX IF NOT EXISTS idx_subscribers_unsubscribe_token ON subscribers(unsubscribe_token);
CREATE INDEX IF NOT EXISTS idx_newsletter_issues_status ON newsletter_issues(status);
CREATE INDEX IF NOT EXISTS idx_newsletter_issues_created_at ON newsletter_issues(created_at DESC);
