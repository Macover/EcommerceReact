import { useContext, useEffect, useState } from 'react'
import { FiltersContext } from '../Context/filtersContext';

const PRODUCTS_URL = 'https://dummyjson.com/products';

export default function useFilters() {

    const [loading, setLoading] = useState(true);
    const [listOfProducts, setListOfProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const { filters, setFilter, searchBox, setSearchBox } = useContext(FiltersContext)

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
    }, [filters, loading, searchBox]);


    function filterProducts(products) {

        return products.filter(product => {
            return product.price <= filters.Price
                && (
                    filters.Category === 'All' ||
                    product.category === filters.Category
                )
                && (
                     product.title.toLowerCase().includes(searchBox)
                )

        });

    }

    return { loading, filteredProducts, setFilter, searchBox, setSearchBox }
}