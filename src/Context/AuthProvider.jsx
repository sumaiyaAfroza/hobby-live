import React, { createContext, useEffect } from 'react'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../../firebase';
import { useState } from 'react';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)

const googleLogin = ()=>{
  setLoading(true)
  return signInWithPopup(auth, provider)
}

const logOut =()=>{
  setLoading(true)
  return signOut(auth)
}

  useEffect(()=>{
    const add = onAuthStateChanged(auth,users =>{
      console.log(users)
      setUser(users)
      setLoading(false)
    })
    return()=> add()
  },[])

  const userInfo = {
  googleLogin,user,setUser,logOut,loading,setLoading
  }


  return (
    <AuthContext value={userInfo}> {children} </AuthContext>
  )
}

export default AuthProvider
