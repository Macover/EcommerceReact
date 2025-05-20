import React from 'react'
import { Products } from './Products';
import useFilters from '../Logic/useFilters';
import './CSS/App.css'

function App() {

    const { loading, filteredProducts, setFilter } = useFilters();

    return (
        <main>
            <header>
                <h1>React Ecommerce App</h1>
            </header>

            <Products
                setFilter={setFilter}
                listOfProducts={loading ? [] : filteredProducts}
            />
        </main>
    )
}

export default App
