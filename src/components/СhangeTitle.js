import React, { useState, useEffect } from "react";

export default function ChangeTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Название заголовка: ${count}`;
  }, [count]);

  return (
    <div className="change__title">
      <button onClick={() => setCount((count) => count + 1)}>
        Изменить Заголовок
      </button>
      <p className="comment">
        \\ При нажатии на кнопку будет изменяться заголовок сайта, так что не
        мудри
      </p>
    </div>
  );
}
