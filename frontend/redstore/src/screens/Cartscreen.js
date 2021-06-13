import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { Link } from 'react-router-dom'
import MessageBox from '../components/MessageBox';

export default function Cartscreen(props) {
    const productId = props.match.params.id;
    const dispatch= useDispatch();

    const qty = props.location.search 
    ? Number(props.location.search.split('=')[1])
    : 1
    const cart=useSelector(state => state.cart);
    const { cartItems } =cart;
    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId,qty))
        }
    },[dispatch,productId,qty])
    const removefromCartHandler = (id) =>{
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () =>{
        props.history.push('/signin?redirect=shipping')
    }

    return (
        <div >
            <h1>Shopping Cart</h1><br/>
            {cartItems.length === 0 ? <MessageBox>Cart is empty <Link to='/'> Go Shopping</Link></MessageBox>
            :
            (
            <ul >
                {
                    cartItems.map((item)=>(
                        <li key={item.product} >
                            <table className="carttable">
                                
                                <tr>
                                    <td className="cartimage">
                                        <img src={item.image} alt={item.name}/>
                                    </td>
                                    <td >
                                        <Link to={`/product/${item.product}`} className="cartitemname"> {item.name} </Link>
                                    </td>
                                    <td>
                                        <select value={item.qty} onChange={(e)=>dispatch(
                                            addToCart(item.product,
                                            Number(e.target.value))
                                        )}>
                                            {[...Array(item.countInStock).keys()].map(
                                                (x) => (
                                                <option key={x} value={x+1}>{x+1}</option>
                                                )
                                            )}
                                        </select>
                                    </td>
                                    <td>
                                        <button type="button" onClick={()=> removefromCartHandler(item.product)}>Delete</button>
                                    </td>
                                </tr>
                            </table>  
                                         
                        </li>
                    ))
                }
            </ul>)}
            <div>
                <h2>
                &nbsp;Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : Rs.&nbsp;
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2><br/>&nbsp;
              <button type="button" className="button-positive" onClick={checkoutHandler} disabled={cartItems.length === 0}> click to proceed</button>
        </div></div> 
        
    )
}
