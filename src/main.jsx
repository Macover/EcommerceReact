import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './Components/App'
import { FiltersContextProvider } from './Context/filtersContext'

const app = createRoot(document.getElementById('app'))
app.render(
    <FiltersContextProvider>
        <App />
    </FiltersContextProvider>
)
