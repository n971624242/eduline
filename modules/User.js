var mongoose = require('mongoose'); 
   var User = mongoose.model('user', new mongoose.Schema({  
      email: String,   
      pwd: String,   
      nicheng: String,
	  role:Number,
	  msgnum:Number,
	  realname:String,
	  idnumber:String,
	  photopath:String,
	  brief:String,
    },{_id:true}));
module.exports=User;