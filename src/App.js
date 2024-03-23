import React,{useContext, useEffect} from 'react';
import { FirebaseContext, AuthContext } from './store/FirebaseContext';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


import './App.css';

import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'
import Post from './store/PostContext';



function App() {

  const {firebase} = useContext(FirebaseContext)
  const {setUser} = useContext(AuthContext)
  
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
   
    <div>
      <Post>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/create" component={Create} />
          <Route path="/viewpost" component={ViewPost} />
        </Switch>
      </Router>
      </Post>
    </div>
  );
}

export default App;
