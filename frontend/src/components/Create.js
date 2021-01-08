import React, { useState } from 'react'
import axios from 'axios'

import clsx from 'clsx'
import { OutlinedInput, InputLabel, FormControl, Button } from '@material-ui/core/'
import { useStyles } from './styles'

export const Create = () => {
    const classes = useStyles()
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
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">PostID</InputLabel>
                <OutlinedInput
                    type="number"
                    name="postId"
                    onChange={handleChange}
                    value={input.postId}
                    labelWidth={70}
                />
            </FormControl>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Name</InputLabel>
                <OutlinedInput
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={input.name}
                    labelWidth={70}
                />
            </FormControl>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                <OutlinedInput
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={input.email}
                    labelWidth={70}
                />
            </FormControl>
            <form>
                <div className="form-group">
                    <textarea onChange={handleChange} value={input.body} className="form-control" name="body" placeholder="Content" autoComplete="off"></textarea>
                </div>
            </form>
            <Button variant="contained" color="primary" onClick={handleClick}>Create</Button>
        </div>
    )
}