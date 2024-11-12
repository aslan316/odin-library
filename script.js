const myLibrary = [];

function Book(author, title, numberPages) {
  this.author = author;
  this.title = title;
  this.numberPages = numberPages;
}

function addBookToLibrary(author, title, numberPages) {
  myLibrary.push(Book(author, title, numberPages));
}
