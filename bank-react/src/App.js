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

  return (
      <Router>
        <NavBar/>
         <UserContext.Provider value={{loggedin: '', users:[]}}>
          <LoginContext.Provider value = {''}>
          <div className="container" style={{padding: "20px"}}>
            <Routes>
            <Route exact path="/" element={<Home/>} />
              <Route exact path="/home/" element={<Home/>} />
              <Route exact path="/login/" element={<Login/>} />
              <Route exact path="/createaccount/" element={<CreateAccount/>} />
              <Route exact path="/deposit/" element={<DepositAccount loginuser=''/>} />
              <Route exact path="/withdraw/" element={<WithdrawAccount loginuser=''/>} />
              <Route exact path="/alldata/" element={<AllData />} />
            </Routes>
           </div>
            </LoginContext.Provider>
         </UserContext.Provider>      
       </Router>
  );
}

export default App;
