import Book from "./Book";
import { BookManagement } from "./BookManagement";
let bookManagement = new BookManagement();
import readline = require('readline-sync');

function menu() {
    console.log("============ Book Management Program (CRUD)============");
    console.log("1. New book");
    console.log("2. Find a book(ISBN)");
    console.log("3. Update a book");
    console.log("4. Delete a book");
    console.log("5. Print the book list");
    console.log("0. Exit");
    let input = Number(readline.question("in put your choice:"));
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
    let id = Number(readline.question("Input id: "));
    let title = readline.question("Input title: ");
    let author = readline.question("Input author: ");
    let year = readline.question("Input year: ");
    let book = new Book(id, title, author, year);

    bookManagement.addBook(book);

}
function findBook() {
    let id = Number(readline.question("Input ISND : "));
    let result = bookManagement.searchByISBN(id);
    if (result.length == 0) {
        console.log("Not found");
    }
    else {
        console.log(result);
    }
   
}

function updateBook() {
    let id = Number(readline.question("Input ISND : "));
    let result = bookManagement.searchByISBN(id);
    if (result.length == 0) {
        console.log("Not found");
    }
    else {
        let title = readline.question("Input title: ");
        let author = readline.question("Input author: ");
        let year = readline.question("Input year: ");
        result[0].setTitle(title);
        result[0].setAuthor(author);
        result[0].setYear(year);
        console.log("Update book successfully");
    }
    
}
function deleteBook() {
    let id = Number(readline.question("Input ISND : "));
    let result = bookManagement.searchByISBN(id);
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


