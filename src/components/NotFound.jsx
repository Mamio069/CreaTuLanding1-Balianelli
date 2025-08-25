import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <h1 className="display-3 fw-bold text-danger">404</h1>
      <h2 className="mb-3">Página no encontrada</h2>
      <p className="text-muted mb-4">
        Opa! La ruta NO existe!!.
      </p>
      <Link to="/" className="btn btn-dark btn-lg rounded-pill px-4">
        Volver al inicio
      </Link>
    </div>
  );
}
