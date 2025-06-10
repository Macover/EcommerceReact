import React, { useContext, useEffect, useId, useState } from "react";
import './CSS/Cart.css';
import { CartIcon } from "./Icons";
import { RemoveFromCartIcon } from "./Icons";
import { CartContext } from "../Context/cartContext";



export default function Cart() {

    const { cart, setCart } = useContext(CartContext);
    const [subTotal, setSubTotal] = useState(0);
    const cartId = useId();

    useEffect(() => {

        if (cart.length !== 0) {
            const initialValue = 0;

            const subTotal = cart.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity), initialValue);
            setSubTotal(subTotal.toFixed(2));
        }

    }, [cart])

    const handleOnClickDecrease = itemId => {

        const updatedCart = cart.map(item => {
            if (item.id === itemId) {
                const newQuantity = item.quantity - 1;
                if (newQuantity === 0) {
                    return item;
                }
                return { ...item, quantity: newQuantity }
            }
            return item
        });
        setCart(updatedCart);
    }

    const handleOnClickIncrease = itemId => {

        const updatedCart = cart.map(item => {
            if (item.id === itemId) {
                const newQuantity = item.quantity + 1;
                return { ...item, quantity: newQuantity }
            }
            return item
        });
        setCart(updatedCart);
    }

    const handleRemoveItemFromCart = itemId => {

        const index = cart.findIndex(item => item.id === itemId);
        const updatedCart = cart.toSpliced(index, 1);
        setCart(updatedCart);

    }

    return (
        <>
            <label className="cart__icon" htmlFor={cartId}>
                {
                    cart.length !== 0
                        ? <span className="cart__notification-cart">{cart.length}</span>
                        : ''
                }
                <CartIcon />
            </label>
            <input className="cart__input" id={cartId} type="checkbox" />
            <aside className="cart__aside">


                {
                    cart.length !== 0
                        ?
                        cart.map(item => {
                            return (
                                <div className="cart__item" key={item.id}>
                                    <img src={item.image} className="item__img" />
                                    <div className="item__details">
                                        <span className="item__name">{item.productName}</span>
                                        <span className="item__price">${item.price}</span>
                                    </div>
                                    <div className="item__actions-container">
                                        <button onClick={() => handleOnClickDecrease(item.id)} className="item__decrease">-</button>
                                        <span className="item__quantity">{item.quantity}</span>
                                        <button onClick={() => handleOnClickIncrease(item.id)} className="item__increase">+</button>
                                        <button onClick={() => handleRemoveItemFromCart(item.id)} className="item__delete">
                                            <RemoveFromCartIcon />
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <div className="cart__empty">
                            <span>There are no items in the cart, please add some!</span>
                        </div>
                }


                <div className="cart__checkout-details">
                    <span className="checkout-details__sub-total">Subtotal</span>
                    <span className="checkout-details__items">Items: {cart.length}</span>
                    <span className="checkout-details__subtotal">Subtotal: ${subTotal}</span>
                    <button className="checkout-details__checkout-button">Checkout</button>
                </div>


            </aside>
        </>
    )
}