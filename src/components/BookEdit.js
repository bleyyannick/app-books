import React, { useState, useContext } from "react";
import BooksContext from "../context/books";
function BookEdit({ id, oldTitle, onSubmit }) {
  const [title, setTitle] = useState(oldTitle);
  const { editBook } = useContext(BooksContext);
  const handleChange = (e) => setTitle(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    editBook(id, title);
  };
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
