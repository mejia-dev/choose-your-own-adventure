import React, { useState } from "react";
import './App.css';
import FirestoreControl from "./FirestoreControl"
import { db, auth } from "../firebase";
import SignIn from './SignIn';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UIHolder from "./UIHolder";
import { signOut } from "firebase/auth";

function App() {

  const [signOutSuccess, setSignOutSuccess] = useState(null);
  const [pageView, setPageView] = useState(0)

  function doSignOut() {
    signOut(auth)
      .then(function () {
        setSignOutSuccess('You have successfully signed out!');
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
          <button onClick={doSignOut}>Sign out</button>
          {signOutSuccess}
        </div>

        <Routes>
          <Route path='/sign-in' element={<SignIn
            changePage={setPageView}
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
      {currentView}
    </React.Fragment>
  )
}

export default App;
