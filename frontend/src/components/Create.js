import React, { useState } from 'react'
import axios from 'axios'

export const Create = () => {
    const initialState = {
        postId: '',
        name: '',
        email: '',
        body: '',
    }
    const [input, setInput] = useState(initialState)

    const handleChange = (e) => {
        setInput(prev => {
            return ({
                ...prev, 
                [e.target.name]: e.target.value
            })
        })
    }

    const handleClick = (e) => {
        e.preventDefault()

        console.log(input)
        axios.post('http://localhost:5000/create', input)
        setInput(initialState)
    }

    return (
        <div className='container'>
            <h1>Posts</h1>
            <form>
                <div className="form-group">
                    <input type="number" onChange={handleChange} value={input.postId} className="form-control" name="postId" placeholder="PostID" autoComplete="off"></input>
                </div>
                <div className="form-group">
                    <input onChange={handleChange} value={input.name} className="form-control" name="name" placeholder="Name" autoComplete="off"></input>
                </div>
                <div className="form-group">
                    <input onChange={handleChange} value={input.email} className="form-control" name="email" placeholder="Email" autoComplete="off"></input>
                </div>
                <div className="form-group">
                    <textarea onChange={handleChange} value={input.body} className="form-control" name="body" placeholder="Content" autoComplete="off"></textarea>
                </div>
                <button onClick={handleClick} className="btn btn-lg btn-info">Create</button>
            </form>
        </div>
    )
}