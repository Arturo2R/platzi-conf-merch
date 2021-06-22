import React from 'react';
import '../styles/components/Success.css';

const Success = () => {
  return (
    <div className="Success">
      <div className="Succes-content">
        <h2>Gracias Por Tu Compra</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">Google Maps</div>
      </div>
    </div>
  );
};

export default Success;
