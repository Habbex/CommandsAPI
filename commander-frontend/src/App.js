import React, { useContext } from "react";
import "./App.css";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import DCommands from "./components/DCommands";
import { ToastProvider } from "react-toast-notifications";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import SwitchUI from "@material-ui/core/Switch";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';

import { CustomThemeContext } from "./themes/provider/CustomThemeProvider";

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

function App() {
  const classes = useStyles();
  const { currentTheme, setTheme } = useContext(CustomThemeContext);
  const isDark = Boolean(currentTheme === "vapor");

  const handleThemeChange = (event) => {
    const { checked } = event.target;
    if (checked) {
      setTheme("vapor");
    } else {
      setTheme("normal");
    }
    console.log(currentTheme);
  };
  return (
    <Provider store={store}>
      <ToastProvider autoDismiss={true}>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Knowledge base
              </Typography>
            <FormControlLabel
              control={
                <SwitchUI checked={isDark} onChange={handleThemeChange} />
              }
              label={currentTheme}
            />
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.Content}>
            <DCommands />
          </div>
        </main>
      </ToastProvider>
    </Provider>
  );
}

export default App;
