import React, { useId, useState } from "react";


export function ProductsHeader({ setFilter, listOfProductsLength }) {

    const priceId = useId();

    const [maxPrice, setMaxPrice] = useState(0);


    const handleCategoryInput = (e) => {
        setFilter(filter => {
            return {
                'Category': e.target.value,
                'Price': filter.Price
            }
        })
    }
    const handlePriceInput = (e) => {
        setMaxPrice(e.target.value);
        setFilter(filter => {
            return {
                'Category': filter.Category,
                'Price': e.target.value
            }
        })
    };


    return (
        <>
            <h2 className="products__title">List of products</h2>
            <h3 className="products__title">number of products: {listOfProductsLength} </h3>
            <header>
                <select onChange={(e) => handleCategoryInput(e)}>
                    <option value="All">All</option>
                    <option value="beauty">beauty</option>
                    <option value="groceries">groceries</option>
                    <option value="furniture">furniture</option>
                    <option value="fragrances">fragrances</option>
                </select>

                <input id={priceId} min={0} max={100} value={maxPrice}
                    onChange={(e) => handlePriceInput(e)} type="range" />
                <label htmlFor={priceId}>Max price: ${maxPrice}</label>
            </header>
        </>
    )
} 