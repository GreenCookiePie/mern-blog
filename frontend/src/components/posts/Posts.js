/* eslint-disable */

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'

import clsx from 'clsx'
import { OutlinedInput, InputLabel, FormControl, Button } from '@material-ui/core/'

import { useStyles } from '../styles'
import { Post } from './Post'

export const Posts = () => {
    // styles
    const classes = useStyles()

    // redux
    const dispatch = useDispatch()
    const posts = useSelector(state => state.postsR)

    // SEARCH
    const initialState = {
        postId: '',
        name: '',
    }
    const [search, setSearch] = useState(initialState)

    const handleChange = (e) => {
        setSearch(prev => {
            return ({
                ...prev, 
                [e.target.name]: e.target.value
            })
        })
    }

    const handleSearch = (search) => {
        axios.get(`http://localhost:5000/getPosts?postId=${search.postId}&name=${search.name}`)
            .then(res => {
                console.log(search)
                dispatch({type: 'GET', posts: res.data})
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    useEffect(() => {
        console.log(search)
        handleSearch(search)
    }, [])

    return (
        <div className='container'>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">PostID</InputLabel>
                <OutlinedInput
                    type="number"
                    name="postId"
                    onChange={handleChange}
                    value={search.postId}
                    labelWidth={70}
                />
            </FormControl>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Name</InputLabel>
                <OutlinedInput
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={search.name}
                    labelWidth={70}
                />
            </FormControl>
            <Button variant="contained" size="large" color="primary" onClick={handleSearch(search)}>Search</Button>            
            <h6>Results Found: {posts.length}</h6>

            {posts.map((post) => {
                return (
                    <div key={post._id}>
                        <Post post={post} />
                    </div>
                ) 
            })}

        </div>
    )
}