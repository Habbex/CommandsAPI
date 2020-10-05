import React, { useContext } from "react";
import "./App.css";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import DCommands from "./components/DCommands";
import { ToastProvider } from "react-toast-notifications";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import SwitchUI from "@material-ui/core/Switch";

import Typography from "@material-ui/core/Typography";

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
  const isDark = Boolean(currentTheme === "dark");

  const handleThemeChange = (event) => {
    const { checked } = event.target;
    if (checked) {
      setTheme("dark");
    } else {
      setTheme("normal");
    }
    console.log(currentTheme);
  };
  return (
    <Provider store={store}>
      <ToastProvider autoDismiss={true}>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Material UI Theme Switcher
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
        {/* Hero unit */}
        <div className={classes.Content}>
          <DCommands />
        </div>
        </main>
      </ToastProvider>
    </Provider>
  );
}

export default App;
