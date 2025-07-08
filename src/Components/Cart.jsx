import React, { useContext, useId } from "react";
import './CSS/Cart.css';
import { CartIcon } from "./Icons";
import { RemoveFromCartIcon, ClearCartIcon } from "./Icons";
import { CartContext } from "../Context/cartContext";

export default function Cart() {

    const { state, subTotal, increaseQuantity, decreaseQuantity, removeItem, cleanCart } = useContext(CartContext);

    const cart = state.elements;

    const cartId = useId();

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


                {cart.length !== 0 ? <button className="checkout-details__clean-button" onClick={cleanCart}><ClearCartIcon /></button> : ''}

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
                                            <button onClick={() => decreaseQuantity(item)} className="item__decrease">-</button>
                                            <span className="item__quantity">{item.quantity}</span>
                                            <button onClick={() => increaseQuantity(item)} className="item__increase">+</button>
                                            <button onClick={() => removeItem(item)} className="item__delete">
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