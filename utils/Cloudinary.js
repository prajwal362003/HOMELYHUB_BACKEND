// function _0x2437(_0x31df7a,_0xc78b0a){const _0x2af0a5=_0x2af0();return _0x2437=function(_0x243794,_0x4178a6){_0x243794=_0x243794-0x1b6;let _0x485f8=_0x2af0a5[_0x243794];return _0x485f8;},_0x2437(_0x31df7a,_0xc78b0a);}const _0x46c0cb=_0x2437;(function(_0x52afbe,_0xdf332e){const _0x5a4353=_0x2437,_0x2526e0=_0x52afbe();while(!![]){try{const _0x1effbe=parseInt(_0x5a4353(0x1c1))/0x1+-parseInt(_0x5a4353(0x1c2))/0x2*(parseInt(_0x5a4353(0x1b9))/0x3)+parseInt(_0x5a4353(0x1c3))/0x4+-parseInt(_0x5a4353(0x1b8))/0x5*(parseInt(_0x5a4353(0x1bf))/0x6)+parseInt(_0x5a4353(0x1c4))/0x7*(-parseInt(_0x5a4353(0x1c0))/0x8)+-parseInt(_0x5a4353(0x1be))/0x9+parseInt(_0x5a4353(0x1c7))/0xa;if(_0x1effbe===_0xdf332e)break;else _0x2526e0['push'](_0x2526e0['shift']());}catch(_0x302093){_0x2526e0['push'](_0x2526e0['shift']());}}}(_0x2af0,0x79484));const cloudinary=require('cloudinary')['v2'],path=require('path'),dotenv=require(_0x46c0cb(0x1bc))['config']({'path':path['join'](__dirname,_0x46c0cb(0x1ba))});cloudinary[_0x46c0cb(0x1b7)]({'cloud_name':process[_0x46c0cb(0x1b6)][_0x46c0cb(0x1c5)],'api_key':process['env'][_0x46c0cb(0x1c6)],'api_secret':process['env'][_0x46c0cb(0x1bb)]}),module[_0x46c0cb(0x1bd)]=cloudinary;function _0x2af0(){const _0x1e694c=['8MLvzhg','713180XDYNYf','6JgpNxs','932300JbafNk','253505RfhWMP','CLOUD_NAME','CLOUD_KEY','13075080FMfxes','env','config','3426155iREWvn','105951ujbSjy','../config.env','CLOUD_KEY_SECRET','dotenv','exports','8366346IHBINd','6dxgpOS'];_0x2af0=function(){return _0x1e694c;};return _0x2af0();}

// Deobfuscated Code
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_KEY_SECRET,
});
module.exports = cloudinary;
