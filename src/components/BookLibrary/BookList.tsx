import React from "react";
import styled from "styled-components";

const BookListBody = styled.div`
  .book-list ul {
    padding: 0;
    margin: 20px -20px;
    list-style: none;
  }
  .book-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    padding: 10px 20px;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
    list-style-type: none;
  }
  .book-list li:nth-child(even) {
    background-color: #f2f2f2;
  }
  .book-list li:hover {
    background-color: #dbe4f8;
  }
  .book-list button {
    background-color: #fff;
    color: red;
    border: 1px solid red;
    padding: 8px 12px;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .book-list button:hover {
    background-color: #fdd;
  }
  .book-list .highlight {
    background-color: #ff0;
  }
  .book-list .book-info {
    flex: 1;
    text-align: left;
  }
  .book-list .book-actions {
    display: flex;
    align-items: center;
  }
  .book-list .star-icon {
    width: 24px;
    height: 24px;
    margin: 0 20px;
    cursor: pointer;
    transition: color 0.3s ease;
    color: #fca510;
  }
`;

function BookList() {
  return <BookListBody>f</BookListBody>;
}
export default BookList;
