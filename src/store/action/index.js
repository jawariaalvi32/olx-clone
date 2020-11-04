
import firebase from '../../config/firebase';

const facebookLogin = () => {

    return dispatch => {
        var provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
           let createUser = {
               name: user.displayName,
               email: user.email,
               profile: user.photoURL,
               uid:user.uid
           }
            console.log("Login", createUser);
                // this.props.history.push('/product')

          }).catch(function(error) {
            console.log("error=>",error);
          });
    }
}


export {
    facebookLogin
}