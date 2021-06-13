import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
    const {product} = props;
    return (
        
            <div className="card-grid">
            <div className="image">
            <Link to={`/product/${product._id}`}>
                <img src={product.image} alt={product.name}/>
            </Link>
            </div>
            <div className="content">
                <div className="type">
                    <h2>{product.name}</h2>
                </div>
                <div className="heading">
                    <h3>Rs. {product.price}</h3>
                </div>
                <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                
            </div>
            <div className="card-btn">
                <Link to={`/product/${product._id}`} className="primary">view</Link>
                <Link to="#" className="secondary">add as a favorite</Link>
            </div>
        </div>
        
    )
}
