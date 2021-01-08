import { makeStyles } from '@material-ui/core/'

export const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
        },
        '& > span': {
            margin: theme.spacing(2),
        },
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 6px',
        transform: 'scale(0.8)',
      },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '40ch',
    },
}))