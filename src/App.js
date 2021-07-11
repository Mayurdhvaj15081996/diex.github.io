import React from 'react';
import './App.css';
import Header from './Header';
import Welcome from './SignUp'
import Footer from './Footer';
import Image from './forMainPage.png';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';


class App extends React.Component {

  insertGapiScript() {
    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/platform.js'
    script.onload = () => {
      this.initializeGoogleSignIn()
    }
    document.body.appendChild(script)
  }
  initializeGoogleSignIn() {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        clien_id: "305658601639-p6k7fuhv4npnod01c4rek35da7nm8l8v.apps.googleusercontent.com",
        cookie_policy: "none",
        fetch_basic_profile: "true"
      }).then(() => {
        const isSignedIn = window.gapi.auth2.getAuthInstance().isSignedIn.get()
        this.setState({ isSignedIn })
        if (isSignedIn) {

        }
      })
      console.log("Api Inited")
      window.gapi.load('signin2', () => {
        const params = {
          scope: 'email',
          width: 250,
          height: 50,
          longtitle: true,
          theme: 'dark',
          onsuccess: () => {
            console.log("Log In Succeed")
          },
          onfailure: () => {
            console.log("Log In Failed")
          }
        }
        window.gapi.signin2.render('loginButton', params)
      })
    })
  }
  componentDidMount() {
    console.log("Loading");
    this.insertGapiScript();
  }
  render() {
    return (
      <div className="App">
        <Header />
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
        <Footer/>
      </div>
    );
  }

}

export default App;
