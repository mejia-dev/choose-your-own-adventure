import React, { useState } from "react";
import './App.css';
import { auth } from "../firebase";
import SignIn from './SignIn';
import Header from "./Header"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UIHolder from "./UIHolder";
import { signOut } from "firebase/auth";
import { SavePlayerData } from "./LoadSave";

function App() {

  const [signOutSuccess, setSignOutSuccess] = useState(null);
  const [pageView, setPageView] = useState(0)

  function doSignOut() {
    // SavePlayerData();
    signOut(auth)
      .then(function () {
        setSignOutSuccess('You have successfully signed out!');
        setPageView(0)
      }).catch(function (error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}!`);
      });
  }

  let currentView;

  if (!pageView) {
    currentView =
      <Router>
        <div>
          <Link to="/">Home</Link><br />
          <Link to="/sign-in">Sign In</Link>
        </div>

        <Routes>
          <Route path='/sign-in' element={<SignIn
            changePage={setPageView}
            signOutMessage={setSignOutSuccess}
          />} />
          <Route path='/' element={<UIHolder />} />
        </Routes>
      </Router>
  } else {
    currentView =
      <UIHolder />
  }

  return (
    <React.Fragment>
      <Header 
        signOutFunc={doSignOut}/>
      {signOutSuccess}
      {currentView}
    </React.Fragment>
  )
}

export default App;
