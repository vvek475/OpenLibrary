import {useState,createContext} from "react"

export const userContext=createContext(null);

export default function UserContextProvider({children}){
    const [user,setuser]=useState(null)
    return (
    <userContext.Provider value={{user,setuser}}>
        {children}
    </userContext.Provider>
    )
}