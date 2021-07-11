import React from 'react';

export default function LogIn(){
        return(
            <div className = "LogIn">
                    <div className="Main_Component">
          <div className="Image_Section">
            <img src={Image} width="600" height="500" className="Logo"></img> <br></br>
          </div>
          <div className="Notice_Login">
            Login with your Parul University Google Email ONLY. <br />Sign out of any other google account on your Chrome browser <br />before clicking on the Sign in with Google button.<br /><br/>
            <div id="loginButton" className="GButton" data-onsuccess="onSignIn"></div>
          </div>  
          <div className="ForBlank">
            <div className="Button">
            </div>
          </div>
        </div>
            </div>
        );
}