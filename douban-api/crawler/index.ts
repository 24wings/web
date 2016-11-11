import * as request from 'request';
import * as cheerio from 'cheerio';
import * as db from '../model';
import * as fs from 'fs';
import { Book } from '../model/books';

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
var obj: any = {};

obj.newBooks = <{ href: string, src: string, bookId: string }[]>$('.list-express.slide-item li a img').toArray().map(item => {
    var href = <string>item.parentNode.attribs['href'];
    var bookId = href.replace('https://book.douban.com/subject/', '').split('/')[0];

    return { href: href, src: item.attribs['src'], bookId: bookId };
});

fs.appendFile('./newbook.json', JSON.stringify(obj), (err) => {
    if (err) console.error(err);
    console.log(JSON.stringify(obj));
});
// console.log(JSON.stringify(obj));
