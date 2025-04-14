import React from "react";


export function ProductsHeader({ listOfProductsLength, handleCategoryInput, handlePriceInput }) {
    return (
        <>
            <h2 className="products__title">List of products</h2>
            <h3 className="products__title">number of products: {listOfProductsLength} </h3>
            <header>
                <input onChange={(e) => handleCategoryInput(e)} type="text" placeholder="Search by category" />
                <input onChange={(e) => handlePriceInput(e)} type="text" placeholder="Search by price" />
            </header>
        </>
    )
} 