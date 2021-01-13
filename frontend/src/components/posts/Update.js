import React, { useState, } from 'react'
import axios from 'axios'

import { Typography, Dialog, DialogActions, DialogContent, Button } from '@material-ui/core/'

import { useStyles } from '../styles'

export const Update = ({ dialog, handleDialog, post, handlePost }) => {
    const classes = useStyles()

    // states
    const [update, setUpdate] = useState(post)

    // functions
    const handleUpdate = (e) => {
        setUpdate(prev => {
            return ({
                ...prev, 
                [e.target.name]: e.target.value
            })
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const URL = `http://localhost:5000/update?_id=${update._id}`
        axios.put(URL, update)

        handlePost(update)
        handleDialog()
    }

    return (
        <Dialog open={dialog} onClose={handleDialog} aria-labelledby="form-dialog-title">
            <DialogContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    POSTID: {post.postId}
                </Typography>
                <Typography variant="h5" component="h2">
                    NAME: {post.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    EMAIL: {post.email}
                </Typography>
            </DialogContent>
            <textarea 
                className={classes.dialogTextField} 
                onChange={handleUpdate} 
                value={update.body} 
                name="body" 
                placeholder="Content" 
                autoComplete="off" 
            />
            <DialogActions>
                <Button onClick={handleSubmit} color="primary">Submit</Button>
                <Button onClick={handleDialog} color="secondary">Close</Button>
            </DialogActions>
        </Dialog>
    )
}