import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!userInfo) {
    props.history.push('/signin');
  }
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );
    props.history.push('/payment');
  };
  return (
    <div>
        <br/>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="showcase">
        <div className="container">
           
            <div className="showcase-form card" id="create">
                <h2>Shipping Address</h2>
                <form onSubmit={submitHandler}>
                    <div className="form-control">
                        <input type="text" placeholder="Enter full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)} required/>
                    </div>
             
                    <div className="form-control">
                        <input type="text" placeholder="Enter address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} required/>
                    </div>

                    <div className="form-control">
                        <input type="text" placeholder="Enter city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)} required/>
                    </div>

                    <div className="form-control">
                        <input type="text" placeholder="Enter pincode code"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)} required/>
                    </div>

                    <div className="form-control">
                        <input type="text" placeholder="Enter country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)} required/>
                    </div>
                    
                    <button className="button-positive" type="submit">
            Continue
          </button>
                </form>
            </div>
        </div>
    </div>
      {/* <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Shipping Address</h1>
        </div>
        
        
    
        
        <div>
          <label />
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form> */}
    </div>
  );
}