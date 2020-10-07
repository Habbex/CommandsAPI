import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DCommands from "../components/DCommands";

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    Content: {
      padding: theme.spacing(8, 0, 6),
    },
    title: {
      flexGrow: 1,
    },
  }));
  

const HomePage =()=>{
    const classes = useStyles();

    return(

        <div className={classes.Content}><DCommands/></div>
    ) 
};

export default HomePage;