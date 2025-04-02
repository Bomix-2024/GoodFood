const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.PORT === "465",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});


// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(to, subject, text) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Site Sweelife - Formulario de contato" <' + process.env.SMTP_USER + '>', // sender address
        to: to, // list of receivers
        subject: subject,
        html: text
    });

    return info
}



export default { sendEmail }