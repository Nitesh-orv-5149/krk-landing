import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const receiver =
      process.env.CONTACT_RECEIVER_EMAIL ||
      'enquiry@krk-logistics.com';

    const sender =
      process.env.CONTACT_SENDER_EMAIL ||
      'enquiry@krk-logistics.com';

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465 ,
      secure: true, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    console.log('Sending email...');

    await transporter.sendMail({
      from: `"${name} via KRK Website" <${sender}>`,
      to: receiver,
      replyTo: email,
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
          <h2 style="color: #0d1e36; border-bottom: 2px solid #1354c8; padding-bottom: 8px;">
            New Website Enquiry
          </h2>

          <p>You have received a new enquiry from the KRK Logistics website contact form.</p>

          <table style="width:100%; border-collapse:collapse;">
            <tr>
              <td><strong>Name:</strong></td>
              <td>${name}</td>
            </tr>
            <tr>
              <td><strong>Company:</strong></td>
              <td>${company || 'N/A'}</td>
            </tr>
            <tr>
              <td><strong>Email:</strong></td>
              <td>${email}</td>
            </tr>
            <tr>
              <td><strong>Phone:</strong></td>
              <td>${phone || 'N/A'}</td>
            </tr>
            <tr>
              <td><strong>Service:</strong></td>
              <td>${service || 'N/A'}</td>
            </tr>
          </table>

          <h3>Message / Shipment Details</h3>

          <div style="background:#f5f7fa;padding:15px;border-left:4px solid #1354c8;white-space:pre-wrap;">
            ${message}
          </div>
        </div>
      `,
    });

    console.log('Email sent successfully');

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully.',
    });
  } catch (error) {
    console.error('SMTP Error:', error);

    return NextResponse.json(
      { error: 'Failed to send enquiry email.' },
      { status: 500 }
    );
  }
}