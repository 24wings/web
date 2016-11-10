"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var mongo = require('mongoose');
// 测试连接
var db = mongo.connect("mongodb://123:123@ds023664.mlab.com:23664/topshadow", function (err) {
    console.log(err);
});
__export(require('./books'));
//   db.disconnect((err) => {
//         console.log(err);
//     });
// db.on 
