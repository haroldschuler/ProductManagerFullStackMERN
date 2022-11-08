import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    
    const handleDelete = () => {
        console.log(props.id)
        axios.delete(`http://localhost:8000/api/delete/${props.id}`)
            .then(res => {
                // console.log(res);
                props.removeDeleted(props.id)
            })
            .catch(err => console.log(err));
    }
    return (
        <button onClick={ handleDelete }>Delete</button>
    )
}

export default DeleteButton