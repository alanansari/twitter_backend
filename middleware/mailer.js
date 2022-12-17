const nodemailer = require('nodemailer');

const sendmail = async (email,otp) => {
    const msg = {
        from: "chatter.inc.si@gmail.com",
        to: email,
        subject: "OTP Verification from Chatter Inc.",
        html: `
        <div
          class="container"
          style="max-width: 90%; margin: auto; padding-top: 20px"
        >
          <h2>Welcome to Chatter!</h2>
          <h3>We are glad to have you.</h3>
          <h4>You are About to be a Member </h4>
          <p style="margin-bottom: 30px;">Please enter this sign up OTP to get started</p>
          <h1 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${otp}</h1>
     </div>
      `,
    }

    const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user: process.env.MAIL_ID,
                pass: process.env.MAIL_PASS
            },
            port: 456,
            host: "smtp.gmail.com"
    });

    transporter.sendMail(msg,err=>{
        if(err) console.log(err);
        else{
             console.log("mail sent");
             return true;
        }
    });
}

module.exports = {sendmail};