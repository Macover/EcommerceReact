import { useEffect, useState } from 'react'

const PRODUCTS_URL = 'https://dummyjson.com/products';

export default function useFilters() {
    const [loading, setLoading] = useState(true);
    const [listOfProducts, setListOfProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const [filters, setFilter] = useState({
        'Category': 'All',
        'Price': 0
    });

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

    }, [filters, loading]);

    function filterProducts(products) {

        return products.filter(product => {
            return product.price <= filters.Price
                && (
                    filters.Category === 'All' ||
                    product.category === filters.Category
                )
        })

    }

    return { loading, filteredProducts, setFilter }
}