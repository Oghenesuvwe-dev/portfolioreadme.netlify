// Netlify Function: sendBooking
// Sends email notifications for booking requests via SendGrid
// Required env vars: SENDGRID_API_KEY, TO_EMAIL, FROM_EMAIL

const sgMail = require('@sendgrid/mail');

exports.handler = async function (event) {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: 'Method Not Allowed' };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { name, email, dateTime, message, referrer } = body;

    // Validate required fields
    if (!name || !email || !dateTime) {
      return { 
        statusCode: 400, 
        headers, 
        body: 'Missing required fields: name, email or dateTime' 
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { statusCode: 400, headers, body: 'Invalid email format' };
    }

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const TO_EMAIL = process.env.TO_EMAIL;
    const FROM_EMAIL = process.env.FROM_EMAIL || 'no-reply@portfolioreadme.netlify.app';

    if (!SENDGRID_API_KEY || !TO_EMAIL) {
      console.error('Missing environment variables: SENDGRID_API_KEY or TO_EMAIL');
      return { 
        statusCode: 500, 
        headers, 
        body: 'Server configuration error' 
      };
    }

    sgMail.setApiKey(SENDGRID_API_KEY);

    const formattedDate = new Date(dateTime).toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    const subject = `📅 New Booking Request from ${name}`;
    
    const text = `New Booking Request

Name: ${name}
Email: ${email}
Requested Date/Time: ${formattedDate}
Referrer: ${referrer || 'Direct'}

Message:
${message || 'No message provided'}

---
Reply directly to this email to respond to ${name}.`;

    const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #f97316, #f59e0b); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: 600; color: #6b7280; font-size: 12px; text-transform: uppercase; }
    .value { font-size: 16px; color: #111827; }
    .message-box { background: white; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb; margin-top: 10px; }
    .footer { text-align: center; margin-top: 20px; color: #9ca3af; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 24px;">📅 New Booking Request</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">From</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Requested Date & Time</div>
        <div class="value">${formattedDate}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${(message || 'No message provided').replace(/\n/g, '<br>')}</div>
      </div>
    </div>
    <div class="footer">
      <p>Reply directly to this email to respond to ${name}</p>
      <p>Sent from: ${referrer || 'Direct'}</p>
    </div>
  </div>
</body>
</html>`;

    const msg = {
      to: TO_EMAIL,
      from: FROM_EMAIL,
      replyTo: email,
      subject,
      text,
      html
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true, message: 'Booking request sent successfully' })
    };
  } catch (err) {
    console.error('sendBooking error:', err);
    return { 
      statusCode: 500, 
      headers, 
      body: 'Failed to send booking request. Please try again later.' 
    };
  }
};
