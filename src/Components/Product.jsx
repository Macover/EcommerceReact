import React from 'react'
import './CSS/Product.css';
import { AddToCartIcon } from "./Icons";

const Product = ({ product }) => {
    return (
        <div className="product__card" key={product.id}>
            <img className="product__images" src={product.images[0]} />
            <div className='product__details'>
                <span className="product__title">{product.title}</span>
                <div className='product__sub-details'>
                    <p className="product__price">${product.price}</p>
                    <p className="product__category"> · {product.category}</p>
                    <button className='product__button'>
                        <AddToCartIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product