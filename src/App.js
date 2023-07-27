
import {BrowserRouter, Routes, Route} from'react-router-dom'
import Home from './Pages/Home'
import Care from './Pages/Care';
import Mind from './Pages/Mind';
import Store from './Pages/Store';


import Layout from "./components/Layout.js";
function App() {

  return (
    <Layout />
  )
} 
    <div>
      <BrowserRouter>
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/care" element={<Care />} />
              <Route path="/mind" element={<Mind />} />
              <Route path="/store" element={<Store />} />

      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
