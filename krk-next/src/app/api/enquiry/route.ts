import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || 'enquiry@krk-logistics.com';
    const sender = process.env.CONTACT_SENDER_EMAIL || 'noreply@enquiry.krk-logistics.com';

    // If Resend API key is not configured, log and fallback to mock success
    if (!apiKey) {
      console.warn(
        'RESEND_API_KEY is not configured. Logged enquiry details:',
        { name, company, email, phone, service, message }
      );
      return NextResponse.json({
        success: true,
        message: 'Enquiry received successfully.',
      });
    }

    const resend = new Resend(apiKey);
    console.log("email sending");

    await resend.emails.send({
      from: `${name} via KRK Website <${sender}>`,
      to: receiver,
      reply_to: email,
      subject: `New KRK Logistics Enquiry from ${name}`,
      text: `
New website enquiry received.

Details:
------------------------------------------
Name: ${name}
Company: ${company || 'N/A'}
Email: ${email}
Phone: ${phone || 'N/A'}
Service: ${service || 'N/A'}

Message / Shipment Details:
${message}
------------------------------------------
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; max-width: 600px; border: 1px solid #dde3ed; border-radius: 8px;">
          <h2 style="color: #0d1e36; border-bottom: 2px solid #1354c8; padding-bottom: 8px;">New Website Enquiry</h2>
          <p>You have received a new enquiry from the KRK Logistics website contact form.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f5f7fa;">
              <td style="padding: 8px; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Company:</td>
              <td style="padding: 8px;">${company || 'N/A'}</td>
            </tr>
            <tr style="background-color: #f5f7fa;">
              <td style="padding: 8px; font-weight: bold;">Email:</td>
              <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Phone:</td>
              <td style="padding: 8px;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr style="background-color: #f5f7fa;">
              <td style="padding: 8px; font-weight: bold;">Service:</td>
              <td style="padding: 8px;">${service || 'N/A'}</td>
            </tr>
          </table>

          <h3 style="color: #0d1e36; margin-top: 20px;">Message / Shipment Details:</h3>
          <div style="background-color: #f5f7fa; padding: 15px; border-left: 4px solid #1354c8; border-radius: 4px; white-space: pre-wrap;">
            ${message}
          </div>
        </div>
      `,
    });
    console.log("email sent successfully");
    return NextResponse.json({ success: true, message: 'Email sent successfully.' });
  } catch (error: any) {
    console.error('Error sending email via Resend:', error);
    return NextResponse.json(
      { error: 'Failed to send enquiry email.' },
      { status: 500 }
    );
  }
}
