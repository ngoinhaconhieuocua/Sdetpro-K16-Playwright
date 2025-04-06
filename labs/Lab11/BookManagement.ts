import Book from "./Book";
export class BookManagement {
    private books: Book[];
    constructor() {
        this.books = [];
    }
    addBook(book: Book): void {
        let checkReady = 0;
        for (let book1 of this.books) {
            if (book1.getId() == book.getId()) {
                console.log("Book already exists");
                return;
            }
        }
        if (checkReady == 0) {
            this.books.push(book);
            console.log("Add book successfully");
        }

    }
    removeBook(book: Book): void {
        let index = this.books.indexOf(book);
        if (index !== -1) {
            this.books.splice(index, 1);
        }

    }

    searchByISBN(id: number): Book[] {
        let result: Book[] = [];
        for (let book of this.books) {
            if (book.getId() === id) {
                result.push(book);
            }
        }
        return result;
    }

}