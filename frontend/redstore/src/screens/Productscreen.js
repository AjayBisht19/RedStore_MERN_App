import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch } from "react-redux"
import { detailsProduct } from '../actions/productActions.js';
import { Link } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';


export default function Productscreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector(state => state.productDetails);
    const { loading,product,error } = productDetails;
    const [qty,setQty]=useState(1);
    useEffect(()=>{
        dispatch(detailsProduct(productId))
    },[dispatch,productId])
    return (<>
            { loading ? (<LoadingBox></LoadingBox>)
    : error ? (<MessageBox variant="danger">{error}</MessageBox>)
    :
    (<div>
        <br/>&nbsp; &nbsp;
        <Link to="/" className="btn">  Back to product</Link><br/><br/>
        <div className="product-grid-3">
            <div className="">
                <img src={product.image} alt={product.name}></img>
            </div>
            <div className="">
                <ul>
                    <li>{product.name}</li><br/>
                    <li><Rating rating={product.rating} numReviews={product.numReviews}></Rating></li>
                    <br/><li>Price: Rs. {product.price}</li>
                    <br/><li>Description: {product.description}</li>
                </ul>


            </div>
            <div className=""><ul>
                <li>Price: Rs. {product.price}</li><br/>
                <li>
                    status:{product.countInStock>0 
                    ? <span className="instock"> In stock</span> 
                    : <span className="outofstock"> Out of Stock</span>}
                </li>
                <br/>
               {product.countInStock>0 
                    ? (<>
                        <li>
                            <div >Qty :&nbsp; 
                                <select value={qty} onChange={(e)=>setQty(e.target.value)}>
                                    {[...Array(product.countInStock).keys()].map(
                                        (x) => (
                                        <option key={x} value={x+1}>{x+1}</option>
                                        )
                                    )}
                                </select>
                            </div>
                        </li>
                        <br/>


                         <li>
                        <Link to={`/cart/${productId}?qty=${qty}`} class="btn">Add to cart</Link>
                        </li>
                        </>)
                    : ''}
                </ul>
                

            </div>
        </div>

    </div>
    )}
    

        
    </>
    )
}
