"use strict";
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const dbModel = require('../db/savedb.js');/*保存到数据库*/

io.on('connection',function(socket){
	socket.on('websocket',function(object){
		console.log('websocket+'+object);
		io.emit('websocket',object);

		var dbEntity = new dbmodel({
			"msg":object.msg,
			"name":object.name,
			"time":object.time
		});
		dbEntity.save(function(err){
			console.log(err)
		});

	});

	socket.on('disconnect',function(){
		console.log('user disconnected')
	});
});

module.exports = io;