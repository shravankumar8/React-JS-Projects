import React from "react";
import "/home/gitstar/Desktop/github repos/React_Projects/08.ecommerce-cart/src/pages/stylesheets/loginsignup.css";

const LoginSignup = () => {
  return (
    <div className="logsig">
      <div className="loginsignup">
        <h1 className="signup_name">Signup</h1>
        <div className="inputfields">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="agreement">
          <input className="agree" type="checkbox" />
          <div>
            <p>
              By Continue, i agree to the terms of the use and privacy and
              policy
            </p>
          </div>
        </div>
        <button className="sumbit_sign">Continue</button>
        <p>
          Already have account ?<span className="highlight"> Login here </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
