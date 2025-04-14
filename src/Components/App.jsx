import React, { useEffect, useState } from 'react'
import { Products } from './Products';
import './CSS/App.css'

const PRODUCTS_URL = 'https://dummyjson.com/products';

function App() {

    const [listOfProducts, setListOfProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categoryInput, setCategoryInput] = useState('');
    const [priceInput, setPriceInput] = useState('');

    useEffect(() => {

        fetch(PRODUCTS_URL)
            .then(res => res.json())
            .then(response => setListOfProducts(response.products));
    }, []);

    useEffect(() => {

        if (filteredProducts.length === 0) {
            const newProducts = listOfProducts.filter(product => product.category.includes(categoryInput))
            setFilteredProducts(newProducts)
        } else if(filteredProducts.length !== 0){
            const newProducts = listOfProducts.filter(product => product.price.toString().includes(priceInput))
            setFilteredProducts(newProducts.filter(product => product.category.includes(categoryInput)))
        }
         else {
            const newProducts = filteredProducts.filter(product => product.category.includes(categoryInput))
            setFilteredProducts(newProducts)
        }

    }, [categoryInput])

    useEffect(() => {

        if (filteredProducts.length === 0) {
            const newProducts = listOfProducts.filter(product => product.price.toString().includes(priceInput))
            setFilteredProducts(newProducts)
        } else if(filteredProducts.length !== 0){
            const newProducts = listOfProducts.filter(product => product.category.includes(categoryInput))
            setFilteredProducts(newProducts.filter(product => product.price.toString().includes(priceInput)))
        }
        else {
            const newProducts = filteredProducts.filter(product => product.price.toString().includes(priceInput))
            setFilteredProducts(newProducts)
        }


    }, [priceInput])

    const handleCategoryInput = (e) => setCategoryInput(e.target.value);
    const handlePriceInput = (e) => setPriceInput(e.target.value);

    return (
        <main>
            <header>
                <h1>React Ecommerce App</h1>
            </header>

            <Products
                handleCategoryInput={handleCategoryInput}
                handlePriceInput={handlePriceInput}
                listOfProducts={filteredProducts.length === 0 ? listOfProducts : filteredProducts}
            />
        </main>
    )
}

export default App
