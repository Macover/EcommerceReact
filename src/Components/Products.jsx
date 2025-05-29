import React from "react"
import './CSS/Products.css';
import { ProductsHeader } from "./ProductsHeader";

export function Products({ listOfProducts }) {

    return (
        <>
            <section>
                <ProductsHeader
                    listOfProductsLength={listOfProducts.length}
                />
                <div className="products__container">
                    {
                        listOfProducts.length === 0
                            ? <div>There aren't any items</div>
                            : listOfProducts.map(product => {
                                return (
                                    <div className="product__card" key={product.id}>
                                        <img className="product__images" src={product.images[0]} />
                                        <span className="product__title">{product.title}</span>
                                        <p className="product__price">${product.price}</p>
                                        <p className="product__category">{product.category}</p>
                                        <button>Add to cart</button>
                                    </div>
                                )
                            })
                    }
                </div>
            </section>
        </>
    )
}
