import React from "react"
import './CSS/Products.css';

export function Products({ listOfProducts }) {


    return (
        <>
            <section>
                <h2 className="products__title">List of products</h2>
                <div className="products__container">
                    {
                        listOfProducts.map(product => {
                            return (
                                <div className="product__card" key={product.id}>
                                    <span className="product__title">{product.title}</span>
                                    <p className="product__descriptiop">{product.descriptiop}</p>
                                    <p className="product__brand">{product.brand}</p>
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
