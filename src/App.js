import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Accounts from "./Components/Accounts";
import Account from "./Components/Account";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/account" element={<Accounts />} />
          <Route path="/account/:id" element={<Account />} />
          <Route path="*" element={<Navigate replace to="/account" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
