import React, { createContext, useState, useEffect } from "react";
import { getAccounts } from "../Services/AccountsService";

export const AccountContext = createContext();

export const AccountsContext = ({ children }) => {
  const [account, setAccounts] = useState([]);
  useEffect(() => {
    getAccounts().then((json) => setAccounts(json));
  }, []);

  const data = { accounts: account };

  return <AccountContext.Provider value={data}> {children}</AccountContext.Provider>;
};
