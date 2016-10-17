"use strict";
let express = require('express');
let app = express();
let http = require('http').Server(app);
let bodyParser = require('body-parser');
let path = require('path');
let io = require('socket.io')(http); /*实时通信*/
let dbModel = require('./db/savedb');/*保存到数据库*/

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'./')));
app.use(express.static(path.join(__dirname,'../ddp')));

app.post('/saveMessage',function(req,res){
	console.log(req.body);
	var dbEntity = new dbModel({
		"msg":req.body.msg,
		"name":req.body.name,
		"time":req.body.time
	});
	dbEntity.save(function(err){
		console.log(err)
	});
	dbEntity = null;
	res.json({"status":"0000"});
});

app.get('/initMessage',function(req,res){
	dbModel.find({})
		.sort({'_id':-1})
		.limit(100)
		.exec(function(err,docs){
			res.json({"result":docs})
		});
});


io.on('connection',function(socket){
	socket.on('websocket',function(object){
		console.log('websocket+'+object);
		io.emit('websocket',object);

	});

	socket.on('disconnect',function(){
		console.log('user disconnected')
	});
});



http.listen(3000,function(){
	console.log("listening on *:3000");
});