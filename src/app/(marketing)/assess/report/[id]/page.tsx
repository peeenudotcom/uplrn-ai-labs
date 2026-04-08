import { createServiceClient } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import { ReportContent } from './report-content'

interface Props {
  params: Promise<{ id: string }>
}

export default async function ReportPage({ params }: Props) {
  const { id } = await params

  const db = createServiceClient()

  const { data: report } = await db
    .from('assessment_reports')
    .select('*, assessments(*)')
    .eq('id', id)
    .single()

  if (!report) {
    notFound()
  }

  return <ReportContent report={report} />
}
