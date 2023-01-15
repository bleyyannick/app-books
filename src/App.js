import React, { useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const newBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(newBooks);
  };
  const deleteBook = (idToDelete) => {
    setBooks((prevBooks) =>
      [...prevBooks].filter(({ id }) => id !== idToDelete)
    );
  };
  const editBook = (id, title) => {
    setBooks((prevBooks) =>
      [...prevBooks].map((book) => (book.id === id ? { ...book, title } : book))
    );
  };

  return (
    <div className="app">
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
    </div>
  );
}

export default App;
