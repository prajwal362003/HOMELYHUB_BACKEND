// Deobfuscated Code
const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    logger: console,
    debug: true,
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: options.email,
    subject: options.subject,
    html: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;

// Obfuscated Code
// function _0x519c(){const _0x3ad75c=['10099200IEWLLO','message','email','EMAIL_FROM','EMAIL_HOST','200wkaQDP','sendMail','6PHjHwR','EMAIL_USERNAME','nodemailer','5904105uXwEkK','4293498luXisN','createTransport','exports','env','2WrIVkB','1408814bLnffw','1330218vmXBgt','4879693PzLcPR','EMAIL_PASSWORD','subject','EMAIL_PORT','5633960wcDaYx'];_0x519c=function(){return _0x3ad75c;};return _0x519c();}const _0xe9b3d0=_0x15c4;function _0x15c4(_0x494a6,_0x77983e){const _0x519c2e=_0x519c();return _0x15c4=function(_0x15c447,_0x2703eb){_0x15c447=_0x15c447-0x1ea;let _0x22bcb3=_0x519c2e[_0x15c447];return _0x22bcb3;},_0x15c4(_0x494a6,_0x77983e);}(function(_0x2440a5,_0x40e6ac){const _0x2cac72=_0x15c4,_0x4d60d2=_0x2440a5();while(!![]){try{const _0x1f8ddd=-parseInt(_0x2cac72(0x1f3))/0x1+parseInt(_0x2cac72(0x1f2))/0x2*(-parseInt(_0x2cac72(0x1ee))/0x3)+parseInt(_0x2cac72(0x1f9))/0x4+parseInt(_0x2cac72(0x1ed))/0x5+parseInt(_0x2cac72(0x1ea))/0x6*(-parseInt(_0x2cac72(0x1f5))/0x7)+-parseInt(_0x2cac72(0x1fa))/0x8+parseInt(_0x2cac72(0x1f4))/0x9*(parseInt(_0x2cac72(0x1ff))/0xa);if(_0x1f8ddd===_0x40e6ac)break;else _0x4d60d2['push'](_0x4d60d2['shift']());}catch(_0x28b342){_0x4d60d2['push'](_0x4d60d2['shift']());}}}(_0x519c,0xb6190));const nodemailer=require(_0xe9b3d0(0x1ec)),sendEmail=async _0x46396f=>{const _0x59cab6=_0xe9b3d0,_0x1a794b=nodemailer[_0x59cab6(0x1ef)]({'host':process[_0x59cab6(0x1f1)][_0x59cab6(0x1fe)],'port':process['env'][_0x59cab6(0x1f8)],'auth':{'user':process[_0x59cab6(0x1f1)][_0x59cab6(0x1eb)],'pass':process[_0x59cab6(0x1f1)][_0x59cab6(0x1f6)]}}),_0xb81bcf={'from':process[_0x59cab6(0x1f1)][_0x59cab6(0x1fd)],'to':_0x46396f[_0x59cab6(0x1fc)],'subject':_0x46396f[_0x59cab6(0x1f7)],'html':_0x46396f[_0x59cab6(0x1fb)]};await _0x1a794b[_0x59cab6(0x200)](_0xb81bcf);};module[_0xe9b3d0(0x1f0)]=sendEmail;
