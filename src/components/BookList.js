import React, { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  const { count, incrementCount } = useContext(BooksContext);
  const renderedBooks = books.map((book) => (
    <div key={book.id}>
      <BookShow
        id={book.id}
        title={book.title}
        onDelete={onDelete}
        onEdit={onEdit}
      />
      {count}
      <button onClick={incrementCount}>Click</button>
    </div>
  ));
  return <div className="book-list">{renderedBooks} </div>;
}

export default BookList;
