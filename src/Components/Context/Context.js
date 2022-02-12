import React, { createContext, useContext, useState, useEffect } from "react";
import { isMock } from "../Shared/isMock";
import mockData from "../../Services/data.json"
import { getAccounts } from "../Shared/serverData";


export const AccountContext = React.createContext();



export const Context = ({ children }) => {
  const [account, setAccounts] = useState([]);
  useEffect(() => {return isMock() ? setAccounts(mockData): getAccounts().then((json) => (setAccounts(json))) ;
    },[])

    console.log(account)
    
 

  const data = { accounts: account };

  return (
    <AccountContext.Provider value={data}> {children}</AccountContext.Provider>
  );
};
