import React from "react"
import './CSS/Products.css';
import { ProductsHeader } from "./ProductsHeader";

export function Products({ categoryInput, priceInput, listOfProducts, handleCategoryInput, handlePriceInput }) {


    return (
        <>
            <section>
                <ProductsHeader
                    categoryInput={categoryInput}
                    priceInput={priceInput}
                    listOfProductsLength={listOfProducts.length}
                    handleCategoryInput={handleCategoryInput}
                    handlePriceInput={handlePriceInput}
                />
                <div className="products__container">
                    {
                        listOfProducts.length === 0
                            ? <div>There aren't any items</div>
                            : listOfProducts.map(product => {
                                return (
                                    <div className="product__card" key={product.id}>
                                        <span className="product__title">{product.title}</span>
                                        <p className="product__descriptiop">{product.descriptiop}</p>
                                        <p className="product__brand">{product.brand}</p>
                                        <p className="product__category">Category: {product.category}</p>
                                        <p className="product__price">${product.price}</p>
                                        <img className="product__images" src={product.images[0]} />

                                    </div>
                                )
                            })
                    }
                </div>
            </section>
        </>
    )
}
