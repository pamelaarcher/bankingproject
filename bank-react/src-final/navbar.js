import {OverlayTrigger, Tooltip} from 'react-bootstrap';

export function NavBar(){
  return(
    <>
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark" aria-label="Collapse navbar">
      <div className="container-fluid">
      <img src='./images/banksmall.png' alt='Bank' className="rounded-circle" height="30px" width="30px"/>
        <a className="navbar-brand" href="#">{' '}BadBank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="home-tooltip"  >Main home page</Tooltip>}
              >
              <a className="nav-link" href="#/home/">Home</a>
              </OverlayTrigger>
            </li>
            <li className="nav-item">
            <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="home-tooltip"  >Login to your account</Tooltip>}
              >
              <a className="nav-link" href="#/login/">Login</a>
              </OverlayTrigger>
            </li>
            <li className="nav-item">
            <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="home-tooltip"  >Setup your bank profile</Tooltip>}
              >
              <a className="nav-link" href="#/createaccount/">Create Account</a>
              </OverlayTrigger>
            </li>
            <li className="nav-item">
            <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="home-tooltip"  >Put money into your account</Tooltip>}
              >
              <a className="nav-link" href="#/deposit/">Deposit</a>
              </OverlayTrigger>
            </li>
            <li className="nav-item">
            <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="home-tooltip"  >Withdraw money from your account</Tooltip>}
              >
              <a className="nav-link" href="#/withdraw/">Withdraw</a>
              </OverlayTrigger>
            </li>
            <li className="nav-item">
            <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="home-tooltip"  >Displays member activity</Tooltip>}
              >
              <a className="nav-link" href="#/alldata/">AllData</a>
              </OverlayTrigger>
            </li>          
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}