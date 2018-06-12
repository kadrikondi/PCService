
const nodemailer= require('nodemailer')



exports.ContactUs=(req,res)=>{
    res.render('contact',{title:'Contact'})
}

exports.MessageFromCustomer = (req,res)=>{
    let transporter= nodemailer.createTransport({
        service:'Gmail',
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, 
       auth:{
           user:'abdulkadri42@gmail.com',
           pass:5666666666

        }

    });
    let mailOptions={
        from:'"Idris abdulkadri" <abdulkadri42@gmail.com>',
        to:'kondipress@gmail.com',
        subject: 'Hello from Abspace website',
        text: `you have a new message..Name:${req.body.name} Email: ${req.body.email} Message:${req.body.message}`,
        html:'<p>you have a new message...<ul><li>Name:'+ req.body.name +'</li><li>Email:'+req.body.email+'</li> <li>Message:'+req.body.message+'</li></ul></p>'

    }

    transporter.sendMail(mailOptions, (error,info)=>{
     if(error){
         return console.log(error)
     }
      console.log('successful' + info.messageID);

    //   rede= async ()=>{
    //       res.render({msg:'mail sent'})
    //  const resp= await  
    //   }
    //   rede

      res.redirect('/')
     
    })
}
