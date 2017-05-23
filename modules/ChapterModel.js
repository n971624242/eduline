var mongoose = require('mongoose'); 
   var ChapterModel = mongoose.model('Chapter', new mongoose.Schema({  
      title: String,   
      content: String,   
      courseid: String,
	  uid:String,
    },{_id:true}));

module.exports=ChapterModel;