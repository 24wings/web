"use strict";
var express = require('express');
var bodyPaser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
app.use(bodyPaser.urlencoded({ extended: true }));
app.use(bodyPaser.json());
app.use(methodOverride());
app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("server is listening on " + port);
});
