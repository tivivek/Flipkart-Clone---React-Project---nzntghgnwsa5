import React, { useState,useEffect ,createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { fetchApiData } from "./feature/cartSlice";


import { Box } from '@mui/material';

import Header from './components/header/Header';

import Home from './components/home/Home';
import Cart from './components/cart/Cart'




import DetailView from './components/details/DetailView';
import { useDispatch } from "react-redux";

// const apiProductData = createContext();


//=======================================function starts=======================================
function App() {

  // const dispatch = useDispatch();

  // const [productData, setProductData] = useState([]);

  // const fetchApiData = async (url) => {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProductData(data);
  //   } catch (e) {
  //     console.log(e.message)
  //   }
  // };

  // useEffect(() => {
  //   fetchApiData(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`);
  // }, []);

  // useEffect(() => {
  //   dispatch(fetchApiData())
  // }, []);



  return (
    <div>
      {/* <apiProductData.Provider value={productData}> */}
      <Router>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:id' element={<DetailView />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Box>
      </Router>
    {/* </apiProductData.Provider> */}
    </div>
  );
}

export default App;
export { apiProductData };
