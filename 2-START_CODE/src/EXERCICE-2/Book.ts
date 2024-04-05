// TODO

import { Author } from "./Author";
import { Publisher } from "./Publisher";

// Book class
export class Book {
    constructor(
        private title: string,
        private yearPublisher: string,
        private author: Author, 
        private publisher: Publisher) {
          this.title = title;
          this.yearPublisher = yearPublisher,
          this.author = author,
          this.publisher = publisher
        }
  
    // getTitle(): string {
    //   return this.title;
    // }

    getAuthor(): Author {
      return this.author;
    }
  
    setPublisher(): Publisher {
      return this.publisher;
    }

  }