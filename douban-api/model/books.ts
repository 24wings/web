import * as  mongo from 'mongoose';
var BookSchema = new mongo.Schema({
    bookId: [String],
    bookType: String
});

export var Book = mongo.model('book', BookSchema);
