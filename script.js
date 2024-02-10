const myLibrary = [];

function Book(title, author, pages, read){
    // contructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return (this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read)
    };
}

function AddBookToLibrary() {
    var tempBook = new Book("test title", "test author", Math.floor(Math.random() * 100), false);
    myLibrary.push(tempBook);
}

function DisplayBooks(books) {
    const list = document.querySelector('.books');
    for (var i = 0; i < books.length; i++){
        console.log(books[i].info());
        list.appendChild(CreateBookCard(books[i]));
    }
}

function CreateBookCard(book){
    const card = document.createElement('div');

    const title = document.createElement('div');
    title.textContent = book.title;
    const author = document.createElement('div');
    author.textContent = book.author;
    const pages = document.createElement('div');
    pages.textContent = book.pages;
    const read = document.createElement('input');
    read.setAttribute('type', 'checkbox');
    read.setAttribute('checked', 'true');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(deleteButton);

    return card;
}

for(var i = 0; i < 10; i++){
    AddBookToLibrary();
}
DisplayBooks(myLibrary);