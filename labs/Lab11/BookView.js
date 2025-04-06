"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("./Book");
var BookManagement_1 = require("./BookManagement");
var bookManagement = new BookManagement_1.BookManagement();
var readline = require("readline-sync");
function menu() {
    console.log("============ Book Management Program (CRUD)============");
    console.log("1. New book");
    console.log("2. Find a book(ISBN)");
    console.log("3. Update a book");
    console.log("4. Delete a book");
    console.log("5. Print the book list");
    console.log("0. Exit");
    var input = Number(readline.question("in put your choice:"));
    switch (input) {
        case 1:
            newBook();
            menu();
            break;
        case 2:
            findBook();
            menu();
            break;
        case 3:
            updateBook();
            menu();
            break;
        case 4:
            deleteBook();
            menu();
            break;
        case 5:
            printBook();
            menu();
            break;
        case 0:
            console.log("Exit");
            break;
        default:
            console.log("Invalid choice. Please try again.");
            menu();
    }
}
function newBook() {
    var id = Number(readline.question("Input id: "));
    var title = readline.question("Input title: ");
    var author = readline.question("Input author: ");
    var year = readline.question("Input year: ");
    var book = new Book_1.default(id, title, author, year);
    bookManagement.addBook(book);
}
function findBook() {
    var id = Number(readline.question("Input ISND : "));
    var result = bookManagement.searchByISBN(id);
    if (result.length == 0) {
        console.log("Not found");
    }
    else {
        console.log(result);
    }
}
function updateBook() {
    var id = Number(readline.question("Input ISND : "));
    var result = bookManagement.searchByISBN(id);
    if (result.length == 0) {
        console.log("Not found");
    }
    else {
        var title = readline.question("Input title: ");
        var author = readline.question("Input author: ");
        var year = readline.question("Input year: ");
        result[0].setTitle(title);
        result[0].setAuthor(author);
        result[0].setYear(year);
        console.log("Update book successfully");
    }
}
function deleteBook() {
    var id = Number(readline.question("Input ISND : "));
    var result = bookManagement.searchByISBN(id);
    if (result.length == 0) {
        console.log("Not found");
    }
    else {
        bookManagement.removeBook(result[0]);
        console.log("Delete book successfully");
    }
}
function printBook() {
    console.log(bookManagement);
}
menu();
