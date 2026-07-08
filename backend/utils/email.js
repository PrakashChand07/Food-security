const nodemailer = require('nodemailer');
const { Resend } = require('resend');

// Initialize nodemailer transporter if SMTP credentials are provided
let transporter = null;
if (process.env.SMTP_USER && process.env.SMTP_PASS) {
  const host = process.env.SMTP_HOST || 'smtp-relay.brevo.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const secure = port === 465;

  transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  console.log(`✉️ Email configured via SMTP: ${host}:${port} (${process.env.SMTP_USER})`);
}

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function buildSubject(formType) {
  switch ((formType || '').toLowerCase()) {
    case 'contact': return 'New Contact Form Submission';
    case 'subscribe': return 'New Subscription';
    case 'booking': return 'New Booking Request';
    case 'exhibitsponsor': return 'New Exhibit / Sponsor Request';
    case 'nominate': return 'New Nomination';
    case 'partner': return 'New Partnership Request';
    case 'pasteditionrequest': return 'Past Edition Request';
    case 'speak': return 'New Speaker Submission';
    case 'visit': return 'New Visit Request';
    default: return 'New Form Submission';
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function prettyValue(v) {
  if (v === null || v === undefined) return '';
  if (typeof v === 'object') {
    try { return JSON.stringify(v, null, 2); }
    catch { return String(v); }
  }
  return String(v);
}

function buildHtml(formType, data) {
  let rows = '';
  const excludeKeys = ['_id', 'id', '__v', 'updatedAt', '$__', '_doc'];

  Object.keys(data || {}).forEach((k) => {
    if (excludeKeys.includes(k)) return;

    const label = k.replace(/([A-Z])/g, ' $1');
    const displayLabel = label.charAt(0).toUpperCase() + label.slice(1);

    rows += `
      <tr>
        <td style="padding:8px;border:1px solid #ddd"><b>${escapeHtml(displayLabel)}</b></td>
        <td style="padding:8px;border:1px solid #ddd">${escapeHtml(prettyValue(data[k]))}</td>
      </tr>
    `;
  });

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px">
      <h2>${buildSubject(formType)}</h2>
      <table style="border-collapse:collapse;width:100%">${rows}</table>
    </div>
  `;
}

async function sendFormEmail(formType, data) {
  const adminEmail = process.env.ADMIN_EMAIL;
  const fromEmail = process.env.FROM_EMAIL;
  const fromName = process.env.FROM_NAME || 'Food Security Team';

  if (!adminEmail || !fromEmail) {
    console.error('❌ ADMIN_EMAIL / FROM_EMAIL not set');
    return;
  }

  if (!transporter && !resend) {
    console.error('❌ Neither SMTP nor RESEND_API_KEY is configured');
    return;
  }

  let payload = data;
  if (data && typeof data.toObject === 'function') {
    payload = data.toObject();
  }

  const subject = buildSubject(formType);
  const html = buildHtml(formType, payload);

  // 1. Try SMTP if configured
  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: adminEmail,
        subject,
        html,
      });
      console.log(`✅ Email sent successfully via SMTP for '${formType}'`);
      return;
    } catch (err) {
      console.error(`❌ SMTP Email failed for '${formType}':`, err.message);
      // fallback to Resend if it's also configured
    }
  }

  // 2. Try Resend if configured
  if (resend) {
    try {
      await resend.emails.send({
        from: `${fromName} <${fromEmail}>`,
        to: adminEmail,
        subject,
        html,
      });
      console.log(`✅ Email sent successfully via Resend for '${formType}'`);
      return;
    } catch (err) {
      console.error(`❌ Resend Email failed for '${formType}':`, err.message);
    }
  }
}

module.exports = { sendFormEmail };
