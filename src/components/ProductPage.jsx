import { useState, useEffect } from "react";
import styled from "styled-components";

const ProductContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 20px;
  button {
    color: black;
  }
`;

export default function ProductPage() {
  const [type, setType] = useState("users");

  useEffect(() => {
    console.log("render");
  });

  return (
    <ProductContainer>
      <h1>Ресурс: {type}</h1>
      <button onClick={() => setType("users")}>Пользователи</button>
      <button onClick={() => setType("todo")}>Todo</button>
      <button onClick={() => setType("posts")}>Посты</button>
    </ProductContainer>
  );
}
