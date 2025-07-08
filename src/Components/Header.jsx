import React, { useContext } from "react";
import { FiltersContext } from "../Context/filtersContext";
import './CSS/Header.css'
import Cart from "./Cart";
import useFilters from "../Logic/useFilters";

export default function Header() {


    const { searchBox, setSearchBox } = useFilters();


    const handleSearchBox = (e) => {
        setSearchBox(e.target.value);
    }

    return (
        <header className="app__header">
            <h3 className="header__tile">Ecommerce</h3>
            <input className="header__search" value={searchBox} onChange={handleSearchBox} placeholder="🔍   Search" type="text" />
            <Cart />
        </header>
    )


}