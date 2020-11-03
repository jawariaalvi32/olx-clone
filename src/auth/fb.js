// import React from 'react';
// import firebase from 'firebase'
// // import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// require('firebase/auth')
// // import 'firebase/auth'
// import app from '../App.js';


// class FacebookLogin extends React.Component {

//     // state={isSignedIn:false}
//     // uiConfig = {
//     //     signInFlow: "popup",
//     //     signInOptions: [
//     //     //   firebase.auth.GoogleAuthProvider.PROVIDER_sID,
//     //       firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//     //     //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//     //     //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
//     //     //   firebase.auth.EmailAuthProvider.PROVIDER_ID
//     //     ],
//     //     callbacks: {
//     //       signInSuccess: () => false
//     //     }
//     //   }
//     //   componentDidMount = () => {
//     //     firebase.auth().onAuthStateChanged(user => {
//     //       this.setState({ isSignedIn: !!user })
//     //     })
//     //     // var user = firebase.auth().currentUser
    
//     //     // if (user) {
//     //     //   this.setState({ isSignedIn: true })
//     //     // } else {
//     //     //   this.setState({ isSignedIn: false })
//     //     // }
//     //   }
//     render() {
//         return (
//                 <div>
//                     {
//                         this.state.isSignedIn ? (
//                             <h2>SIgned In</h2>
//                         ) : (
//                             <StyledFirebaseAuth
//                                 uiConfig={this.uiConfig}
//                                 firebaseAuth={firebase.auth()}
//                             />
//                         )
//                     }
//                 </div>
        
//         )
//     }
// }

// export default FacebookLogin;