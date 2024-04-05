// TODO

import { Author } from "./Author";
import { Book } from "./Book";
import { Library } from "./Library";
import { Publisher } from "./Publisher";

const author1 = new Author("Ronan");
const author2 = new Author("Him");

const publishers1 = new Publisher("Sipar", "Phnom Penh");
const publishers2 = new Publisher("IBC", "Siem Reap");

  
const book1 = new Book("OOP is the best", "2018", author1,publishers1);
const book2 = new Book("Best team?", "2015", author1,publishers1);
const book3 = new Book("The Why not book", "2020", author2, publishers2);

   
const library = new Library("PNC LIBARAY", "Phnom Penh");

library.addBook(book1);


//    // Display all books in the library
// console.log("Books in the library:");
// library.getAllBooks().forEach(book => {
//     console.log(`Title: ${book.getTitle()}, Author: ${book.getAuthor().getName()}, Publisher: ${book.getPublisher().getName()}`);
// });
 
