import React, { useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { listProducts } from '../actions/productActions';
import Product from '../components/Product.js'

export default function Homescreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state)=>state.productList)
    const{ loading,error, products } = productList
    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch])

   
    return (
    <>
    { loading ? (<LoadingBox></LoadingBox>)
    : error ? (<MessageBox variant="danger">{error}</MessageBox>)
    :
    (<div>
    <br/><br/><br/>
    <div className="heading"><h1>Products</h1></div>
    <br/><br/>
    <div className=" flex-card">
    {products.map((product)=>(
        <Product key={product._id} product={product}></Product>
    ))}
     </div></div>
    )}
    
     </>
    )
}
