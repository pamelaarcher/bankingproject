import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useLocation} from 'react-router-dom';

export function NavBar(){

  
  const location = useLocation();

  const [url, setUrl] = useState(null);
  
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  
  return(
    <>
    <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark" aria-label="Offcanvas navbar large">
      <div className="container-fluid">
      <img src='./images/banksmall.png' alt='Bank' className="rounded-circle" height="30px" width="30px"/>
        <a className="navbar-brand" href="./">{' '}BadBank</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
           <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Choose From</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="home-tooltip"  >Main home page</Tooltip>}
              >
              <a className={(url ==="/home/" || url ==="/") ? "nav-link active" : "nav-link inactive"}  id="navhome" href="#/home/">Home</a>
              </OverlayTrigger>
            </li>
            <li className="nav-item">
            <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="home-tooltip"  >Login to your account</Tooltip>}
              >
              <a className={(url ==="/login/") ? "nav-link active" : "nav-link inactive"} id="navlogin" href="#/login/" >Login</a>
              </OverlayTrigger>
            </li>
            <li className="nav-item">
            <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="home-tooltip"  >Setup your bank profile</Tooltip>}
              >
              <a className={(url ==="/createaccount/") ? "nav-link active" : "nav-link inactive"} id="navaccount" href="#/createaccount/">Create Account</a>
              </OverlayTrigger>
            </li>
            <li className="nav-item">
            <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="home-tooltip"  >Put money into your account</Tooltip>}
              >
              <a className={(url ==="/deposit/") ? "nav-link active" : "nav-link inactive"} id="navdep" href="#/deposit/">Deposit</a>
              </OverlayTrigger>
            </li>
            <li className="nav-item">
            <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="home-tooltip"  >Withdraw money from your account</Tooltip>}
              >
              <a className={(url ==="/withdraw/") ? "nav-link active" : "nav-link inactive"} id="navwithdraw" href="#/withdraw/">Withdraw</a>
              </OverlayTrigger>
            </li>
            <li className="nav-item">
            <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="home-tooltip"  >Displays member activity</Tooltip>}
              >
              <a className={(url ==="/alldata/") ? "nav-link active" : "nav-link inactive"} id="navdata" href="#/alldata/">All Data</a>
              </OverlayTrigger>
            </li>       
          </ul>
        </div>
      </div>
    </div>
  </nav>
  </>
  );
}