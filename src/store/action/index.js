
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
                dispatch({
                    type:"SAVEIMAGE",
                    payload: downloadURL
                })
            });
        });
        
    }
}

const setProducts = () => {
    let pro =[];
    return dispatch => {
        let ref = firebase.database().ref('/products');
        ref.once('value', (snapshot) => {
            snapshot.forEach((childSnapshot) => {
            //   var childKey = childSnapshot.key;
            pro.push(childSnapshot.val());
            });
            console.log(pro)
            dispatch({
                type:"SETPRODUCTS",
                payload: pro
            })
          });

    }
}

const showProduct = (product) => {
    return dispatch => {
            dispatch({
                type:"SHOWPRODUCT",
                payload: product
        })
    }
}

const getCategories = () => {
    return dispatch => {
        let categories = [];
        firebase.database().ref('/').child('categories').on('child_added', (data) => {
            categories.push(data.val())
        })
        dispatch({
            type:"GETCATEGORIES",
            payload: categories
        })
    }
}

export {
    facebookLogin,
    imgUpload,
    setProducts,
    showProduct,
    getCategories
}