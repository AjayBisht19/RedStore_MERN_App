import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function PaymentMethodScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    props.history.push('/shipping');
  }
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push('/placeorder');
  };
  return (
    <div>
        <br/>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div><br/>
          <h1>Payment Method</h1>
        </div>
      <form style={{textAlign:"center"}} onSubmit={submitHandler}>
        
        <div>
          <div >
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            PayPal
          </div><br/>
        </div>
     
          <div>
            <input
              type="radio"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="stripe">Stripe</label>
          </div><br/>
     
        <div>
          <label />
          <button className="button-positive" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}