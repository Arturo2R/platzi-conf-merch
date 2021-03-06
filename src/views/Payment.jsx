import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';
import '../styles/components/Payment.css';
import AppContext from '../context/AppContext';
import useSumTotal from '../hooks/useSumTotal';

const Payment = ({history}) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId: 'ATld5J7K5ZafXZc3MFpfyv6zeUwkqlWu1A5jjmCxp2LCQ7oLnAHUAMn8U9pxZ3clvqXBRcV2Dxh9GD-n',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSucces = (data)=> {
    console.log(data)
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      }
      addNewOrder(newOrder)
      history.push('/checkout/success')
    }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
          </div>
        ))}

        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={useSumTotal(cart)}
            onPaymentStart={() => console.log('start Payment')}
            onPaymentSuccess={(data) => handlePaymentSucces(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div className="">e</div>
    </div>
  );
};

export default Payment;
