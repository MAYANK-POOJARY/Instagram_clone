import { useContext } from "react";
import { AuthContext } from "../auth.Context";

export function useAuth(){
    const context = useContext(AuthContext)
    return context;
}