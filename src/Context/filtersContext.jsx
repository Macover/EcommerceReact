import React, { createContext, useState } from "react";


export const FiltersContext = createContext();

export const FiltersContextProvider = ({ children }) => {

    const [filters, setFilter] = useState({
        'Category': 'All',
        'Price': 10
    });

    return (
        <FiltersContext.Provider
            value={{
                filters,
                setFilter
            }}
        >
            {children}
        </FiltersContext.Provider>
    )
}
