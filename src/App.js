import React from 'react';
import './App.css';
import Header from './Header';
import LogIn from './Login';
import Welcome from './FacultyPanel'
import Footer from './Footer';
import Image from './forMainPage.png';
import { Route, Switch } from 'react-router-dom';


class App extends React.Component {
/* Intilizing Google Script */
  insertGapiScript() {
    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/platform.js'
    script.onload = () => {
      this.initializeGoogleSignIn()
    }
    document.body.appendChild(script)
  }
  /*Intilizing google API*/
  initializeGoogleSignIn() {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        /*Here I am adding my client ID*/
        clien_id: "305658601639-p6k7fuhv4npnod01c4rek35da7nm8l8v.apps.googleusercontent.com",
        cookie_policy: "none",
        fetch_basic_profile: "true"
      }).then(() => {
        const authInstance = window.gapi.auth2.getAuthInstance()
        const isSignedIn = authInstance.isSignedIn.get()
        this.state = {
          isSignedIn: false
        }
        authInstance.isSignedIn.listen(isSignedIn => {
          this.setState({ isSignedIn: true })
        })
        if (isSignedIn) {
          <Welcome />
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
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route path="/facultyLogin" component={Welcome} />
        </Switch>
        <Footer />
      </div>
    );
  }

}

export default App;
