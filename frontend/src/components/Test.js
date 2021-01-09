import React, { useState } from 'react'

import { Typography, Card, CardActions, CardContent, IconButton } from '@material-ui/core/'
import EditIcon from '@material-ui/icons/Edit'
import { useStyles } from './styles'

import { Update } from './Update'

export const Post = ({ post }) => {
    const [open, setOpen] = useState(false)

    const handleDialog = () => {
        setOpen(true)
        // setOpen(!open)
        // console.log(open)
    }

    const classes = useStyles();
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
                <Update dialog={open} post={post} />
            </CardActions>
        </Card>
    )
}
