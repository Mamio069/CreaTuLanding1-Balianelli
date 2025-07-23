import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function CartWidget() {
  const [cart, setCart] = useState([
    
    { id: 1, nombre: 'Remera', cantidad: 1, precio: 5000 },
  ]);

  // Aumentar cantidad
  const aumentar = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  // Disminuir cantidad
  const disminuir = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.cantidad > 1
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  // Vaciar carrito
  const vaciarCarrito = () => {
    setCart([]);
  };

  //  Calcular total
  const total = cart.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  return (
    <div className="container mt-4">
      <h2 style={{color:"white"}}>🛒 Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <div>
            {cart.map((item) => (
              <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div style={{color:"white"}}>
                  {item.nombre} (x{item.cantidad}) - ${item.precio * item.cantidad}
                </div>
                <div>
                  <Button variant="outline-primary" size="sm" onClick={() => aumentar(item.id)}>
                    +
                  </Button>{' '}
                  <Button variant="outline-secondary" size="sm" onClick={() => disminuir(item.id)}>
                    -
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <h4 className="mt-3" style={{color:"white"}}>Total: ${total}</h4>
          <Button variant="danger" onClick={vaciarCarrito}>
            Vaciar Carrito
          </Button>
        </>
      )}
    </div>
  );
}

