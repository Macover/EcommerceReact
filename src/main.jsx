import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './Components/App'
import { FiltersContextProvider } from './Context/filtersContext'
import { CartContextProvider } from './Context/cartContext'

const app = createRoot(document.getElementById('app'))
app.render(
    <CartContextProvider>
        <FiltersContextProvider>
            <App />
        </FiltersContextProvider>
    </CartContextProvider>
)
