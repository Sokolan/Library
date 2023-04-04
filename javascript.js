/* eslint-disable quotes */
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function toggleRead() {
  this.read = !this.read;
};

function addBookToLibrary() {
  const form = document.querySelector("form");

  form.style.display = "flex";
}

function changeReadStatus(e) {
  const card = e.target.parentElement.parentElement;
  card.classList.toggle("read");

  const bookId = card.id;
  myLibrary[bookId].toggleRead();
}

function createCard(book, bookId) {
  const card = document.createElement("div");
  card.setAttribute("id", `${bookId}`);
  card.classList.add("card");

  const title = document.createElement("p");
  title.classList.add("title");
  title.textContent = `Title: ${book.title}`;
  card.appendChild(title);

  const author = document.createElement("p");
  author.classList.add("author");
  author.textContent = `By: ${book.author}`;
  card.appendChild(author);

  const pages = document.createElement("p");
  pages.classList.add("pages");
  pages.textContent = `Pages: ${book.pages}`;
  card.appendChild(pages);

  //  container for the read status
  const readStatus = document.createElement("div");
  readStatus.classList.add("read-status");

  const label = document.createElement("label");
  label.setAttribute("for", "checkbox");
  label.textContent = "read";
  readStatus.appendChild(label);

  const read = document.createElement("input");
  read.setAttribute("type", "checkbox");
  read.setAttribute("id", "card-checkbox");
  read.addEventListener("click", changeReadStatus);

  if (book.read) {
    read.checked = true;
    card.classList.add("read");
  }

  readStatus.appendChild(read);
  card.appendChild(readStatus);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("remove-card");
  deleteButton.textContent = "X Remove";
  deleteButton.addEventListener("click", deleteCardHandler);
  card.appendChild(deleteButton);

  return card;
}

function displayBooks() {
  const container = document.querySelector(".cards-container");
  const form = document.querySelector("form");
  container.replaceChildren();
  container.appendChild(form);
  for (let i = 0; i < myLibrary.length; i += 1) {
    container.appendChild(createCard(myLibrary[i], i));
  }
}

function submitEventHandler(event) {
  const author = document.querySelector("#author").value;
  const title = document.querySelector("#title").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#form-checkbox").checked;
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);

  displayBooks();

  const form = document.querySelector("form");
  form.reset();
  form.style.display = "none";
  event.preventDefault();
}

function deleteCardHandler(e) {
  const card = e.target.parentElement;
  console.log(card.id);
  myLibrary.splice(card.id, 1);
  displayBooks();
}

document.querySelector(".add-book").addEventListener("click", addBookToLibrary);
document
  .querySelector(".submit-button")
  .addEventListener("click", submitEventHandler);

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 281, true);
const book2 = new Book("1984", "George Orwell", 328, true);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
const book4 = new Book("Pride and Prejudice", "Jane Austen", 279, true);
const book5 = new Book("Brave New World", "Aldous Huxley", 288, false);
const book6 = new Book("The Catcher in the Rye", "J.D. Salinger", 277, true);
const book7 = new Book("To the Lighthouse", "Virginia Woolf", 209, false);
const book8 = new Book("The Picture of Dorian Gray", "Oscar Wilde", 254, true);
const book9 = new Book("The Bell Jar", "Sylvia Plath", 288, false);

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);
myLibrary.push(book4);
myLibrary.push(book4);
myLibrary.push(book4);
myLibrary.push(book5);
myLibrary.push(book6);
myLibrary.push(book7);
myLibrary.push(book8);
myLibrary.push(book9);

displayBooks();
