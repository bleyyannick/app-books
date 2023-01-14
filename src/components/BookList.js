import React from "react";

function BookList({ books }) {
  const renderedBooks = books.map((book) => (
    <div key={book.id}>{book.title}</div>
  ));
  return renderedBooks;
}

export default BookList;
