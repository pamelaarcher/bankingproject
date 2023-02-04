import React from 'react';
import {Card, UserContext} from './context.js';

export function Home(){

  const ctx = React.useContext(UserContext);  
  const textMessage="You're in control with secure, online banking.  Enroll now and enjoy features that matter to you including convenient banking and ability to access us wherever you go."
  const currentUser = ctx.loggedin;

  function loginText(currentUser){
    if (currentUser.length < 1) {
      return 'No current user.  Please login.'
    } else {
      return 'Currently logged in as ' + currentUser
    }
  }

  return (
    <Card
      bgcolor="proj"
      txtcolor="white"
      header="BadBank Online Banking"
      text={
        <>
        <div className="form-label" style={{fontSize: "1.25rem", fontWeight: "650", wordSpacing: ".25em", textAlign: "center", lineHeight: "200%", margin: "2em"}}>{textMessage}<br/></div>
        </>}
      body={
        <>
          <div className="form-label curruser">{loginText(currentUser)}</div>
          <div className="text-center">
          <a href="#/CreateAccount/">
              <button className="btn btn-primary me-3">Enroll Now</button>
          </a>
          <a href="#/Login/">
              <button className="btn btn-primary px-4">Login</button>
          </a>
          </div>
        </>
        }
    />    
  );  
}
