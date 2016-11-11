"use strict";
var cheerio = require('cheerio');
var fs = require('fs');
// 请求豆瓣的读书
// request(`https://book.douban.com/`, (err, res, body) => {
// fs.writeFileSync('temp.html', body);
// var $ = cheerio.load(body);
// var result = <string[]>$('.list-express.slide-item li a').toArray().map(el => {
// var itemLink = (<string>el.attribs['href']).replace('\'', '"');
// new db.Book({ bookId: '', bookType: '新书速递' }).save((err, doc, affected) => {
// console.log(doc);
// });
// return itemLink;
// });
var result = fs.readFileSync('temp.html').toString('utf-8');
var $ = cheerio.load(result);
var obj = {};
obj.newBooks = $('.list-express.slide-item li a img').toArray().map(function (item) {
    var href = item.parentNode.attribs['href'];
    var bookId = href.replace('https://book.douban.com/subject/', '').split('/')[0];
    return { href: href, src: item.attribs['src'], bookId: bookId };
});
fs.appendFile('./newbook.json', JSON.stringify(obj), function (err) {
    if (err)
        console.error(err);
    console.log(JSON.stringify(obj));
});
// console.log(JSON.stringify(obj));
