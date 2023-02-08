import React, { useEffect, useContext } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import BooksContext from "./context/books";

function App() {
  const { getBooks } = useContext(BooksContext);
  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookCreate />
      <BookList />
    </div>
  );
}

export default App;
