import React, { useState } from 'react'

import { Typography, Card, CardActions, CardContent, IconButton } from '@material-ui/core/'
import EditIcon from '@material-ui/icons/Edit'
import { useStyles } from './styles'

// import { Update } from './Update'

export const Post = (props) => {
    const [open, setOpen] = useState(false)

    const dialogHandle = () => {
        setOpen(!open)
        console.log(open)
    }

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    POSTID: {props.postId}
                </Typography>
                <Typography variant="h5" component="h2">
                    NAME: {props.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    EMAIL: {props.email}
                </Typography>
                <Typography variant="body2" component="p">
                    CONENT: {props.body}
                </Typography>
            </CardContent>

            <CardActions>
                <IconButton color="primary" onClick={dialogHandle}>
                    <EditIcon />
                </IconButton>
            </CardActions>
            {/* <Update open={open} /> */}
        </Card>
    )
}
