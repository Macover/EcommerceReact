import React from 'react'
import { Products } from './Products';
import useFilters from '../Logic/useFilters';
import './CSS/App.css';
import Header from './Header';

function App() {

    const { loading, filteredProducts } = useFilters();

    return (
        <main className='main'>
            <section className='main__container'>
                {/* <Cart /> */}
                <Header />
                <Products
                    listOfProducts={loading ? [] : filteredProducts}
                />
            </section>
        </main>
    )
}

export default App
