import React, { useState } from 'react'
import axios from 'axios'

import { Typography, Card, CardActions, CardContent, IconButton } from '@material-ui/core/'
import { Dialog, DialogActions, DialogContent, Button } from '@material-ui/core/'
import EditIcon from '@material-ui/icons/Edit'
import { useStyles } from './styles'

export const Post = (props) => {
    const classes = useStyles()

    // states
    const [post, setPost] = useState(props.post)
    const [update, setUpdate] = useState(post)
    const [open, setOpen] = useState(false)

    // functions
    const handleChange = (e) => {
        setUpdate(prev => {
            return ({
                ...prev, 
                [e.target.name]: e.target.value
            })
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const URL = `http://localhost:5000/update/${post._id}` 
        axios.put(URL, update)
        console.log(update)
        
        setOpen(!open)
        setPost(update)
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
                <Dialog open={open} onClose={handleDialog} aria-labelledby="form-dialog-title">
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
                        onChange={handleChange} 
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
            </CardActions>
        </Card>
    )
}
