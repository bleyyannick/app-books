import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();
const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", { title });
    const newBooks = [...books, response.data];
    setBooks(newBooks);
  };
  const getBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }, []);

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
  return (
    <BooksContext.Provider
      value={{
        books,
        getBooks,
        deleteBook,
        editBook,
        createBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
export { Provider };
export default BooksContext;
