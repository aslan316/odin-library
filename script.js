const left = document.querySelector("#left");
const right = document.querySelector("#right");
const addButton = document.querySelector("#add-book");
const form = document.querySelector("form");
const bookDisplay = document.querySelector("#book-display");

const myLibrary = [];
let currentIndex = 0;
viewOrNew();

function Book(author, title, numberPages) {
  this.author = author;
  this.title = title;
  this.numberPages = numberPages;
}

function addBookToLibrary(author, title, numberPages) {
  myLibrary.push(new Book(author, title, numberPages));
}

left.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  }
  viewOrNew();
});
right.addEventListener("click", () => {
  if (currentIndex < myLibrary.length) {
    currentIndex++;
  }
  viewOrNew();
});

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  const titleInput = document.querySelector("#title");
  const authorInput = document.querySelector("#author");
  const pagesInput = document.querySelector("#number-pages");

  addBookToLibrary(authorInput.value, titleInput.value, pagesInput.value);
  viewOrNew();

  authorInput.value = "";
  titleInput.value = "";
  pagesInput.value = "";
});

function viewOrNew() {
  try {
    myLibrary[currentIndex];
    view();
  } catch (e) {
    displayForm();
  }
}

function displayForm() {
  bookDisplay.classList.remove("visible");
  bookDisplay.classList.add("hidden");
  form.classList.remove("hidden");
  form.classList.add("visible");
}

function view() {
  form.classList.remove("visible");
  form.classList.add("hidden");
  bookDisplay.classList.remove("hidden");
  bookDisplay.classList.add("visible");

  const title = document.querySelector("#title-text");
  const author = document.querySelector("#author-text");
  const pages = document.querySelector("#pages-text");
  const book = myLibrary[currentIndex];

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.numberPages;
}
