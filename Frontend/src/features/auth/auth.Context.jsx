import { createContext, useState } from "react";
import {login, register, getMe} from './services/auth.api'

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (username, password) =>{
        setLoading(true);
        try{
            const reponse = await login(username, password);
            setUser(reponse.user)
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    }

    const handleRegister = async (username, email, password) =>{
        setLoading(true);
        try {
            const reponse = await register(username, email, password);
            setUser(reponse.user)
        } catch (error) {
            console.log(err)
        }finally{
            setLoading(false)
        }
    }
    return <div>
        <AuthContext.Provider value={{user, loading, handleLogin, handleRegister}}>
            {children}
        </AuthContext.Provider>
    </div>
}