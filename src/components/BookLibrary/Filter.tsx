import React from "react";
import styled from "styled-components";

const FilterBody = styled.div`
  .filter-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .filter-group {
    flex: 1;
    text-align: center;
  }
  .filter input[type="text"] {
    width: 80%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  .filter button {
    background-color: #007bff;
    color: #fff;
    padding: 8px 12px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin: 10px;
    transition: background-color 0.3s ease;
  }
  .filter button:hover {
    background-color: #0056b3;
  }
  @media screen and (max-wifth: 1024px) {
    .filter-row {
      flex-direction: column;
      align-items: stretch;
    }
    .filter-group {
      width: 100%;
      margin: auto;
      margin-bottom: 10px;
    }
    .filter button {
      margin: 10px auto 0;
      max-width: 50%;
    }
  }
`;

function Filter() {
  return <FilterBody>b</FilterBody>;
}
export default Filter;
