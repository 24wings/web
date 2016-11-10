"use strict";
var request = require('request');
var cheerio = require('cheerio');
var db = require('../model');
// 请求豆瓣的读书
request("https://book.douban.com/", function (err, res, body) {
    var $ = cheerio.load(body);
    var result = $('.list-express.slide-item li a').toArray().map(function (el) {
        var itemLink = el.attribs['href'].replace('\'', '"');
        new db.Book({ bookId: '', bookType: '新书速递' }).save(function (err, doc, affected) {
            console.log(doc);
        });
        return itemLink;
    });
    console.log(result);
});
