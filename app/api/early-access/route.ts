import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      email,
      first_name,
      last_name,
      role,
      company,
      website,
      country,
      interests,
      use_case,
      timeline,
      how_heard,
      consent_terms,
      consent_marketing,
      utm_source,
      utm_medium,
      utm_campaign,
    } = body;

    // Validate required fields
    if (!email || !consent_terms) {
      return NextResponse.json(
        { error: 'Email and terms consent are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Calculate priority score (simple scoring system)
    let score = 0;
    if (role) score += 10;
    if (company) score += 10;
    if (website) score += 10;
    if (use_case && use_case.length > 50) score += 20;
    if (interests && interests.length > 0) score += 10;
    if (timeline === 'Right now') score += 30;
    else if (timeline === '1-3 months') score += 20;
    else if (timeline === 'Exploring') score += 10;

    // Send notification email to AcronIQ team
    const { data, error } = await resend.emails.send({
      from: 'AcronIQ Early Access <noreply@acroniq.co.uk>',
      to: ['info@acroniq.co.uk'],
      subject: `🚀 New Early Access Request - ${first_name || 'User'} ${last_name || ''} (Score: ${score})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e40af, #3b82f6); padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🚀 New Early Access Request</h1>
          </div>
          
          <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
            ${score >= 70 ? `
              <div style="background: #dcfce7; border: 2px solid #16a34a; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
                <p style="margin: 0; color: #15803d; font-weight: bold;">⭐ HIGH PRIORITY LEAD - Score: ${score}</p>
              </div>
            ` : `
              <div style="background: #dbeafe; border: 2px solid #3b82f6; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
                <p style="margin: 0; color: #1e40af; font-weight: bold;">Priority Score: ${score}</p>
              </div>
            `}
            
            <div style="background: white; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <h3 style="color: #1e40af; margin-top: 0;">Contact Information</h3>
              <p><strong>Name:</strong> ${first_name || 'N/A'} ${last_name || ''}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Role:</strong> ${role || 'N/A'}</p>
              <p><strong>Company:</strong> ${company || 'N/A'}</p>
              <p><strong>Website:</strong> ${website || 'N/A'}</p>
              <p><strong>Country:</strong> ${country || 'N/A'}</p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <h3 style="color: #1e40af; margin-top: 0;">Interest Details</h3>
              <p><strong>Timeline:</strong> ${timeline || 'N/A'}</p>
              <p><strong>Areas of Interest:</strong> ${interests && interests.length > 0 ? interests.join(', ') : 'N/A'}</p>
              <p><strong>How they heard about us:</strong> ${how_heard || 'N/A'}</p>
            </div>
            
            ${use_case ? `
              <div style="background: white; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
                <h3 style="color: #1e40af; margin-top: 0;">Use Case</h3>
                <p style="line-height: 1.6; white-space: pre-wrap;">${use_case}</p>
              </div>
            ` : ''}
            
            <div style="background: white; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <h3 style="color: #1e40af; margin-top: 0;">Consent & Marketing</h3>
              <p><strong>Terms Consent:</strong> ${consent_terms ? '✅ Yes' : '❌ No'}</p>
              <p><strong>Marketing Consent:</strong> ${consent_marketing ? '✅ Yes' : '❌ No'}</p>
            </div>
            
            ${utm_source || utm_medium || utm_campaign ? `
              <div style="background: white; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
                <h3 style="color: #1e40af; margin-top: 0;">UTM Parameters</h3>
                <p><strong>Source:</strong> ${utm_source || 'N/A'}</p>
                <p><strong>Medium:</strong> ${utm_medium || 'N/A'}</p>
                <p><strong>Campaign:</strong> ${utm_campaign || 'N/A'}</p>
              </div>
            ` : ''}
            
            <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-radius: 6px; border-left: 4px solid #3b82f6;">
              <p style="margin: 0; color: #1e40af; font-size: 14px;">
                <strong>Submitted:</strong> ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send notification' },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    if (consent_marketing) {
      await resend.emails.send({
        from: 'AcronIQ Research <noreply@acroniq.co.uk>',
        to: [email],
        subject: 'Welcome to AcronIQ Early Access Programme',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1e40af, #3b82f6); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to AcronIQ</h1>
              <p style="color: #dbeafe; margin: 10px 0 0 0; font-size: 16px;">Early Access Programme</p>
            </div>
            
            <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
              <p style="font-size: 16px; line-height: 1.6; color: #334155;">
                Hi ${first_name || 'there'},
              </p>
              
              <p style="font-size: 16px; line-height: 1.6; color: #334155;">
                Thank you for your interest in AcronIQ Veritus. You're now on our early access waitlist.
              </p>
              
              <div style="background: white; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #3b82f6;">
                <h3 style="color: #1e40af; margin-top: 0;">What happens next?</h3>
                <ul style="color: #334155; line-height: 1.8;">
                  <li>We'll review your application and prioritize based on fit and timeline</li>
                  <li>You'll receive updates on our development progress</li>
                  <li>When we're ready, you'll get priority access to beta releases</li>
                  <li>Your feedback will directly influence product development</li>
                </ul>
              </div>
              
              <p style="font-size: 16px; line-height: 1.6; color: #334155;">
                In the meantime, feel free to explore our <a href="https://acroniq.co.uk/journal" style="color: #3b82f6; text-decoration: none;">Journal</a> for insights on strategic intelligence and AI.
              </p>
              
              <p style="font-size: 16px; line-height: 1.6; color: #334155;">
                Best regards,<br>
                <strong>The AcronIQ Team</strong>
              </p>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
                <p style="font-size: 14px; color: #64748b; margin: 0;">
                  AcronIQ Research · Founded in Edinburgh · Built for the era of AI
                </p>
              </div>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json(
      { 
        message: 'Successfully joined early access programme',
        score,
        id: data?.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Early access form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
