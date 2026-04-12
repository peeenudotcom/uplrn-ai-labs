import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createServiceClient } from '@/lib/supabase'
import { renderResourceEmailHtml } from '@/lib/email/resource-template'
import { siteConfig } from '@/config/site'

// Resource metadata — maps resource ID to title + download URL
const RESOURCES: Record<string, { title: string; downloadUrl: string }> = {
  'prompt-guide': {
    title: 'Top 50 AI Prompts for Indian Professionals',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1E8FzYnrmB6bl39v5EdNuz8u7e-UYUiLu',
  },
  'career-roadmap': {
    title: 'AI Career Roadmap 2025–2026',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1WJfjACMAkedxR3VdJxaV6oCKuatw6aMq',
  },
  'tools-cheatsheet': {
    title: 'AI Tools Cheatsheet — 40+ Tools',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1y6a7CLQcJ_er7QooooUvOeOIc6GUFurf',
  },
  'business-ai': {
    title: 'AI for Small Business — Quick Wins Guide',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1nflAOHOr8AHLeS2kJh30CUT7sGQ8Lf4n',
  },
}

function getResend() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) throw new Error('RESEND_API_KEY is not set')
  return new Resend(apiKey)
}

export async function POST(req: NextRequest) {
  try {
    const { email, name, resource } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    const resourceData = RESOURCES[resource]
    if (!resourceData) {
      return NextResponse.json({ error: 'Invalid resource' }, { status: 400 })
    }

    const db = createServiceClient()

    // Save lead
    await db.from('resource_leads').insert({
      email: email.toLowerCase().trim(),
      name: name?.trim() || null,
      resource: resource || 'unknown',
    })

    // Also add to newsletter subscribers
    await db
      .from('subscribers')
      .upsert({ email: email.toLowerCase().trim(), name: name?.trim() || null }, { onConflict: 'email' })

    // Send email with download link
    try {
      const resend = getResend()
      await resend.emails.send({
        from: `${siteConfig.name} <${siteConfig.contact.email}>`,
        to: email.toLowerCase().trim(),
        subject: `Your free PDF: ${resourceData.title}`,
        html: renderResourceEmailHtml({
          name: name?.trim() || '',
          resourceTitle: resourceData.title,
          downloadUrl: resourceData.downloadUrl,
        }),
      })
    } catch (emailErr) {
      // Log but don't fail the request if email fails
      console.error('Resource email send failed:', emailErr)
    }

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('Resource lead error:', message)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
