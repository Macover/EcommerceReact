import React, { useContext, useId } from "react";
import { FiltersContext } from "../Context/filtersContext";



export function ProductsHeader({ listOfProductsLength }) {

    const priceId = useId();

    const { filters, setFilter } = useContext(FiltersContext)

    const handleCategoryInput = (e) => {
        setFilter(filter => {
            return {
                'Category': e.target.value,
                'Price': filter.Price
            }
        })
    }
    const handlePriceInput = (e) => {
        setFilter(filter => {
            return {
                'Category': filter.Category,
                'Price': e.target.value
            }
        })
    };


    return (
        <>
            <h3 className="products__title">number of products: {listOfProductsLength} </h3>
            <header>
                <select onChange={(e) => handleCategoryInput(e)}>
                    <option value="All">All</option>
                    <option value="beauty">beauty</option>
                    <option value="groceries">groceries</option>
                    <option value="furniture">furniture</option>
                    <option value="fragrances">fragrances</option>
                </select>

                <input id={priceId} min={0} max={100} value={filters.Price}
                    onChange={(e) => handlePriceInput(e)} type="range" />
                <label htmlFor={priceId}>Max price: ${filters.Price}</label>
            </header>
        </>
    )
} 