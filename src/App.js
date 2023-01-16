import React, { useEffect, useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", { title });
    const newBooks = [...books, response.data];
    setBooks(newBooks);
  };
  const getBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  const deleteBook = async (idToDelete) => {
    await axios.delete("http://localhost:3001/books/" + idToDelete);
    setBooks((prevBooks) =>
      [...prevBooks].filter(({ id }) => id !== idToDelete)
    );
  };
  const editBook = async (id, title) => {
    const response = await axios.put("http://localhost:3001/books/" + id, {
      title,
    });
    setBooks((prevBooks) =>
      [...prevBooks].map((book) =>
        book.id === id ? { ...book, ...response.data } : book
      )
    );
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
    </div>
  );
}

export default App;
