
import firebase from '../../config/firebase';

const facebookLogin = () => {

    return dispatch => {
        let provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            let token = result.credential.accessToken;
            // The signed-in user info.
            let user = result.user;
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


const imgUpload = ( file ) => {
    return dispatch => {
        let ref = firebase.storage().ref(`images/${file.name}`).put(file);
        // firebase.storage().ref("images").child(image.name).getDownloadURL()
        // .then(url => {
        //     imgUrl = url;
        // });  
        ref.on('state_changed',function(snapshot) {

        },function(error){

        },function() {
            ref.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                console.log('File available at', downloadURL);
                let dbRef = firebase.database().ref('products');
                let key = dbRef.push().key;
                let product = {
                    name: 'Phone',
                    price: '12000',
                    location: 'Karachi',
                    img: downloadURL,
                    key: key
                }
                dbRef.child(key).set(product);
            });
        });
        
    }
}

const setProducts = () => {
    return dispatch => {
        let pro =[];
        firebase.database().ref('/').child('products').on('child_added', (data) => {
            dispatch({
                type:"SETPRODUCTS",
                payload: data.val()
            })

        })
    }
}

export {
    facebookLogin,
    imgUpload,
    setProducts
}