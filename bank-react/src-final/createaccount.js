import React from 'react';
import {Card, UserContext} from './context.js';
import {Modal, Button} from 'react-bootstrap';

export function CreateAccount(){
  const [id, setID]             = React.useState(4);
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [modaltitle, setModaltitle] = React.useState('');
  const [modaltext, setModaltext] = React.useState('');
  // const [show, setShow]         = React.useState(true);
  const [sModal, setSuccessModal] = React.useState(false);
  const [eModal, setErrorModal] = React.useState(false);

  const errorClose = () => setErrorModal(false);
  const successClose = () => setSuccessModal(false);

  const ctx = React.useContext(UserContext);  

  function SuccessModal(props) {

    return(
      <div>
        <Modal 
          show={sModal} 
          onHide={successClose} 
          centered
          backdrop="static"
          keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title> {props.successtitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {props.successtext}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={successClose}>Close</Button>
          <Button type="button" className="btn btn-primary" onClick={clearForm}>Create Another Account</Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
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

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    // setShow(true);
    setSuccessModal(false);
  }
  
  function validate(field, label){
    let errorText = "";
    setModaltitle('Invalid Input Value');

    if (!field || field.length<1) {   
      errorText = "Enter a correct value in field " + label
      setModaltext(errorText);
      setErrorModal(true);
      return false;
    }
    else {
      if (label === 'email') {
        let emailExists = ctx.users.filter(user => user.email === field);
        if (emailExists.length>0) {
          errorText = "A user account already exists for email " + field;
          setModaltext(errorText);
          setErrorModal(true);
          return false;
        }       
      }
    else {
      if (label === 'password' && field.length < 8) {
          errorText = "Your password must be at least 8 characters. ";
          setModaltext(errorText);
          setErrorModal(true);
          return false;
        }       
      }
    }
    return true;
  }
  
  function HandleCreate(){
    console.log(name,email,password);
    if (!validate(name, 'name')) return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    setID(id + 1)
    ctx.users.push({id, name,email,password,balance:100});
    setModaltitle('Success')
    setModaltext("Your account has been successfully created.  Click the button on the right below to create another account.  Close to return.")
    setSuccessModal(true)
  }  

  return (
    <Card
    bgcolor="proj"
    txtcolor="white"
    header="Create Account"
    body={
        <>
        <div className="form-label">Name<br/></div>
        <input type="input" className="form-input mb-2 w-80" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
        <div className="form-label">Email address<br/></div>
        <input type="input" className="form-input w-80" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
        <div className="form-label">Password<br/></div>
        <input type="password" className="form-input w-80" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
        <div className="text-center mt-3">
          <button type="submit" className="btn btn-primary" disabled={name.length<1 && email.length<1 && password.length<1} onClick={HandleCreate}>Create Account</button>
        </div>
        </>}
    modal={
      <>
      <div className="py-3">                
        <ErrorModal errortitle={modaltitle} errortext={modaltext}/>
      </div>
      <div className="py-3">                
        <SuccessModal successtitle={modaltitle} successtext={modaltext}/>
      </div>
      </>}
  />
  )    
}