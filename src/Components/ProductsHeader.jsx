import React, { useContext, useId } from "react";
import { FiltersContext } from "../Context/filtersContext";
import './CSS/ProductsHeader.css';


export function ProductsHeader({ listOfProductsLength }) {

    const priceId = useId();
    const categoryId = useId();

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
            <header className="products__header">
                <h1 className="products__title">Products: {listOfProductsLength}</h1>
                <div className="products__filters-container">
                    <div className="header__category-container">
                        {/* <label htmlFor={categoryId}>Filter by category:</label> */}
                        <select className="category__input" id={categoryId} onChange={(e) => handleCategoryInput(e)}>
                            <option value="All">All</option>
                            <option value="beauty">beauty</option>
                            <option value="groceries">groceries</option>
                            <option value="furniture">furniture</option>
                            <option value="fragrances">fragrances</option>
                        </select>

                    </div>
                    <div className="header__price-container">
                        <input className="header__price-max-input" id={priceId} min={0} max={100} value={filters.Price}
                            onChange={(e) => handlePriceInput(e)} type="range" />
                        <label htmlFor={priceId}>Max Price: ${filters.Price}</label>
                    </div>
                </div>
            </header>
        </>
    )
} 