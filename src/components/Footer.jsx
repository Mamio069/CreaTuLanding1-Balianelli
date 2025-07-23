import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <h5 className="mb-2">VENICE IND.</h5>
            <p className="small">© {new Date().getFullYear()} Venice Industries. Todos los derechos reservados.</p>
          </div>
          
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <a href="/" className="text-light mx-2 text-decoration-none">Inicio</a>
            <a href="/remeras" className="text-light mx-2 text-decoration-none">Remeras</a>
            <a href="/pantalones" className="text-light mx-2 text-decoration-none">Pantalones</a>
            <a href="/camperas" className="text-light mx-2 text-decoration-none">Camperas</a>
            <a href="/zapatillas" className="text-light mx-2 text-decoration-none">Zapatillas</a>
          </div>
          
          <div className="col-md-4 text-center text-md-end">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
              <i className="bi bi-facebook fs-4"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
              <i className="bi bi-instagram fs-4"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
              <i className="bi bi-twitter fs-4"></i>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

