import Header from './components/header/Header';

import { Box } from '@mui/system';
import Home from './components/home/Home';


import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import DetailView from './components/details/DetailView';


function App() {


  return (
    <div>
      <Router>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:id' element={<DetailView />} />
          </Routes>
        </Box>
      </Router>
    </div>
  );
}

export default App;
