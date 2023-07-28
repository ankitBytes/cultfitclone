
import {BrowserRouter, Routes, Route} from'react-router-dom'
import Home from './Pages/Home'
import Care from './Pages/Care';
import Mind from './Pages/Mind';
import Store from './Pages/store/Store';

import Layout from "./Components/Layout.jsx";
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
