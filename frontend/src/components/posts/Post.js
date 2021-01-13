import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import axios from 'axios'

import { Typography, Card, CardActions, CardContent, IconButton } from '@material-ui/core/'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import { useStyles } from '../styles'
import { Update } from './Update'

export const Post = ({ post }) => {
    const classes = useStyles()

    // redux
    const dispatch = useDispatch()
    
    // states
    const [open, setOpen] = useState(false)

    // functions
    const handleDelete = () => {
        axios.delete(`http://localhost:5000/delete?_id=${post._id}`)
            .then(res => {
                dispatch({type: 'DELETE', delete: post})
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleDialog = () => {
        setOpen(!open)
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    POSTID: {post.postId}
                </Typography>
                <Typography variant="h5" component="h2">
                    NAME: {post.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    EMAIL: {post.email}
                </Typography>
                <Typography variant="body2" component="p">
                    CONENT: {post.body}
                </Typography>
            </CardContent>

            <CardActions>
                <IconButton color="primary" onClick={handleDialog}>
                    <EditIcon />
                </IconButton>
                <IconButton color="secondary" onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
                <Update dialog={open} handleDialog={handleDialog} post={post} />
            </CardActions>
        </Card>
    )
}
