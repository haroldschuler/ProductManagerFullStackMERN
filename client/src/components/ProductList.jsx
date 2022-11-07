import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
    const [allProducts, setAllProducts] = useState([])
    // const {API_URL} = require('.../server')

    // console.log(API_URL)

    useEffect(() => {
        console.log("running")
        axios.get('http://localhost:8000/api/products/all')
            .then( res => {
                // console.log(res.data[1]._id)
                // console.log("did this work")
                setAllProducts(res.data);
            })
            .catch(err => console.log(err));
    },[])

    return (
        <div>
            <h2>All Products:</h2>
            {allProducts.map( (product,idx) => {
                return <p key={idx}><Link to={`/${product._id}`}>{product.title}</Link></p>
            })}
        </div>
    )
}

export default ProductList