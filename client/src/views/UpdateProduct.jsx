import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import ProductForm from '../components/ProductForm';

const UpdateProduct = () => {

    const [inputs, setInputs] = useState({
        title: "",
        price: "",
        description: ""
    })
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect( () => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then( res => {
                const newInputs = {
                    title: res.data.title,
                    price: res.data.price,
                    description: res.data.description
                }
                setInputs(newInputs);
            })
            .catch( err => console.log(err));
    },[id])

    const editProduct = (formObj) => {
        axios.put(`http://localhost:8000/api/edit/${id}`,formObj)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        navigate(`/${id}`)
    }

    return (
        <div>
            {inputs.title ? 
                <h2>Edit Product: {inputs.title}</h2> :
                <h2>Loading...</h2>
            }
            <ProductForm inputs={inputs} submitHandler={editProduct}/>
            <br></br>
            <Link to='/'>All Products</Link>
        </div>
    )
}

export default UpdateProduct