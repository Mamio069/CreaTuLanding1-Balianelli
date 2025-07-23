import React from 'react';
import productos from "../utils/Productos"
import { FaShoePrints } from 'react-icons/fa';


export default function Zapatillas() {
  const zapatillas = productos.filter((item) =>
    item.nombre.toLowerCase().includes('zapatilla')
  );

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <FaShoePrints size={50} color="#343a40" />
        <h2 className="mt-3 fw-bold">Zapatillas</h2>
        <p className="text-muted">Comodidad y diseño en cada paso.</p>
      </div>

      <div className="row">
        {zapatillas.map((producto) => (
          <div className="col-md-3 mb-4" key={producto.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={producto.imagen}
                className="card-img-top"
                alt={producto.nombre}
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text fw-semibold">${producto.precio.toLocaleString()}</p>
                <button className="btn btn-dark w-100 mt-auto">Agregar al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
