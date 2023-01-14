import React, { useState } from "react";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks((prevState) => {
      return [
        ...prevState,
        {
          id: Math.floor((1 + Math.random()) * 2),
          title,
        },
      ];
    });
    setTitle("");
  };

  return (
    <>
      <form>
        <input type="text" value={title} onChange={handleChange} />
      </form>
      <button onClick={handleSubmit}>Submit</button>
      <div>
        <BookList books={books} />
      </div>
    </>
  );
}

export default App;
