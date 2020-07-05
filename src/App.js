import React from 'react';
import "./App.css"
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./components/screens/Home"
import Profile from "./components/screens/Profile"
import Signin from "./components/screens/SignIn"
import Signup from "./components/screens/Signup"
import CreatePost from "./components/screens/CreatePost"

function App() {
  return (
    <Router>
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route  path="/profile" component={Profile} />
        <Route  path="/signin" component={Signin} />
        <Route  path="/signup" component={Signup} />
        <Route  path="/create" component={CreatePost} />
    </Router>
  );
}

export default App;
