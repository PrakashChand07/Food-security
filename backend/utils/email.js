const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

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
  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY not set');
    return;
  }

  if (!process.env.ADMIN_EMAIL || !process.env.FROM_EMAIL) {
    console.error('❌ ADMIN_EMAIL / FROM_EMAIL not set');
    return;
  }

  let payload = data;
  if (data && typeof data.toObject === 'function') {
    payload = data.toObject();
  }

  try {
    await resend.emails.send({
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: buildSubject(formType),
      html: buildHtml(formType, payload),
    });

    console.log(`✅ Email sent successfully for '${formType}'`);
  } catch (err) {
    console.error(`❌ Email failed for '${formType}':`, err.message);
  }
}

module.exports = { sendFormEmail };
