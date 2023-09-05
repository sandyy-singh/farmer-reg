

import { createContext, useContext, useState } from 'react';
import React from 'react'

const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState("");
    const [editData, setEditData] = useState("");
    return (
      <UserContext.Provider value={{ userId,editData,setUserId,setEditData }}>
        {children}
      </UserContext.Provider>
    );
}


export const useUserContext = () => useContext(UserContext);
