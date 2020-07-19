import React from 'react';
import logo from './logo.svg';
import './App.css';
import{store} from "./actions/store";
import {Provider} from 'react-redux'
import DCommands from './components/DCommands';
import {Container} from "@material-ui/core";
import {ToastProvider}  from "react-toast-notifications"
function App() {
  return (
   <Provider store={store}>
     <ToastProvider autoDismiss={true}>
     <Container maxWidth="md"></Container>
     <DCommands/>
     </ToastProvider>
   </Provider>
  );
}

export default App;
