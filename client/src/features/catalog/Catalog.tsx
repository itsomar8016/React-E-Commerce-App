import { Product } from '../../app/models/product'
import {Button } from '@mui/material';
import ProductList from './ProductList';
import { useEffect, useState } from 'react';

const Catalog = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
      fetch('http://localhost:5150/api/Products')
        .then(response => response.json())
        .then(data => {
          setProducts(data)
        })
  
    }, [])

    return (
        <>
            <ProductList products={products}/>
        </>
    )
}

export default Catalog