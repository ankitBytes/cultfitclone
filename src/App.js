import React from 'react';
import Mind from './Pages/Mind';
import Care from './Pages/Care';
import Store from './Pages/Store';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route>
          <Route path='/' element = {<Home />}/>
          <Route path='/mind' element={<Mind />}/>
          <Route path='/care' element={<Care />}/>
          <Route path='/store' element={<Store />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
