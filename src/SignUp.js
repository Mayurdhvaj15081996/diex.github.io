import React from 'react';
import forMainPageImage from './forMainPage.png';


export default function Login() {
    return (
        <div className="SignUp">
            
            <div className="Image_Section">
            <img src={forMainPageImage} width="600" height="500" className="Logo"></img> <br></br>
            </div> 
            <div className = "Right">
                <div className="g-signin2" data-onsuccess={onSuccess}></div>
            </div>
            <div className="ForBlank">

            </div>
        </div>
    );
}

function onSuccess(googleUser) {
    console.log('Logged in as: ' + JSON.stringify(googleUser.getBasicProfile().getName()));
  }