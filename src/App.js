
import {BrowserRouter, Routes, Route} from'react-router-dom'
import Home from './pages/Home'
import Care from './pages/Care';
import Mind from './pages/Mind';
import Store from './pages/store/Store';

import Layout from "./components/Layout.js";
function App() {

  return(
  <BrowserRouter>
  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/care" element={<Care />} />
          <Route path="/mind" element={<Mind />} />
          <Route path="/store" element={<Store />} />

  </Routes>
  </BrowserRouter>
  )

}
   

export default App;
