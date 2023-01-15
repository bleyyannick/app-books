import React from "react";
import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  const renderedBooks = books.map((book) => (
    <div key={book.id}>
      <BookShow
        id={book.id}
        title={book.title}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </div>
  ));
  return <div className="book-list">{renderedBooks} </div>;
}

export default BookList;
