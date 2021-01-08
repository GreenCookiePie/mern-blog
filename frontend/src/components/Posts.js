import React, {useEffect, useState} from 'react'
import axios from 'axios'

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
}));

export const Posts = () => {
    const classes = useStyles();
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