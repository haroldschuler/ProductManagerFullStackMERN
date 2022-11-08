import React from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
import axios from 'axios'
import { useState } from 'react'

const Main = () => {

    const [newProduct, setNewProduct] = useState([]);

    const createProduct = (formObj) => {
        axios.post('http://localhost:8000/api/product/new', formObj)
            .then( res => {
                // console.log(res);
                setNewProduct([...newProduct, res.data.product]);
            })
            .catch( err => console.log(err) );
    }

    return (
        <div>
            <h2>Product Manager</h2>
            <ProductForm submitHandler={createProduct}/>
            <ProductList newProduct={newProduct}/>
        </div>
    )
}

export default Main