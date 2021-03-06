import firebase from "firebase";

    const firebaseApp = firebase.initializeApp({
      apiKey: "AIzaSyAKUueag1qilo1YVuO76Zz4z31GawM_fxk",
      authDomain: "todo-demo3.firebaseapp.com",
      projectId: "todo-demo3",
      storageBucket: "todo-demo3.appspot.com",
      messagingSenderId: "1077125570298",
      appId: "1:1077125570298:web:243cab2049577976fcf343",
      measurementId: "G-1EXHL2WRQP"
    })

    const db = firebaseApp.firestore();

    export default db
    export { firebaseApp } 
    export const logOut = () => {
      firebase.auth().signOut().then(()=> {
        console.log('logged out')
      }).catch((error) => {
        console.log(error.message)
      })
    }; 
    
