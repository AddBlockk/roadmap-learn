import React, { useState, FormEvent } from "react";
import styled from "styled-components";

const BookFormBody = styled.div`
  .book-form {
    width: 100%;
  }
  .book-form label {
    display: block;
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }
  .book-form input {
    width: 80%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  .book-form button {
    background-color: #007bff;
    color: #fff;
    padding: 8px 12px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin: 10px;
    transition: background-color 0.3s ease;
  }
  .book-form button:hover {
    background-color: #0056b3;
  }
  .book-form .spinner {
    animation: spinner 1s infinite linear;
    margin-left: 10px;
  }

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (title && author) {
      // dispatch

      setTitle("");
      setAuthor("");
    }
  };

  return (
    <BookFormBody>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </BookFormBody>
  );
}
export default BookForm;
