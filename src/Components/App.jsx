import React, { useEffect, useState } from 'react'
import { Products } from './Products';
import './CSS/App.css'

const PRODUCTS_URL = 'https://dummyjson.com/products';

function App() {

    const [listOfProducts, setListOfProducts] = useState([]);

    useEffect(() => {

        fetch(PRODUCTS_URL)
            .then(res => res.json())
            .then(response => setListOfProducts(response.products));
    }, []);

    return (
        <main>
            <header>
                <h1>React Ecommerce App</h1>
            </header>

            <Products
                listOfProducts={listOfProducts}
            />
        </main>
    )
}

export default App
