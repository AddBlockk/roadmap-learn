import React, { useState, useEffect } from "react";

export default function ButtonChangeTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Название заголовка: ${count}`;
  }, [count]);

  return (
    <div className="change__title">
      <button
        onClick={() => setCount((count) => count + 1)}
        className="counter">
        Изменить Заголовок
      </button>
    </div>
  );
}
