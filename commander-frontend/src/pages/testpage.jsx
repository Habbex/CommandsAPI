import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Grid,
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TablePagination,
    withStyles,
    ButtonGroup,
    Button,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    Content: {
        padding: theme.spacing(8),
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
    },
}));


const TestPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.Content}>
            <Grid container spacing={2} direction="column">
                <Paper className={classes.paper} elevation={3}>
                    <Grid item xs={12} container>
                        <Grid item xs={12}>
                            <Typography variant="h1">Responsive h1</Typography>
                            <Typography variant="h2">Responsive h2</Typography>
                            <Typography variant="h3">Responsive h3</Typography>
                            <Typography variant="h4">Responsive h4</Typography>
                            <Typography variant="h5">Responsive h5</Typography>
                        </Grid>
                        <Grid item xs={12} container>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1">Responsive Subtitle1</Typography>
                                <Typography variant="subtitle2">Responsive Subtitle2</Typography>
                                <Typography variant="caption">Descriptive</Typography>
                                <Typography variant="body1">Body1 - Large</Typography>
                                <Typography variant="body2">Body2 - Regular</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    )
};

export default TestPage;