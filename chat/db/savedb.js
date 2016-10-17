var express = require('express');
var path = require('path');
var mongoose = require("mongoose");

var app = express();

//创建数据库
mongoose.Promise = global.Promise;
db = mongoose.createConnection('localhost', 'chat');

db.on('error',console.error.bind(console,'连接错误'));

var schema = new mongoose.Schema({
	"name": String,
	"msg":String,
	"time":String
});

var chat = db.model('chat',schema);

module.exports = chat;
