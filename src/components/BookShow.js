import React, { useState, useContext } from "react";
import BooksContext from "../context/books";
import BookEdit from "./BookEdit";
function BookShow({ title, id }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBook } = useContext(BooksContext);
  const handleDeleteClick = () => {
    deleteBook(id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = () => {
    setShowEdit(false);
  };
  let content = <h3>{title}</h3>;
  if (showEdit) {
    content = <BookEdit id={id} oldTitle={title} onSubmit={handleSubmit} />;
  }
  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Modifier
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default BookShow;
