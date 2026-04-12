import { siteConfig } from '@/config/site'

interface ResourceEmailProps {
  name: string
  resourceTitle: string
  downloadUrl: string
}

export function renderResourceEmailHtml({ name, resourceTitle, downloadUrl }: ResourceEmailProps): string {
  const firstName = name ? name.split(' ')[0] : 'there'

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#0A0F1C;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 20px;">

    <!-- Header -->
    <div style="text-align:center;margin-bottom:32px;">
      <h1 style="margin:0;font-size:20px;font-weight:700;color:#059669;">${siteConfig.name}</h1>
      <p style="margin:4px 0 0;font-size:12px;color:#64748B;">India's First Offline AI Training Center</p>
    </div>

    <!-- Main Card -->
    <div style="background-color:#111827;border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:36px 32px;">

      <!-- Greeting -->
      <p style="margin:0 0 8px;font-size:16px;color:#E5E7EB;">Hi ${firstName},</p>
      <p style="margin:0 0 24px;font-size:15px;color:#9CA3AF;line-height:1.6;">
        Your free resource is ready! Click the button below to download your copy.
      </p>

      <!-- Resource Title -->
      <div style="background-color:rgba(5,150,105,0.1);border:1px solid rgba(5,150,105,0.2);border-radius:12px;padding:16px 20px;margin-bottom:24px;">
        <p style="margin:0;font-size:11px;color:#059669;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Your Resource</p>
        <p style="margin:6px 0 0;font-size:17px;font-weight:700;color:white;">${resourceTitle}</p>
      </div>

      <!-- Download Button -->
      <div style="text-align:center;margin-bottom:28px;">
        <a href="${downloadUrl}" style="display:inline-block;background-color:#059669;color:white;text-decoration:none;font-size:14px;font-weight:600;padding:14px 32px;border-radius:8px;">
          Download PDF
        </a>
      </div>

      <hr style="border:none;border-top:1px solid rgba(255,255,255,0.06);margin:24px 0;">

      <!-- Cross-sell -->
      <p style="margin:0 0 12px;font-size:14px;font-weight:600;color:#E5E7EB;">Want to go deeper?</p>
      <p style="margin:0 0 16px;font-size:13px;color:#9CA3AF;line-height:1.6;">
        These resources are just a taste of what you'll learn in our hands-on AI courses. We offer 9 programs from ₹2,499 — all taught offline at our Kotkapura center.
      </p>

      <div style="text-align:center;">
        <a href="${siteConfig.url}/courses" style="display:inline-block;border:1px solid rgba(255,255,255,0.1);color:#059669;text-decoration:none;font-size:13px;font-weight:600;padding:10px 24px;border-radius:8px;">
          Browse AI Courses →
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align:center;margin-top:32px;">
      <p style="margin:0 0 4px;font-size:12px;color:#4B5563;">
        <a href="https://wa.me/919200882008" style="color:#059669;text-decoration:none;">WhatsApp: +91 92008-82008</a>
      </p>
      <p style="margin:0 0 4px;font-size:12px;color:#4B5563;">${siteConfig.contact.fullAddress}</p>
      <p style="margin:0;font-size:11px;color:#374151;">
        © ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.
      </p>
    </div>

  </div>
</body>
</html>`
}
