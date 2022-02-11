import React, { createContext, useContext, useState, useEffect } from "react";

export const contextComp = React.createContext();

export const Context = ({ children }) => {
  const [information, setInformation] = useState([]);
  const getDataServer = () => {
    fetch("https://mockend.com/rawmediamarketing/vue-assignment-api/accounts")
      .then((response) => response.json())
      .then((json) => setInformation(json));
  };

  const getDataJson = () => {
    fetch("./Services/data.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setInformation(myJson);
      });
  };
  useEffect(() => {
    process.env.REACT_APP_MY_KEY === "true" ? getDataServer() : getDataJson();
  }, []);

  const data = { accounts: information };

  return <contextComp.Provider value={data}> {children}</contextComp.Provider>;
};
