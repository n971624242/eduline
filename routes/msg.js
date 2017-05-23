var express = require('express');
var router = express.Router();
var User = require("../modules/User");
var Msg = require("../modules/Msg");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.loginbean = req.session.loginbean;
  res.render('index', {});
});

function sendMsg(loginbean,rid,message,res){
	  let msg = new Msg({});
	  msg.send = loginbean.id;
	  msg.sendname = loginbean.nicheng;
	  msg.to = rid;
	  msg.message = message;
	  msg.sendtime = new Date();
	  msg.save(function(err,rs){
	  		if(err){
	  			console.log(err);
	  			res.send('0');
	  			return;
	  		}
	  		User.update({_id:rid},{$inc:{msgnum:1}},function(err,rs){
	  			if(err){
		  			console.log(err);
		  			res.send('0');
		  			return;
		  		}
		  		res.send('1');
	  		})
	  })
}

router.post('/reply', function(req, res, next) {
  let loginbean = req.session.loginbean;
  let rid = req.body['rid'];
  let message = req.body['message'];
  sendMsg(loginbean,rid,message,res);
});

router.post('/sendmsg', function(req, res, next) {
  let loginbean = req.session.loginbean;
  let nicheng = req.body['nicheng'];
  let message = req.body['message'];
  //---------查toid-----------------------
  User.findOne({nicheng:nicheng},function(err,rs){
  	if(err){
  			console.log(err);
  			res.send('0');
  			return;
  	}
  	if(rs){	//查到
  		let toid = rs._id;
  		sendMsg(loginbean,toid,message,res);
  	}else{  //没查到
  		res.send('-1');
  	}
  })
  //--------------------------------------
  
});

router.get('/del', function(req, res, next) {
	let loginbean = req.session.loginbean;
	let id = req.query['id'];
	Msg.remove({_id:id,to:loginbean.id},function(err,rs){
		if(err){
	  			console.log(err);
	  		}
	  	if(loginbean.role>0){
	  		res.redirect('/home/');
	  	}else{
	  		res.redirect('/home/adminhome');
	  	}
	  	
	});
})


module.exports = router;

