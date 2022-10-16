import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

//CREATE CONTEXT
export const AuthContext = createContext();

//FIREBASE AUTH DECLARE
const auth = getAuth(app);

const UserContext = ({children}) => {


    //DECLARE STATE
    // const [user,setUser] =useState({displayName: 'shifa'});
    const [user,setUser] =useState({displayName: 'shifa'});
    const [loading, setLoading] = useState(true);
    //USE GOOGLE PROVIDER FOR GOOGLE SIGN IN

    const googleProvider = new GoogleAuthProvider();

     //CREATE USERR FUNCTION USE IN REGISTER PAGE
     const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
     }



     //CREATE SIGN IN FUNCTION USE IN LOGIN PAGE
     const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
     }

//CREATE FUNCTION SIGNIN WITH GOOGLE AND DECLARE VARIABLE UPS IN THE FUNCTION
 const signInWithGoogle = () => {
   return signInWithPopup(auth, googleProvider);
 }



     //CREATE SIGN OUT FUNCTION

     const logOut = () => {
        signOut(auth)
     }


//FOR USER CHANGE WE USE USEEFFECT AND RETURN FUNCTION
     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

              setUser( currentUser);
              setLoading(false);
              console.log( currentUser);
        })
        return () => {
            unsubscribe();
        }
     },[]);



//ALL FUNCTION VARIABLE CALL IS HERE
     const authInfo = {user,loading, createUser,signIn,logOut,signInWithGoogle };
     console.log(authInfo);


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;