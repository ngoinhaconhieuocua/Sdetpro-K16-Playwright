"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookManagement = void 0;
var BookManagement = /** @class */ (function () {
    function BookManagement() {
        this.books = [];
    }
    BookManagement.prototype.addBook = function (book) {
        var checkReady = 0;
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book1 = _a[_i];
            if (book1.getId() == book.getId()) {
                console.log("Book already exists");
                return;
            }
        }
        if (checkReady == 0) {
            this.books.push(book);
            console.log("Add book successfully");
        }
    };
    BookManagement.prototype.removeBook = function (book) {
        var index = this.books.indexOf(book);
        if (index !== -1) {
            this.books.splice(index, 1);
        }
    };
    BookManagement.prototype.searchByISBN = function (id) {
        var result = [];
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            if (book.getId() === id) {
                result.push(book);
            }
        }
        return result;
    };
    return BookManagement;
}());
exports.BookManagement = BookManagement;
