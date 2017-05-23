var mongoose = require('mongoose'); 
   var Msg = mongoose.model('msg', new mongoose.Schema({  
      send: String,   
      to: String,   
      sendname: String,
	  message:String,
	  islook:Number,
	  sendtime:Date,
    },{_id:true}));

module.exports=Msg;