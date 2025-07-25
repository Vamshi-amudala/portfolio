const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  try {
    const { name, email, subject, message } = JSON.parse(event.body);

    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'All fields are required' })
      };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'vamshiamudala126@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `<p><strong>Name:</strong> ${name}<br>
             <strong>Email:</strong> ${email}<br>
             <strong>Subject:</strong> ${subject}<br>
             <strong>Message:</strong> ${message}</p>`
    };

    await transporter.sendMail(mailOptions);

    const autoReply = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `<p>Hey ${name},<br>Thanks for reaching out! I'll reply soon.</p>`
    };

    await transporter.sendMail(autoReply);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email', details: err.message })
    };
  }
};
