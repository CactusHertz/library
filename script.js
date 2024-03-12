const myLibrary = [];

class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read; 
    }

    info(){
        return (this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read)
    }
}

function AddBookToLibrary(title, author, pages, read) {
    var tempBook = new Book(title, author, pages, read);
    myLibrary.push(tempBook);
}

function DisplayBooks() {
    const list = document.querySelector('.books');
    list.innerHTML = '';
    for (var i = 0; i < myLibrary.length; i++){
        console.log(myLibrary[i].info());
        list.appendChild(CreateBookCard(myLibrary[i], i));
    }
}

function CreateBookCard(book, index){
    const card = document.createElement('div');
    card.setAttribute('data-index', index);
    card.setAttribute('class', 'card');

    const title = document.createElement('h3');
    title.textContent = book.title;
    const author = document.createElement('div');
    author.textContent = book.author;
    const pages = document.createElement('div');
    pages.textContent = book.pages + ' pages';
    const read = document.createElement('input');
    read.setAttribute('type', 'checkbox');
    if (book.read){
        read.setAttribute('checked', '');
    }
    read.addEventListener('click', () => {
        myLibrary[index].read = read.checked
    });
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.addEventListener('click', () =>{
        deleteBook(deleteButton.parentElement);
    });

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(deleteButton);

    return card;
}

function openForm() {
    document.getElementById("book-form").style.display = "block";
    document.getElementById('add').style.display = 'none';
  }
  
function closeForm() {
    document.getElementById("book-form").style.display = "none";
    document.getElementById('add').style.display = 'block';
} 

function deleteBook(bookCard) {
    myLibrary.splice(bookCard.dataset.index, 1);
    bookCard.remove();
    DisplayBooks();
}

let bookForm = document.getElementById('book-form');

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let pages = document.getElementById('pages');
    let read = document.getElementById('read');
    
    AddBookToLibrary(title.value, author.value, pages.value, read.checked);
    DisplayBooks();
    bookForm.reset();

    closeForm();
});


for(var i = 0; i < 25; i++){
    AddBookToLibrary('Title','Author', 100, false);
}

DisplayBooks();