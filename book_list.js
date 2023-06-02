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
                title: 'Book 1',
                author: 'Jenny',
                isbn: '00001'
            },
            {
                title: 'Book2',
                author: 'Jenny',
                isbn: '00002'
            }
            ];

            const books = StoreBooks;
            books.forEach((book) => UI.addBookToList(book));
       }
       static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.tile}</td>
        <td>${book.author}</td>
        <td>${book.sibn}</td>
        <td><a href ="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
       }
}

// handle storage

document.addEventListener("DOMContentLoaded", UI.displayBooks);

