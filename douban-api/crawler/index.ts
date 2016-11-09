import * as request from 'request';
import * as cheerio from 'cheerio';
import * as db from '../model';
import { Book } from '../model/books';

// 请求豆瓣的读书
request(`https://book.douban.com/`, (err, res, body) => {
    var $ = cheerio.load(body);
    var result = <string[]>$('.list-express.slide-item li a').toArray().map(el => {
        var itemLink = (<string>el.attribs['href']).replace('\'', '"');

        new db.Book({ bookId: '', bookType: '新书速递' }).save((err, doc, affected) => {
            console.log(doc);
        });
        return itemLink;
    });

    console.log(result);
});