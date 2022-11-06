import React, {useState} from 'react'
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submitted")
        axios.post('http://localhost:8000/api/product/new', {
            title,
            price,
            description
        })
            .then( res => console.log(res) )
            .catch( err => console.log(err) );
        setTitle("")
        setPrice("")
        setDescription("")
    }

    return (
        <div>
            <h2>Product Manager</h2>
            <form onSubmit={ submitHandler }>
                <label>Title</label>
                <input onChange={ e => setTitle(e.target.value) } value={title}></input>
                <br></br><br></br>
                <label>Price</label>
                <input type='number' onChange={ e => setPrice(e.target.value) } value={price}></input>
                <br></br><br></br>
                <label>Description</label>
                <textarea onChange={ e => setDescription(e.target.value) } value={description}></textarea>
                <br></br><br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ProductForm