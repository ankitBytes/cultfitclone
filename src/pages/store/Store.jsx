import React from "react";
import { Box } from "@chakra-ui/react";
// import Navbar from '../../components/Navbar'
import AllItems from "./store_page_components/AllItems";
// import Footer from '../../components/Footer'
import ScrollBtn from "../../components/ScrollBtn";
const Store = () => {
  return (
    <Box mt="24">
      {/* <Navbar/> */}
      <Box>
        <AllItems />
      </Box>
      <Box></Box>
      {/* <Box>
      <Footer/>
    </Box> */}
      <ScrollBtn theme="dark" />
    </Box>
  );
};

export default Store;
