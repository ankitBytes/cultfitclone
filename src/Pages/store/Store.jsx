import React from "react";
import { Box } from "@chakra-ui/react";
// import Navbar from '../../components/Navbar'
import AllItems from "./store_page_components/AllItems";
// import Footer from '../../components/Footer'
import ScrollBtn from "../../Components/ScrollBtn";
import Navbar from "../../Components/SportNav";
import Footer from "../../Components/StoreFooter";
const Store = () => {
  return (
    <Box mt="24">
      <Navbar />
      <Box>
        <AllItems />
      </Box>
      <Box></Box>
      {/* <Box>
      <Footer/>
    </Box> */}
      <ScrollBtn theme="dark" />
      <Footer />
    </Box>
  );
};

export default Store;
