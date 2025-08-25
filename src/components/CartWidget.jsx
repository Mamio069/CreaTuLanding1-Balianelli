import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function CartWidget() {
  const [cartCount, setCartCount] = useState(1);

  const increment = () => setCartCount(cartCount + 1);
  const decrement = () => {
    if (cartCount > 0) setCartCount(cartCount - 1);
  };

  return (
    <div className="container mt-4" style={{ position: 'relative', display: 'inline-block' }}>
      <h2 style={{ color: 'white', position: 'relative', display: 'inline-block' }}>
        🛒
        {cartCount > 0 && (
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ fontSize: '0.75rem' }}
          >
            {cartCount}
          </span>
        )}
      </h2>

      <div className="mt-3">
        <Button variant="success" onClick={increment} className="me-2">
          Agregar
        </Button>
        <Button variant="warning" onClick={decrement}>
          Quitar
        </Button>
      </div>
    </div>
  );
}

