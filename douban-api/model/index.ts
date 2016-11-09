import * as mongo from 'mongoose';

// 测试连接

var db = mongo.connect(`mongodb://123:123@ds023664.mlab.com:23664/topshadow`, (err) => {
    console.log(err);

});
export * from './books';

//   db.disconnect((err) => {
//         console.log(err);
//     });
// db.on