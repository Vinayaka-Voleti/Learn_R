import React from 'react'
import { createContext, useState} from 'react'

const UserContext = () => {

    const Data = createContext();
    const UserProvider = ({children})=>
    {
        const [user, setUser] = useState({name: "Vamsi"})
        
        const updateUser =(newName)=>
        {
            setUser({name: newName})
        }
        return <Data.Provider value={{user, updateUser}}>
            {children}
        </Data.Provider>
    }
}

export  {UserContext, UserProvider};