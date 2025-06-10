import React, { useContext } from 'react'
import './CSS/Product.css';
import { AddToCartIcon } from "./Icons";
import { CartContext } from '../Context/cartContext';


const Product = ({ product }) => {

    const { cart, setCart } = useContext(CartContext);

    const handleOnClickAddToCart = () => {

        const newCart = [];

        const itemExists = cart.find(item => item.id === `cart${product.id}`);

        if (itemExists) {

            const updatedCart = cart.map((item) => {
                if (item.id === `cart${product.id}`) {
                    const newQuantity = item.quantity + 1;
                    return { ...item, quantity: newQuantity }
                }
                return item;
            });

            setCart(updatedCart);

        } else {
            newCart.push({
                id: `cart${product.id}`,
                productName: product.title,
                price: product.price,
                image: product.images[0],
                quantity: 1,
            });
            setCart(cart.concat(newCart));
        }


    }

    return (
        <div id={product.id} className="product__card" key={product.id}>
            <img className="product__images" src={product.images[0]} />
            <div className='product__details'>
                <span className="product__title">{product.title}</span>
                <div className='product__sub-details'>
                    <p className="product__price">${product.price}</p>
                    <p className="product__category"> · {product.category}</p>
                    <button onClick={handleOnClickAddToCart} className='product__button'>
                        <AddToCartIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product