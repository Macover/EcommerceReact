import React, { useContext } from 'react'
import './CSS/Product.css';
import { AddToCartIcon } from "./Icons";
import { CartContext } from '../Context/cartContext';


const Product = ({ product }) => {

    const { addToCart } = useContext(CartContext);

    return (
        <div id={product.id} className="product__card" key={product.id}>
            <img className="product__images" src={product.images[0]} />
            <div className='product__details'>
                <span className="product__title">{product.title}</span>
                <div className='product__sub-details'>
                    <p className="product__price">${product.price}</p>
                    <p className="product__category"> · {product.category}</p>
                    <button onClick={() => addToCart(product)} className='product__button'>
                        <AddToCartIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product