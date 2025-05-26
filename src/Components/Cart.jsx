import React, { useId } from "react";
import './CSS/Cart.css';
import { CartIcon } from "./Icons";


export default function Cart() {

    const handleOnChangeCheckbox = (e) => {
        console.log(e.target.value)
    }

    const cartId = useId();

    return (
        <>
            <label className="cart__icon" htmlFor={cartId}>
                <CartIcon />
            </label>
            <input onChange={e => handleOnChangeCheckbox(e)} className="cart__input" id={cartId} type="checkbox" />
            <aside className="cart__aside">
                <div className="cart__item">
                    Itemz
                </div>
            </aside>
        </>
    )
}