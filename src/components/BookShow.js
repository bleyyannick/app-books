import React, { useState } from "react";
import BookEdit from "./BookEdit";
function BookShow({ title, id, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };
  let content = <h3>{title}</h3>;
  if (showEdit) {
    content = <BookEdit id={id} editTitle={title} onSubmit={handleSubmit} />;
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
