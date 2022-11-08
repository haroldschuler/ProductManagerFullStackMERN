import React, {useState} from 'react'
import { useEffect } from 'react';

const ProductForm = (props) => {

    const [inputs, setInputs] = useState({
        title: "",
        price: "",
        description: ""
    })

    useEffect( () => { 
        if(props.inputs) {
            setInputs(props.inputs)
        }
    }, [props])

    const submitHandler = (e) => {
        e.preventDefault();
        props.submitHandler(inputs);
        setInputs({
            title: "",
            price: "",
            description: ""
        })
    }

    const handleInputChange = (e) => {
        const newInput = {...inputs, [e.target.name] : e.target.value};
        setInputs(newInput);
    }

    return (
        <div>
            <form onSubmit={ submitHandler }>
                <label>Title </label>
                <input name='title' onChange={ handleInputChange } value={inputs.title}></input>
                <br></br><br></br>
                <label>Price </label>
                <input name='price' type='number' onChange={ handleInputChange } value={inputs.price}></input>
                <br></br><br></br>
                <label>Description </label>
                <textarea name='description' onChange={ handleInputChange } value={inputs.description}></textarea>
                <br></br><br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ProductForm