import React, { createContext, useState } from "react";


export const FiltersContext = createContext();

export const FiltersContextProvider = ({ children }) => {

    const [filters, setFilter] = useState({
        'Category': 'All',
        'Price': 10
    });

    const [searchBox, setSearchBox] = useState('');

    return (
        <FiltersContext.Provider
            value={{
                filters,
                setFilter,
                searchBox,
                setSearchBox
            }}
        >
            {children}
        </FiltersContext.Provider>
    )
}
