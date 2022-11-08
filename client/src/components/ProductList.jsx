import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        console.log("running")
        axios.get('http://localhost:8000/api/products/all')
            .then( res => {
                setAllProducts(res.data);
            })
            .catch(err => console.log(err));
    },[props.newProduct])

    const removeDeleted = (id) => {
        let allProductsCopy = allProducts.filter( product => product._id !== id);
        setAllProducts(allProductsCopy);
    }

    return (
        <div>
            <h2>All Products:</h2>
            {allProducts.map( (product) => {
                return (
                    <div key={product._id}>
                        <Link to={`/${product._id}`}>{product.title} </Link>
                        <DeleteButton id={product._id} removeDeleted={removeDeleted}/>
                    </div>
            )})}
        </div>
    )
}

export default ProductList