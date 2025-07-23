import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function CartWidget() {
 

 
  return (
    <div className="container mt-4" style={{ position: 'relative', display: 'inline-block' }}>
      <h2 style={{ color: 'white', position: 'relative', display: 'inline-block' }}>
        🛒
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          style={{ fontSize: '0.75rem' }}
        >
          1
         
        </span>
      </h2>
    </div>
  );
}


