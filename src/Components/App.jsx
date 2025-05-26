import React from 'react'
import { Products } from './Products';
import useFilters from '../Logic/useFilters';
import './CSS/App.css';
import Header from './Header';
import Cart from './Cart';

function App() {

    const { loading, filteredProducts } = useFilters();

    return (
        <main className='main'>
            <Cart/>
            <Header />
            <Products
                listOfProducts={loading ? [] : filteredProducts}
            />
        </main>
    )
}

export default App
