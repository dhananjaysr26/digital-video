import React,{useState,useEffect,useContext,createContext} from 'react'
import {auth} from '../utils/firebase';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'

const AuthContext=createContext({
    currentUser:null ,
    signup:()=>Promise,
    login:()=>Promise,
});

export const useAuth=()=>useContext(AuthContext);

export default function AuthProvider({children}) { 
    const [currentUser,setCurrentUser]=useState(null);


    function signup(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }
    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,user=>{
            setCurrentUser(user)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    const value={
        currentUser,
        signup,
        login,
    }
    return (
<AuthContext.Provider value={value}>
{children}
</AuthContext.Provider>
    )
}
