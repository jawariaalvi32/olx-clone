import React from 'react';
import firebase from '../config/firebase';
import { RiFacebookLine } from 'react-icons/ri';


class FacebookLogin extends React.Component {
    state={isSignedIn:false}


    fbLogin = () => {
        var provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            //  console.log(`user => ${user.uid} ${user.displayName} ${user.email}`);
    
            // let ref = firebase.database().ref('users');
            // let user = {
            //   userId : user.uid,
            //   email
            // }
            console.log("Login", user);
                // this.props.history.push('/product')

          }).catch(function(error) {
            console.log("error=>",error);
          });
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
        })
        var user = firebase.auth().currentUser
    
        if (user) {
          this.setState({ isSignedIn: true })
        } else {
          this.setState({ isSignedIn: false })
        }
    }
    render() {
        return (
            <div>
                <button type="button" className="btn btn-outline-dark form-control mb-3 mt-5" onClick={ () => this.fbLogin() }>
                    <RiFacebookLine className="border border-dark rounded-circle  p-1 mr-3 mb-1" size="20"/>
                    Continue with facebook
                </button>
            </div>
        
        )
    }
}

export default FacebookLogin;