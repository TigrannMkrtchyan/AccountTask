import React, { createContext, useContext, useState, useEffect } from "react";

export const contextComp = React.createContext();

export const Context = ({ children }) => {
  const [information, setInformation] = useState([]);
  useEffect(() => {
    fetch("https://mockend.com/rawmediamarketing/vue-assignment-api/accounts")
      .then((response) => response.json())
      .then((json) => setInformation(json));
  }, []);

  const data= { accounts: information };

  return <contextComp.Provider value={data}> {children}</contextComp.Provider>;
};


