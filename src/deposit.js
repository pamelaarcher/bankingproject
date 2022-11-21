import React from 'react';
import {Card, UserContext} from './context.js';
import {Modal, Button} from 'react-bootstrap';

export function DepositAccount(props){

  const ctx = React.useContext(UserContext); 
  const currentUser = ctx.loggedin;
  const index = ctx.users.findIndex(obj => obj.email === currentUser); 

  const [show, setShow]         = React.useState(userExists(index));
  const [deposit, setDeposit]         = React.useState('');
  const [modaltitle, setModaltitle] = React.useState('');
  const [modaltext, setModaltext] = React.useState('');
  const [sModal, setSuccessModal] = React.useState(false);
  const [eModal, setErrorModal] = React.useState(false);
  const [uModal, setUserModal] = React.useState(!userExists(index));
  const [balance, setBalance]         = React.useState(currentBal(index, ctx.users) );
  
  const errorClose = () => setErrorModal(false);
  const successClose = () => {
    setDeposit('');
    setSuccessModal(false);
  }
  
  const UserClose = () => setUserModal(false);

  function loginText(currentUser){
    if (currentUser.length < 1) {
      return 'No current user.  Please login.'
    } else {
      return 'Currently logged in as ' + currentUser
    }
  }

  function userExists(index) {
    if (!index || index<0) {
        return false
    } else {
      return true;
    }
  }

  function currentBal(index, users) {
    if (!index || index<0) {
        return null
    } else {
      return users[index].balance;
    }
  }

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

  function UserErrModal(props) {
    
    return(
    <div>
        <Modal
          show={uModal} 
          onHide={UserClose} 
          centered
          backdrop="static"
          keyboard={false} 
        >
        <Modal.Header closeButton>
          <Modal.Title>{props.errortitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {props.errortext}
        </Modal.Body>
        <Modal.Footer>
          <a href="#/login/">
              <Button className="btn btn-light">Login</Button>
          </a>
        </Modal.Footer>
      </Modal>
  </div>
    )
  }
  
  function validate(field, label){
    if (isNaN(field) || field < 1 || field > 50000) {
      setModaltext("Enter a numeric amount greater then 0 or less then 50000 in deposit field.");
      setModaltitle('Invalid Deposit Amount');
      setErrorModal(true)
      return false
    }
    return true;
  }
  
  function addtoAccount() {
    console.log('deposit', deposit);
    if (!validate(deposit, 'deposit')) return;

    let index = ctx.users.findIndex(obj => obj.email === currentUser); 
      if (index) {
        ctx.users[index].balance = Number(ctx.users[index].balance) + Number(deposit);
        setBalance(ctx.users[index].balance);
        console.log('balance', balance);
      };
    setModaltitle('Success');
    setModaltext("You successfully deposited $" + deposit + ".")
    setSuccessModal(true)
  }  

  return (
    show  ? (
      <Card
      bgcolor="proj"
      txtcolor="white"
      header="Account Deposit"
      body={
          <>
          <div className="form-label curruser">{loginText(currentUser)}</div>
          <div className="form-label"  style={{fontSize: "1.25rem", fontWeight: "650", marginTop: "2em", marginBottom: "2em" }}>Current Account Balance: ${balance}</div>
          <label htmlFor="deposit" className="form-label" id="depositlabel">Deposit Amount<br/></label>
          <input type="input" className="form-input w-75" id="deposit" placeholder="Enter deposit amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br/>
          <button type="submit" className="btn btn-primary" disabled={deposit.length<1} onClick={addtoAccount}>Deposit into Account</button>
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
    ):(
      <UserErrModal
        errortitle='Login Required' 
        errortext='You are not currently logged in.  Please login.'
      />
    )
  )    
}