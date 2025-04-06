"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    Book.prototype.getId = function () {
        return this.id;
    };
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getYear = function () {
        return this.year;
    };
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.setYear = function (year) {
        this.year = year;
    };
    return Book;
}());
exports.default = Book;
