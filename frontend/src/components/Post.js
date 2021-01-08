import React from 'react'

import {makeStyles, Typography, Card, CardActions, CardContent, Button} from '@material-ui/core/';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 6px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});

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
                <Button size="small">Edit</Button>
            </CardActions>
        </Card>
    )
}
