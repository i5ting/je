#!/usr/bin/env node

var express  = require('express')
var path     = require('path')
var open     = require("open")

var app      = express()

// 指定静态资源目录
app.use(express.static(path.join(__dirname, 'vendor/3.3.0_0/')))

// 启动服务器
app.listen(3024)

open("http://127.0.0.1:3024")
