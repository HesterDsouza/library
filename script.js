const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.toggleRead = function() {
    this.read = !this.read
}

function addBookToLibrary(book){
    myLibrary.push(book)
    displayBooks()
}

function displayBooks(){
    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div')
        bookCard.classList.add('bookCard');

        const bookInfo = `
        <p>Title:- ${book.title}</p>
        <p>Author:- ${book.author}</p>
        <p>Pages:- ${book.pages}</p>
        <p>Read:- ${book.read}</p>
        <button class="remove" onclick="removeBook(${index})">Remove</button>
        <button class="toggle" onclick="toggleReadStatus(${index})">Toggle Read</button>
        `;
        bookCard.innerHTML = bookInfo;
        libraryDiv.appendChild(bookCard);
    })
}

function removeBook(index){
    myLibrary.splice(index, 1);
    displayBooks()
}

function toggleReadStatus(index){
    myLibrary[index].toggleRead();
    displayBooks()
}

document.getElementById('newBookBtn').addEventListener('click', () => {
    document.getElementById('bookForm').style.display = 'block'
})

document.getElementById('bookForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);

    document.getElementById('bookForm').reset()
    document.getElementById('bookForm').style.display = 'none'
});

// Manually add a few books to see the display
// addBookToLibrary(new Book('The Great Gatsby', 'F. Scott Fitzgerald', 218, true));
// addBookToLibrary(new Book('1984', 'George Orwell', 328, false));