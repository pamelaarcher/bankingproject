import React, {createContext} from 'react';

export const UserContext = createContext(null);
export const LoginContext = createContext(null);

export function Card(props){
   
    const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
    const cardText = "card mt-7 mb-0 " + bg + txt;
    const headerText = "h2 fw-bold mb-0 " + txt;
  
    return (
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col col-xl-10">
            <div className={cardText} style={{borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col g-0 p-0 m-0">
                  <img
                    src="./images/bank3.jpg"
                    alt="card form"
                    className="img-responsive" style={{borderRadius: "1rem 0 0 1rem"}}
                  />
                </div> 
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-3 p-lg-4 text-black">
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <img
                        src="./images/banksmall.png" width="50px" height="50px"
                        className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}}
                        alt="bankimg"
                      />
                      <span className={headerText}>{props.header}</span>
                    </div>
                    {props.text && (<div className="card-text">{props.text}</div>)}
                    {props.body}
                  </div>
                  {props.modal}
                </div>
              </div>      
            </div>
          </div>  
        </div>
      </div>
    );    
  }