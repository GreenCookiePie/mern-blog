import React from 'react'

import { Typography, Card, CardActions, CardContent, IconButton } from '@material-ui/core/'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useStyles } from './styles'

export const Post = (props) => {
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
                <IconButton color="primary">
                    <AddCircleIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}
