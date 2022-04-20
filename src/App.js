
import './App.css';

import React, { useEffect, useState } from 'react'
import productApi from './services/roomApi';

function App() {
  const [productlist, setproduct] = useState([]);

useEffect(()=> {
   const fetchProductList = async()=> {
     try{
      const response =await productApi.getAll();
     }catch(error){
      console.log("khong the ket noi api", error);
     }
   }
   fetchProductList();
}

, []);
  return (
    <div className="app">
      hello
    </div>
  );
}

export default App;
