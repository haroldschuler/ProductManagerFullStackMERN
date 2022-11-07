import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams, Link} from 'react-router-dom';

const Detail = () => {

    const [product, setProduct] = useState({})
    const {id} = useParams();

    // Change the localhost port so that it universally comes from server.js
    useEffect( () => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then( res => {
                // console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => console.log(err));
    },[id])

    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={'/'}>All Products</Link>
        </div>
    )
}

export default Detail