import React, { createContext, useContext, useState, useEffect } from "react";
import { isMock } from "../Shared/isMock";
import mockData from "../../Services/data.json";
import { getAccounts } from "../Shared/serverData";
import { dataFilter } from "../Services/AccountsService";

export const AccountContext = React.createContext();

export const Context = ({ children }) => {
  const [account, setAccounts] = useState([]);
  useEffect(() => {
    dataFilter().then((json) => setAccounts(json));
  }, []);

  const data = { accounts: account };

  return (
    <AccountContext.Provider value={data}> {children}</AccountContext.Provider>
  );
};
