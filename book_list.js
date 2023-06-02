class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  static displayBooks() {
    const StoreBooks = [
      {
        title: "Book 1",
        author: "Jenny",
        isbn: "00001",
      },
      {
        title: "Book2",
        author: "Jenny",
        isbn: "00002",
      },
    ];

    const books = StoreBooks;
    books.forEach((book) => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href ="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
    list.appendChild(row);
  }
  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }
  static clearInput() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

// handle storage

document.addEventListener("DOMContentLoaded", UI.displayBooks);

document.querySelector("#book-form").addEventListener("submit", (e) => {
  //Prevent actual submit
  e.preventDefault();
  //get form value
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // Instatiate book
  const book = new Book(title, author, isbn);

  const row = document.createElement("tr");

  // Add book to list
  UI.addBookToList(book);

  // Clear fields
  UI.clearInput();
});

document.querySelector("#book-list").addEventListener("click", (e) => {
  UI.deleteBook(e.target);
});
