import './index.css';

import {BrowserRouter, Link, Route} from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Productscreen from './screens/Productscreen';
import Cartscreen from './screens/Cartscreen';
import { useDispatch, useSelector } from 'react-redux';
import SigninScreen from './screens/SigninScreen';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen.js';
import ShippingAddressScreen from './screens/ShippingAdressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';

function App() {
  const cart = useSelector(state => state.cart)
  const {cartItems} =cart
  const userSignin= useSelector((state)=> state.userSignin)
  const {userInfo} = userSignin;
    const dispatch = useDispatch()
  const signoutHandler=()=>{
    dispatch(signout())
  }
  return (<BrowserRouter>
    <>
    <div className="navbar">
        <div className="container flex">
            <div className="logo">
                <h1>RedStore.</h1>
            </div>
            <nav>
                <ul className="tabs">
                    
                    <li><Link to="/cart"> Cart
                    {cartItems.length > 0 && (
                    <span className="cartbadge"> {cartItems.length}</span>
                    )}
                    </Link></li>
                    <li>{userInfo 
                    ?  <div className="dropdown">
                        <Link to="#"> {userInfo.name} <i className="fa fa-caret-down"></i></Link>
                        <ul className="dropdown-content">
                            <Link to="" onClick={signoutHandler}>Sign out</Link>
                        </ul>
                        </div>
                    : <Link to="/signin"> Signin</Link>
                }</li>
                </ul>
            </nav>
        </div>
    </div>
      <Route exact path='/' component={Homescreen}></Route>
      <Route path='/product/:id' component={Productscreen}></Route>
      <Route path='/cart/:id?' component={Cartscreen}></Route>
      <Route path='/signin' component={SigninScreen}></Route>
      <Route path='/register' component={RegisterScreen}></Route>
      <Route path='/shipping' component={ShippingAddressScreen}></Route>
      <Route path='/payment' component={PaymentMethodScreen}></Route>
    {/* <div className="exclusive">
        
        <div className="container grid-3">
            <div className="item">
                <img src="/images/exclusive.png" alt="hello there"/>
            </div>
            <div className="item">
                <h2>Exclusively Available on RedStore!</h2>
            </div>
            <div className="item">
                <h1>Smart Band 4</h1>
            </div>
        </div>
    </div> */}
    
    
      
    </></BrowserRouter>
  )
}

export default App;
