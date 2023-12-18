import React from "react";
import SignIn from "./SignIn";
import {db, auth} from "../firebase.js";

export default function UIHolder() {
  if (auth.currentUser == null) {
    return (
      <React.Fragment>
        <h1>Please Sign In</h1>
      </React.Fragment>
    )
  } else if (auth.currentUser != null) {
    return(
      <h1>Signed in!</h1>
    )
  }
}