-- Assessment Funnel Tables
-- Run this in Supabase SQL Editor

-- Assessments: stores quiz responses from business owners
CREATE TABLE IF NOT EXISTS assessments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  industry TEXT NOT NULL,
  team_size TEXT NOT NULL,
  responses JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Assessment Reports: AI-generated reports linked to assessments
CREATE TABLE IF NOT EXISTS assessment_reports (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  assessment_id UUID REFERENCES assessments(id) ON DELETE CASCADE,
  report_content JSONB NOT NULL,
  generated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Leads: contact form submissions
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  course_interest TEXT,
  message TEXT,
  source TEXT DEFAULT 'contact_form',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Policies

-- Assessments: anyone can insert (public form), only service role can read
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert assessments"
  ON assessments FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Service role can read assessments"
  ON assessments FOR SELECT
  USING (auth.role() = 'service_role');

-- Assessment Reports: anyone can read by ID (for report page), service role can insert
ALTER TABLE assessment_reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read assessment reports"
  ON assessment_reports FOR SELECT
  USING (true);

CREATE POLICY "Service role can insert assessment reports"
  ON assessment_reports FOR INSERT
  WITH CHECK (auth.role() = 'service_role');

-- Leads: anyone can insert (public form), only service role can read
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads"
  ON leads FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Service role can read leads"
  ON leads FOR SELECT
  USING (auth.role() = 'service_role');

-- Indexes
CREATE INDEX IF NOT EXISTS idx_assessments_email ON assessments(email);
CREATE INDEX IF NOT EXISTS idx_assessment_reports_assessment_id ON assessment_reports(assessment_id);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
