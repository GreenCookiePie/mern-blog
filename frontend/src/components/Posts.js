import React, {useEffect, useState} from 'react'
import axios from 'axios'

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
            <input type="number" onChange={handleChange} value={search.postId} className="form-control" name="postId" placeholder="PostID" autoComplete="off"></input>
            <input onChange={handleChange} value={search.name} className="form-control" name="name" placeholder="Name" autoComplete="off"></input>
            {posts.map((post) => {
                return(
                    <div>
                        <ul key={post._id}>
                            <li>{post.postId}</li>
                            <li>{post.id}</li>
                            <li>{post.name}</li>
                            <li>{post.email}</li>
                            <li>{post.body}</li>
                        </ul>
                    </div>
                ) 
            })}
        </div>
    )
}