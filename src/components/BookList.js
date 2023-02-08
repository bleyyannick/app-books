import React, { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./BookShow";

function BookList() {
  const { books } = useContext(BooksContext);
  const renderedBooks = books.map((book) => (
    <div key={book.id}>
      <BookShow id={book.id} title={book.title} />
    </div>
  ));
  return <div className="book-list">{renderedBooks} </div>;
}
export default BookList;
