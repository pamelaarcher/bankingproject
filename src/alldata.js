import React from 'react';
import {UserContext} from './context.js';

export function AllData() {

  const ctx = React.useContext(UserContext);

  function CreateCards(props) {  

    const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
    const cardClass = "card mt-4 mb-0" + txt;

    const users = ctx.users;
    
    const userCards = users.map((user) => {
      return (
        <div className="col-sm-6 mx-0">
        <div className={cardClass} key={user.id}>
          <div className="card-header text-center p-0">
              {'Profile for user ' + user.name}
          </div>
          <div className="card-body alldata-body px-3" style={{borderBottomLeftRadius: "1rem", borderBottomRightRadius: "1rem"}}>
            <p>{'User ID:  ' + user.id}</p>
            <p>{'Email:  ' + user.email}</p>
            <p>{'Current Balance: $' + user.balance}</p>
          </div>
          </div>
        </div>
        )
      }
    );
    return userCards;
  }
  
  return (
    <>
      <div className="container mt-5 mx-1">
        <div className="row">
            <h1 className="text-center">User Profile Information</h1>
            <CreateCards txtcolor="white" />
          </div>
      </div>
    </>
  );
}