import React from "react";
import "./App.css";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Drawer from './components/Drawer';
import Testpage from './pages/testpage';
import Homepage from './pages/homepage';

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

function App() {
  const classes = useStyles();
  
  return (
    <Provider store={store}>
      <ToastProvider autoDismiss={true}> 
        <div className={classes.root}>
        <Router>
        <Drawer/>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/test">
              <Testpage />
            </Route>
          </Switch>
        </Router>
        </div>
      </ToastProvider>
    </Provider>
  );
}

export default App;
