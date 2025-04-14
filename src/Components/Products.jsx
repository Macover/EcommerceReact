import React from "react"
import './CSS/Products.css';

export function Products({ listOfProducts, handleCategoryInput, handlePriceInput }) {


    return (
        <>
            <section>
                <h2 className="products__title">List of products</h2>
                <h3 className="products__title">number of products: {listOfProducts.length} </h3>
                <header>
                    <input onChange={(e) => handleCategoryInput(e)} type="text" placeholder="Search by category" />
                    <input onChange={(e) => handlePriceInput(e)} type="text" placeholder="Search by price" />
                </header>
                <div className="products__container">
                    {
                        listOfProducts.map(product => {
                            return (
                                <div className="product__card" key={product.id}>
                                    <span className="product__title">{product.title}</span>
                                    <p className="product__descriptiop">{product.descriptiop}</p>
                                    <p className="product__brand">{product.brand}</p>
                                    <p className="product__category">Cat: {product.category}</p>
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
