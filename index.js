function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  console.log(bookArr)
  const main = document.querySelector('main');
  console.log(main)
  booksArr.forEach(book.Arr => {
    const h2 = document.createElement('h2');
    h2.lealeinnerHTML = bookArr.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
