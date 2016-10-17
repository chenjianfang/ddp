"use strict";
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let mainInterface = require('./router/main-interface');

let app = express()

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'../ddp')));
app.use(express.static(path.join(__dirname,'/')));

app.use('/',mainInterface);

app.listen(3002);
console.log("location:3002")