import React, { useEffect, useState } from 'react'
import axios from 'axios'

import clsx from 'clsx'
import { OutlinedInput, InputLabel, FormControl } from '@material-ui/core/'
import { useStyles } from './styles'

import { Post } from './Post'

export const Posts = () => {
    const classes = useStyles()
    const initialState = {
        postId: '',
        name: '',
    }
    const [search, setSearch] = useState(initialState)
    const [posts, setPosts] = useState([])

    const handleChange = (e) => {
        setSearch(prev => {
            return ({
                ...prev, 
                [e.target.name]: e.target.value
            })
        })
    }

    useEffect(() => {
        console.log(search)
        axios.get(`http://localhost:5000/get?postId=${search.postId}&name=${search.name}`)
            .then(res => {
                console.log(res.data)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [search])

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
            <h6>Results Found: {posts.length}</h6>

            {posts.map((post) => {
                return (
                    <div key={post._id}>
                        <Post postId={post.postId} name={post.name} email={post.email} body={post.body} />
                    </div>
                ) 
            })}

        </div>
    )
}