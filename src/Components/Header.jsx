import React from "react";
import './CSS/Header.css'
import Cart from "./Cart";

export default function Header() {


    return (
        <header className="app__header">
            <h1 className="header__tile">Tiendita</h1>        
            <Cart />
        </header>
    )


}