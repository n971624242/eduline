var mongoose = require('mongoose'); 
   var Course = mongoose.model('course', new mongoose.Schema({
      title:String, 
      type:Number, 
      logo:String, 
      brief: String,   
      uid: String,
	  uname:String,
	  status:Number,
	  pubtime:Date,
    },{_id:true}));

module.exports=Course;