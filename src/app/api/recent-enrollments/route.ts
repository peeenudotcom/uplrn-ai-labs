import { NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase'

// Indian cities used for fallback/anonymization
const FALLBACK_CITIES = [
  'Ludhiana', 'Amritsar', 'Jalandhar', 'Kotkapura', 'Chandigarh',
  'Patiala', 'Bathinda', 'Mohali', 'Moga', 'Hoshiarpur',
]

function anonymizeName(fullName: string): string {
  if (!fullName) return 'Someone'
  const parts = fullName.trim().split(/\s+/)
  if (parts.length === 0) return 'Someone'
  if (parts.length === 1) return parts[0]
  return `${parts[0]} ${parts[1][0]}.`
}

function timeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000)
  if (seconds < 60) return 'just now'
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes} min ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  return `${days}d ago`
}

export async function GET() {
  try {
    const db = createServiceClient()
    const { data, error } = await db
      .from('payments')
      .select('student_name, course_title, created_at')
      .eq('status', 'paid')
      .order('created_at', { ascending: false })
      .limit(10)

    if (error) throw error

    const enrollments = (data || []).map((row, index) => ({
      id: index,
      name: anonymizeName(row.student_name as string),
      city: FALLBACK_CITIES[index % FALLBACK_CITIES.length],
      course: row.course_title as string,
      timeAgo: timeAgo(new Date(row.created_at as string)),
    }))

    return NextResponse.json({ enrollments }, {
      headers: { 'Cache-Control': 's-maxage=300, stale-while-revalidate=600' },
    })
  } catch (error) {
    console.error('recent-enrollments error:', error)
    return NextResponse.json({ enrollments: [] })
  }
}
