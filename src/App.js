import TableExemple from "./Components/TableExemple";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Account from "./Components/Account";
import React, { useContext } from "react";
import { contextComp } from "./Components/Context";

function App() {
  const information = React.useContext(contextComp);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/account"
            element={<TableExemple data={information} />}
          />
          <Route path="/account/:id" element={<Account data={information} />} />
          <Route path="*" element={<Navigate replace to="/account" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
