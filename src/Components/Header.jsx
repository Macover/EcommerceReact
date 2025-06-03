import React from "react";
import './CSS/Header.css'
import Cart from "./Cart";

export default function Header() {


    return (
        <header className="app__header">
            <h3 className="header__tile">Isaí</h3>        
            <input className="header__search"  placeholder="🔍   Search" type="text" />
            <Cart />
        </header>
    )


}