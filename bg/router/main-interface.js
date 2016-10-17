"use strict";
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let fs = require('fs');

let app = express();

app.post('/fileCode',function(req,res){
	let data = req.body.data;
	let tempUser = req.body.tempUser;
	//去除元素间的空格
	let reg = />[\s]+</g;
	data = data.replace(reg,"><");
	//得到CSS
	let _cssReg = /style="[^"]+"/g;
	let _css = data.match(_cssReg);
	_css = _css.map( (value,index) => {
		let tmp = value.replace("style=\"","{");
		return tmp.slice(0,tmp.length-1) + "}";
	});
	// console.log(_css);

	//得到css类名
	let _className = data.match(/data-id="[^"]+"/g);
	_className = _className.map( (value,index) => {
		return value.slice(value.indexOf("\"")+1,value.lastIndexOf("\""));
	});
	// console.log(_className);
	
	let cssFile = _className.map( (value,index) => {
		return `.${value}`+ _css[index];
	});

	console.log(cssFile);

	//写入css文件
	fs.writeFile(`lib/fileCode/${tempUser}.css`,cssFile.join(""),'utf8',(err) => {
		if(err) throw err;
		console.log("写入文件成功");
		var address = `lib/fileCode/${tempUser}.css`;
		res.json({"status":"0000","msg":"成功生成css文件","cssFile":address,"temp":cssFile});
	});
});
app.get('/downloadCss',function(req,res){
	let tempUser = req.query.tempUser;
	let ad = `lib/fileCode/${tempUser}`;
	let fReadStream;
	console.log(ad);

	fs.exists(ad,function(exist){
		if(exist){
			res.set({
				"Content-type":"application/octet-stream",
				"Content-Disposition":"attachment;filename=my.css"
			});
			fReadStream = fs.createReadStream(ad);
			fReadStream.on("data",(chunk) => res.write(chunk));
			fReadStream.on("end",function(){
				res.end();
			});
		}else{
			res.set("Content-type","text/html");
			res.send("file not exist");
			res.end();
		}
	});
});


module.exports = app;




