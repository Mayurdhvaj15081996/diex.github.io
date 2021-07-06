import { render } from '@testing-library/react';
import React from 'react';
import forMainPageImage from './forMainPage.png';


export default function Login() {
    return (
        <div className="SignUp">
            
            <div className="Image_Section">
            <img src={forMainPageImage} width="600" height="500" className="Logo"></img> <br></br>
            </div> 
            <div className = "Right">
                <div className="Notice_Login">
                    Login with your Parul University Google Email ONLY. <br/>Sign out of any other google account on your Chrome browser <br/>before clicking on the Sign in with Google button.<br/>
                </div>
                <div className="g-signin2" data-onsuccess={onSuccess} data-width="250" data-height="50" data-longtitle="true"></div>
            </div>
            <div className="ForBlank">
                <div className ="Button">
                </div>
            </div>
        </div>
    );
}
  
function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  }

