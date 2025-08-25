import React from 'react';
import productos from "../utils/Productos";
import { FaTshirt } from 'react-icons/fa';
import ItemCount from './ItemCount'; 

export default function Camperas() {
  const camperas = productos.filter((item) =>
    item.nombre.toLowerCase().includes('campera')
  );

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <FaTshirt size={50} color="#343a40" />
        <h2 className="mt-3 fw-bold">Camperas</h2>
        <p className="text-muted">Explorá nuestra colección de camperas urbanas con estilo.</p>
      </div>

      <div className="row">
        {camperas.map((producto) => (
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

                <ItemCount
                  stock={10} // Stock máximo
                  initial={1} // Cantidad inicial
                  onAdd={(cantidad) =>
                    console.log(`Agregaste ${cantidad} ${producto.nombre} al carrito`)
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
