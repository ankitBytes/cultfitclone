import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Care from "./Pages/Care";
import Store from "./Pages/store/Store";
import Navbar from "../src/Components/navbar/navbar";
import Fitness from "./Components/Layout/Layout";
import PrimaryFooter from "./Components/Footer/primaryFooter";
import Header from "./Components/Layout/Header";
import Singleproduct from "../src/Components/singleproduct/singleproduct"
import { ChakraProvider } from "@chakra-ui/react"

// import ProductDescription from './Components/singleproduct/singleproduct.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/care" element={<Care />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/store" element={<ChakraProvider><Store /></ChakraProvider>}></Route>
          <Route path="/product" element={<Singleproduct />} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;