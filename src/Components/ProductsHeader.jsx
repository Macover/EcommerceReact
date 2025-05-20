import React, { useId } from "react";


export function ProductsHeader({ categoryInput, priceInput, listOfProductsLength, handleCategoryInput, handlePriceInput }) {

    const priceId = useId();

    return (
        <>
            <h2 className="products__title">List of products</h2>
            <h3 className="products__title">number of products: {listOfProductsLength} </h3>
            <header>
                <select value={categoryInput} onChange={(e) => handleCategoryInput(e)}>
                    <option value="All">All</option>
                    <option value="beauty">beauty</option>
                    <option value="groceries">groceries</option>
                    <option value="furniture">furniture</option>
                    <option value="fragrances">fragrances</option>
                </select>

                <input id={priceId} min={0} max={100} value={priceInput}
                    onChange={(e) => handlePriceInput(e)} type="range" />
                <label htmlFor={priceId}>Max price: ${priceInput}</label>
            </header>
        </>
    )
} 