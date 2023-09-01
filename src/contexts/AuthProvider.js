import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState("");
    const [loading,setLoading]= useState(true)

    // create user 
const createUser  = (email,password)=>{
  setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

 //   google login
 const googleLogin = (provider) => {
  setLoading(true);
  return signInWithPopup(auth, provider);
};

//   login user
const userLogin = (email, password) => {
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
};

 // observer
 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
  });
  return () => unsubscribe();
}, []);

 // signout
 const logOut = () => {
  setLoading(true)
  return signOut(auth);
};

const authInfo={createUser,user,userLogin,logOut,googleLogin,loading}

  return (
    <AuthContext.Provider value={authInfo}>
            {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider