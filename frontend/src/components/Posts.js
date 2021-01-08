import React, {useEffect, useState} from 'react'
import axios from 'axios'

import TextField from '@material-ui/core/TextField';

export const Posts = () => {
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
            <input id="outlined-basic" variant="outlined" type="number" onChange={handleChange} value={search.postId} className="form-control" name="postId" placeholder="PostID" autoComplete="off" />
            <input id="outlined-basic" variant="outlined" onChange={handleChange} value={search.name} className="form-control" name="name" placeholder="Name" autoComplete="off" />
            <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Standard" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </form>
            {posts.map((post) => {
                return(
                    <div key={post._id} style={{margin: "50px", backgroundColor:"pink"}}>
                        <ul>
                            <li>PostId: {post.postId}</li>
                            <li>ID: {post.id}</li>
                            <li>Name: {post.name}</li>
                            <li>Email: {post.email}</li>
                            <li>Content:  {post.body}</li>
                        </ul>
                    </div>
                ) 
            })}
        </div>
    )
}