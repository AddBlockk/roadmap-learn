import React from "react";
import styled from "styled-components";
import BookForm from "./BookForm";
import BookList from "./BookList";
import Filter from "./Filter";

const BookLibraryBody = styled.div``;

function BookLibrary() {
  return (
    <BookLibraryBody>
      <BookForm />
      <BookList />
      <Filter />
    </BookLibraryBody>
  );
}
export default BookLibrary;
