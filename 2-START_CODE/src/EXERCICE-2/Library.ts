// TODO

import { Book } from "./Book";

// Library class
export class Library {

    private books: Book[];
    constructor(
      private name: string, 
      private address: string) {
      this.books = [];
      this.name = name;
      this.address = address;
    }
  
    addBook(book: Book): void {
      this.books.push(book);
    }
  
    // getAllBooks(): Book[] {
    //   return this.books;
    // }
  }
