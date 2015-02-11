#!/usr/bin/env node

var express  = require('express');
var app      = express();
var path     = require('path');
var open     = require("open");

app.use(express.static(path.join(__dirname, 'vendor/3.3.0_0/')));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

open("http://127.0.0.1:3000");

