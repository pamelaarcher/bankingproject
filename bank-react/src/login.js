import React from 'react';
import axios from 'axios';
import { useRef, useEffect } from 'react'
import {Modal, Button} from 'react-bootstrap';
import {UserContext} from './context.js';
import {BankForm} from './BankForm.js';
import {useNavigate} from 'react-router-dom';

export function Login(){
  
  const ctx = React.useContext(UserContext);  
  const [email, setEmail]           = React.useState('');
  const [currentUser, setcurUser]   = React.useState(ctx.loggedin);
  const [modaltitle, setModaltitle] = React.useState('');
  const [modaltext, setModaltext]   = React.useState('');
  const [eModal, setErrorModal]     = React.useState(false);
  const [password, setPassword]     = React.useState('');
  const navigate = useNavigate();

  const errorClose = () => setErrorModal(false);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function loginText(currentUser){
    if (currentUser.length < 1) {
      return 'No current user.  Please login.'
    } else {
      return 'Currently logged in as ' + currentUser
    }
  }
  
  function ErrorModal(props) {
    
    return(
    <div>
        <Modal
          show={eModal} 
          onHide={errorClose} 
          centered
          backdrop="static"
          keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{props.errortitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {props.errortext}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={errorClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  </div>
    )
  }

  function validate(email, password, currentUser){
    let errorText = "";
    setModaltitle('Invalid Input Value');

    if (email.length<1) {   
      errorText = "Enter a value in the email field."
      setModaltext(errorText);
      setErrorModal(true);
      return false; 
    }
    else {
      if (password.length<8) {
        errorText = "Enter a value in the password field that is 8 or more characters."
        setModaltext(errorText);
        setErrorModal(true);
        return false }
      // else {
      //   let emailExists = ctx.users.filter(user => user.email === email && user.password === password);
      //   if (emailExists.length < 1) {
      //     errorText = "Account does not exist for this email and password.  Please enroll in online banking.";
      //     setModaltext(errorText);
      //     setErrorModal(true);
      //     return false }
        else {
          if (currentUser === email) {
            errorText = "You are already logged in as " + email + ".  Please enter a different email to change user.";
            setModaltext(errorText);
            setErrorModal(true);
            return false; }
        } 
      // }     
    } 
    return true;
  }

  const handledb = async(url) => {
    await axios.get(url)
      .then((res) => {
        // setData(res.data)
        if (res.data === 'Login failed: user not found') {
          setModaltitle('Account Does Not Exist');
          setModaltext("A user account does not exist for entered email address");
          setErrorModal(true)
          return false
        }
        else {
          if(res.data === 'Login failed: wrong password') {
            setModaltitle('Password Incorrect');
            setModaltext("Password is not corrent for entered email address");
            setErrorModal(true)
            return false
          }
          else {
            let loginuser = {id: res.data._id, name: res.data.name, email: res.data.email, password: res.data.password, balance: res.data.balance}
            ctx.users.push(loginuser);
            ctx.loggedin = email;
            setcurUser(ctx.loggedin);
            console.log(ctx);
            let path = "/home/"; 
            navigate(path)
          }
        }
      })   
      .catch(err => {
        console.log(err)
      })
  }

  function HandleLogin(){
    console.log(email,password, currentUser);
    if (!validate(email, password, currentUser)) return;
    const url = `http://localhost:4000/account/login/${email}/${password}`;
    handledb(url)
  }

function HandleLogoff() {
  ctx.loggedin = '';
  setcurUser(ctx.loggedin);
}

  return (
    <BankForm
      bgcolor="proj"
      txtcolor="white"
      header="Login"
      body={  
            <>
            <div className="form-label curruser">{loginText(currentUser)}</div>
            <div className="form-label">Email<br/></div>
            <input type="input" className="form-input mb-3 w-80" id="email" placeholder="Enter email" ref={inputRef} value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
            <div className="form-label">Password<br/></div>
            <input type="password" className="form-input mb-3 w-80" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
            <div className="text-center mt-3">
            <button type="submit" className="btn btn-primary px-4 me-3" disabled={email.length<1 && password.length<1} onClick={HandleLogin}>Login</button>
            <button type="submit" className="btn btn-primary px-4 me-3" disabled={currentUser.length<1} onClick={HandleLogoff}>Logoff</button>
            <a href="#/CreateAccount/">
                <button className="btn btn-primary">Enroll Now</button>
            </a>
            </div>
            </>
          }
      modal={
        <>
        <div className="py-3">                
          <ErrorModal errortitle={modaltitle} errortext={modaltext}/>
        </div>
        </>
        }
    />
  )
}

