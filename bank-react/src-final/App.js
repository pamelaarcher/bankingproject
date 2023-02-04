import React from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import {UserContext, LoginContext} from './context.js'
import {NavBar} from './navbar.js'
import {Home} from './home.js'
import {Login} from './login.js'
import {CreateAccount} from './createaccount.js'
import {DepositAccount} from './deposit.js'
import {WithdrawAccount} from './withdraw.js'
import {AllData} from './alldata.js'

function App() {
  const currentUser = 'pamearch10@gmail.com';

  return (
      <Router>
        <NavBar/>
         <UserContext.Provider value={{loggedin: '', users:[{id: 0, name:'Abel Jenson',email:'abel@mit.edu',password:'secret01',balance:100}, {id: 1, name:'Pam Archer',email:'pamearch10@gmail.com',password:'current1',balance:50}, {id: 2, name:'Julie Smith',email:'juliesmith@gmail.com',password:'newone02',balance:75}, {id: 3, name:'Don Lock',email:'donlock@gmail.com',password:'donlock1',balance:10}]}}>
          <LoginContext.Provider value = {''}>
          <div className="container" style={{padding: "20px"}}>
            <Routes>
            <Route exact path="/" element={<Home/>} />
              <Route exact path="/home/" element={<Home/>} />
              <Route exact path="/login/" element={<Login/>} />
              <Route exact path="/createaccount/" element={<CreateAccount/>} />
              <Route exact path="/deposit/" element={<DepositAccount loginuser={currentUser}/>} />
              <Route exact path="/withdraw/" element={<WithdrawAccount loginuser={currentUser}/>} />
              <Route exact path="/alldata/" element={<AllData />} />
            </Routes>
           </div>
            </LoginContext.Provider>
         </UserContext.Provider>      
       </Router>
  );
}

export default App;
