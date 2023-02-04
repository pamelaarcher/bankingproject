import React from 'react';
import {Card, UserContext} from './context.js';
import {Modal, Button} from 'react-bootstrap';

export function WithdrawAccount(props){

  const ctx = React.useContext(UserContext); 
  const currentUser = ctx.loggedin;
  const index = ctx.users.findIndex(obj => obj.email === currentUser); 

  const [show, setShow]               = React.useState(userExists(index));
  const [withdraw, setWithdraw]       = React.useState('');
  const [modaltitle, setModaltitle]   = React.useState('');
  const [modaltext, setModaltext]     = React.useState('');
  const [sModal, setSuccessModal]     = React.useState(false);
  const [eModal, setErrorModal]       = React.useState(false);
  const [uModal, setUserModal]        = React.useState(!userExists(index));
  const [balance, setBalance]         = React.useState(currentBal(index, ctx.users) );

  const errorClose = () => setErrorModal(false);
  const successClose = () => {
    setWithdraw('');
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
          <a href="#/Login/">
              <Button className="btn btn-light">Login</Button>
          </a>
        </Modal.Footer>
      </Modal>
  </div>
    )
  }

  function validate(field, label){
    if (isNaN(field) || field < 1 || field > 300 || field > balance) {
      const errorText = "Enter a numeric amount greater than $0 but no more than $300 or current balance in the withdrawal field."
      setModaltitle('Invalid Withdrawal Amount')
      setModaltext(errorText)
      setErrorModal(true)
      return false
    }
    return true;
  }
  
  function addtoAccount() {
    console.log('withdraw', withdraw);
    if (!validate(withdraw, 'withdraw')) return;

    let index = ctx.users.findIndex(obj => obj.email === currentUser); 
      if (index) {
        ctx.users[index].balance = Number(ctx.users[index].balance) - Number(withdraw);
        setBalance(ctx.users[index].balance);
        console.log('balance', balance);
      };
    setModaltitle('Success')
    setModaltext("You successfully withdrew $" + withdraw + ".")
    setSuccessModal(true)
  }  

  return (
    show  ? (
    <Card
    bgcolor="proj"
    txtcolor="white"
    header="Account Withdrawal"
    body={
        <>
        <div className="form-label curruser">{loginText(currentUser)}</div>
        <div className="form-label"  style={{fontSize: "1.25rem", fontWeight: "650", marginTop: "2em", marginBottom: "2em" }}>Current Account Balance: ${balance}</div>
        <div className="form-label">Withdrawal Amount<br/></div>
        <input type="withdraw" className="form-input w-75" id="withdraw" placeholder="Enter withdrawal amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} /><br/>
        <button type="submit" className="btn btn-primary" disabled={withdraw.length<1} onClick={addtoAccount}>Withdraw from Account</button>
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