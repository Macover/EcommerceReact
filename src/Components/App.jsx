import React, { useEffect, useState } from 'react'
import { Products } from './Products';
import './CSS/App.css'

const PRODUCTS_URL = 'https://dummyjson.com/products';

function App() {

    const [listOfProducts, setListOfProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [filters, setFilter] = useState({
        'Category': 'All',
        'Price': 50
    });

    useEffect(() => {
        fetch(PRODUCTS_URL)
            .then(res => res.json())
            .then(response => {
                setListOfProducts(response.products);
                setLoading(false);                
            });
    }, []);

    console.log('loading', loading)


    useEffect(() => {

        const filteredProductsA = filterProducts(listOfProducts)
        setFilteredProducts(filterProducts(listOfProducts))
        console.log('listOfProducts', listOfProducts)
        console.log('filteredProductsA', filteredProductsA)        

    }, [filters, loading]);


    function filterProducts(products) {

        return products.filter(product => {
            return product.price <= filters.Price
                && (
                    filters.Category === 'All' ||
                    product.category === filters.Category
                )
        })

    }


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
        <main>
            <header>
                <h1>React Ecommerce App</h1>
            </header>

            <Products
                priceInput={filters.Price}
                handleCategoryInput={handleCategoryInput}
                handlePriceInput={handlePriceInput}
                listOfProducts={loading ? [] : filteredProducts}
            />
        </main>
    )
}

export default App
