const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function toggleRead() {
  this.read = !this.read;
}



function addBookToLibrary() {
  const form = document.querySelector('form');
  form.style.display = 'flex';
}

function changeReadStatus(e) {
  const card = e.target.parentElement.parentElement;
  card.classList.toggle('read');

  const bookId = card.id;
  myLibrary[bookId].toggleRead();
}

function createCard(book, bookId) {
  const card = document.createElement('div');
  card.setAttribute('id', `${bookId}`);
  card.classList.add('card');

  const title = document.createElement('p');
  title.classList.add('title');
  title.textContent = book.title;
  card.appendChild(title);

  const author = document.createElement('p');
  author.classList.add('author');
  author.textContent = book.author;
  card.appendChild(author);

  const pages = document.createElement('p');
  pages.classList.add('pages');
  pages.textContent = book.pages;
  card.appendChild(pages);

// container for the read status  
  const readStatus = document.createElement('div');
  readStatus.classList.add('read-status');

  const label = document.createElement('label');
  label.setAttribute('for', 'checkbox');
  label.textContent = 'read';
  readStatus.appendChild(label);
  
  const read = document.createElement('input');
  read.setAttribute('type', 'checkbox');
  read.setAttribute('id', 'checkbox');
  read.addEventListener('click', changeReadStatus);

  if(book.read){
    read.checked = true;
    card.classList.add('read');
  }

  readStatus.appendChild(read);
  card.appendChild(readStatus);

  return card;
}

function displayBooks() {
  const container = document.querySelector('.cards-container')
  for(let i = 0 ; i < myLibrary.length ; i += 1) {
    container.appendChild(createCard(myLibrary[i], i));    
  }
}

document.querySelector('.add-book').addEventListener('click', addBookToLibrary);

const book1 = new Book('A', 'A', 10, false);
const book2 = new Book('B', 'B', 10, true);
const book3 = new Book('C', 'C', 10, true);
const book4 = new Book('D', 'D', 10, true);
const book5 = new Book('Boot', 'bootovich', 420, false);


myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);
myLibrary.push(book4);
myLibrary.push(book4);
myLibrary.push(book4);
myLibrary.push(book5);


displayBooks();