import React, { useContext} from 'react';
import AppContext from '../context/AppContext'
import '../styles/components/Success.css';

const Success = () => {
  const {state} = useContext(AppContext)
  const {buyer} = state
  

  return (
    <div className="Success">
      <div className="Succes-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">
            <h1>Aqui va un mapa de Google</h1>
        </div>
      </div>
    </div>
  );
};

export default Success;
