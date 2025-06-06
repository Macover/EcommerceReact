import React, { useId, useState } from "react";
import './CSS/Cart.css';
import { CartIcon } from "./Icons";
import { RemoveFromCartIcon } from "./Icons";



export default function Cart() {

    const handleOnChangeCheckbox = (e) => {
        console.log(e.target.value)
    }

    const [cart, setCart] = useState({
        productName: 'Essebce Mascara Lash princess',
        price: 120,
        category: 'Beauty',
        image: '',
        quantity: 3,
    }, {
        productName: 'Essebce safdasf sadfsd',
        price: 120,
        category: 'Beauty',
        image: '',
        quantity: 3,
    }, {
        productName: 'Essebce Mascara asdasd',
        price: 3434,
        category: 'Beauty',
        image: '',
        quantity: 3,
    }
    );

    const cartId = useId();

    return (
        <>
            <label className="cart__icon" htmlFor={cartId}>
                <CartIcon />
            </label>
            <input onChange={e => handleOnChangeCheckbox(e)} className="cart__input" id={cartId} type="checkbox" />
            <aside className="cart__aside">
                <div className="cart__item">
                    <img src='https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp' className="item__img" />
                    <div className="item__details">
                        <span className="item__name">Item 1</span>
                        <span className="item__price">$1245</span>
                    </div>
                    <div className="item__actions-container">
                        <button className="item__decrease">-</button>
                        <span className="item__quantity">3</span>
                        <button className="item__increase">+</button>
                        <button className="item__delete">
                            <RemoveFromCartIcon />
                        </button>
                    </div>
                </div>
                <div className="cart__item">
                    <img src='https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp' className="item__img" />
                    <div className="item__details">
                        <span className="item__name">Item 1</span>
                        <span className="item__price">$1245</span>
                    </div>
                    <div className="item__actions-container">
                        <button className="item__decrease">-</button>
                        <span className="item__quantity">3</span>
                        <button className="item__increase">+</button>
                        <button className="item__delete">
                            <RemoveFromCartIcon />
                        </button>
                    </div>
                </div>
                <div className="cart__item">
                    <img src='https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp' className="item__img" />
                    <div className="item__details">
                        <span className="item__name">Item 1</span>
                        <span className="item__price">$1245</span>
                    </div>
                    <div className="item__actions-container">
                        <button className="item__decrease">-</button>
                        <span className="item__quantity">3</span>
                        <button className="item__increase">+</button>
                        <button className="item__delete">
                            <RemoveFromCartIcon />
                        </button>
                    </div>
                </div>
                <div className="cart__item">
                    <img src='https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp' className="item__img" />
                    <div className="item__details">
                        <span className="item__name">Item 1</span>
                        <span className="item__price">$1245</span>
                    </div>
                    <div className="item__actions-container">
                        <button className="item__decrease">-</button>
                        <span className="item__quantity">3</span>
                        <button className="item__increase">+</button>
                        <button className="item__delete">
                            <RemoveFromCartIcon />
                        </button>
                    </div>
                </div>
                <div className="cart__item">
                    <img src='https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp' className="item__img" />
                    <div className="item__details">
                        <span className="item__name">Item 1</span>
                        <span className="item__price">$1245</span>
                    </div>
                    <div className="item__actions-container">
                        <button className="item__decrease">-</button>
                        <span className="item__quantity">3</span>
                        <button className="item__increase">+</button>
                        <button className="item__delete">
                            <RemoveFromCartIcon />
                        </button>
                    </div>
                </div>
                <div className="cart__item">
                    <img src='https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp' className="item__img" />
                    <div className="item__details">
                        <span className="item__name">Item 1</span>
                        <span className="item__price">$1245</span>
                    </div>
                    <div className="item__actions-container">
                        <button className="item__decrease">-</button>
                        <span className="item__quantity">3</span>
                        <button className="item__increase">+</button>
                        <button className="item__delete">
                            <RemoveFromCartIcon />
                        </button>
                    </div>
                </div>
                <div className="cart__item">
                    <img src='https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp' className="item__img" />
                    <div className="item__details">
                        <span className="item__name">Item 1</span>
                        <span className="item__price">$1245</span>
                    </div>
                    <div className="item__actions-container">
                        <button className="item__decrease">-</button>
                        <span className="item__quantity">3</span>
                        <button className="item__increase">+</button>
                        <button className="item__delete">
                            <RemoveFromCartIcon />
                        </button>
                    </div>
                </div>
                <div className="cart__checkout-details">
                    <span className="checkout-details__sub-total">Subtotal</span>
                    <span className="checkout-details__items">Items: 3</span>
                    <span className="checkout-details__subtotal">Subtotal: $32,543</span>
                    <button className="checkout-details__checkout-button">Checkout</button>
                </div>
            </aside>
        </>
    )
}