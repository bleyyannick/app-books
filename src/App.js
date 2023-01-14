import React, { useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const createBooks = (title) => {
    const newBooks = [
      ...books,
      { id: 1.59 * Math.random() + Math.random() * 0.54, title },
    ];
    setBooks(newBooks);
  };

  return (
    <div>
      <BookCreate onCreate={createBooks} />
      <BookList books={books} />
    </div>
  );
}

export default App;
