/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';

const Information = () => {
  // @ts-ignore
  const { state, addToBuyer } = useContext(AppContext);
  const history = useHistory();
  const { cart } = state;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    addToBuyer(data);
    history.push('/checkout/payment');
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Informatiion-heade">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="NombreCompleto"
              {...register('name')}
            />
            <input
              type="email"
              placeholder="Correo Electrónico"
              {...register('email')}
            />
            <input
              type="text"
              placeholder="Dirección"
              {...register('address')}
            />
            <input type="text" placeholder="Apto" {...register('apto')} />
            <input type="text" placeholder="País" {...register('country')} />
            <input type="text" placeholder="Estado" {...register('state')} />
            <input
              type="number"
              placeholder="Código Postal"
              {...register('cp')}
            />
            <input type="tel" placeholder="Telefono" {...register('phone')} />
            <input type="submit" value="enviar" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">Regresar</div>
          <div className="Information-next">
            <button type="button">Pagar</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
