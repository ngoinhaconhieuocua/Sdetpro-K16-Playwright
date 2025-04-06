export default class Book {
    private id: number;
    private title: string;
    private author: string;
    private year: string;
    constructor(id: number, title: string, author: string, year: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getId(): number {
        return this.id;
    }
    getTitle(): string {
        return this.title;
    }
    getAuthor(): string {
        return this.author;
    }
    getYear(): string {
        return this.year;
    }
    setTitle(title: string): void {
        this.title = title;
    }
    setAuthor(author: string): void {
        this.author = author;
    }
    setYear(year: string): void {
        this.year = year;
    }

}

