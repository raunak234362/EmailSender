const path = require('path')
const nodemailer=require('nodemailer')
const hbs=require('nodemailer-express-handlebars')

require('dotenv').config()

const transporter=nodemailer.createTransport({
  host:process.env.SMTP_HOST,
  port:process.env.SMTP_PORT,
  secure:process.env.SMTP_SECURE === 'true',
  auth:{
    user:process.env.SMTP_USERNAME,
    pass:process.env.SMTP_PASSWORD,
  }
});

const handlebarOptions={
    viewEngine:{
        extName:'.jsx',
        partialsDir:path.resolve('./views'),
        defaultLayout:false,
    },
    viewPath:path.resolve('./views'),
    extName:'.handlebars',
};

transporter.use('compile',hbs(handlebarOptions));



const mailOptions={
    from:'"Email Template" <'+process.env.EMAIL+'>',
    to:'raunakdob@gmail.com',
    subject:'Email Template',
    template:'email',
    // context:{
    //     title:'Email Template',
    // },
}

transporter.sendMail(mailOptions, function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log('Email sent: '+info.response);
    }
})
