import { createContext,useContext,useMemo} from "react";
import {useCookies} from 'react-cookie'
import axios from 'axios'

//creae context
const AuthContext=createContext()

export const UserProvider=({children})=>{
//create cookies
    const [cookies,setCookies,removeCookie]=useCookies()

    //login
    const login =async(formData)=>{
        try {
            // make accl to back end

            let res=await axios({
                method:"POST",
                url:'http://localhost:3000/api/auth',
                data:formData

            })
setCookies('token',res.data.token)

        } catch (err) {
            console.error(err)
        }
    }

    //signup
const signUp=async(formData)=>{
    try {
        let res=await axios({
            method:"POST",
            url:'http://localhost:3000/api/users',
            data:formData
        })

        setCookies('token',res.data.token)
    } catch (err) {
        console.error(err)
    }
}

//logout function

const logout=()=>{
    ['token'].forEach((obj)=>removeCookie(obj))
}

//use memo
const value=useMemo(()=>({
    cookies,
    login,
    logout,
    signUp,

}),[cookies])
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}
//invoking useContext and only importing this part give acces for all usecontext
export const useAuth=()=>{
    return useContext(AuthContext)
}