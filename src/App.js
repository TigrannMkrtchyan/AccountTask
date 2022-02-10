import TableExample from "./Components/TableExample";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Account from "./Components/Account";
import React from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/account" element={<TableExample />} />
          <Route path="/account/:id" element={<Account />} />
          <Route path="*" element={<Navigate replace to="/account" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
