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

    useEffect(() => {
        
        setFilteredProducts(filterProducts(listOfProducts))        

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

    return (
        <main>
            <header>
                <h1>React Ecommerce App</h1>
            </header>

            <Products
                setFilter = {setFilter}
                listOfProducts={loading ? [] : filteredProducts}
            />
        </main>
    )
}

export default App
