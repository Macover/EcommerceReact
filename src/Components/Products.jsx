import React from "react"
import './CSS/Products.css';
import { ProductsHeader } from "./ProductsHeader";
import Product from "./Product";

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
                                    <Product
                                        product={product}
                                    />
                                )
                            })
                    }
                </div>
            </section>
        </>
    )
}
