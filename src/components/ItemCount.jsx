import React, { useState } from "react";

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const aumentar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const disminuir = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex align-items-center mb-2">
        <button className="btn btn-outline-dark" onClick={disminuir}>-</button>
        <span className="mx-3 fs-5">{count}</span>
        <button className="btn btn-outline-dark" onClick={aumentar}>+</button>
      </div>
      <button
        className="btn btn-dark w-100"
        onClick={() => onAdd(count)}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
