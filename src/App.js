import TableExemple from './Components/TableExemple';
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import Account from './Components/Account';
import React, { useState } from "react";


function App() {
  
  const [information,setInformation]=useState([])
 fetch('https://mockend.com/rawmediamarketing/vue-assignment-api/accounts')
 .then(response => response.json())
 .then(json => setInformation(json))
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/Account" element={<TableExemple  data={information}   />  }  />
        <Route path='/Account:id' element={<Account data={information}/>}/>
        <Route path="*" element={<Navigate replace to="/account" />} />
      </Routes>
    </BrowserRouter>,

    </>
  );
}

export default App;
