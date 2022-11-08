import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams, Link, useNavigate} from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

const Detail = () => {

    const [product, setProduct] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();

    // Change the localhost port so that it universally comes from server.js
    useEffect( () => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then( res => {
                // console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => console.log(err));
    },[id])

    const removeDeleted = (id) => {
        navigate('/');
    }

    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/edit/${id}`}>Edit</Link>
            <DeleteButton id={id} removeDeleted={removeDeleted}/>
            <br></br><br></br>
            <Link to={'/'}>All Products</Link>
        </div>
    )
}

export default Detail