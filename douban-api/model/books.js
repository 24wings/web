"use strict";
var mongo = require('mongoose');
var BookSchema = new mongo.Schema({
    bookId: [String],
    bookType: String
});
exports.Book = mongo.model('book', BookSchema);
