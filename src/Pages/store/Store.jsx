import React from "react";
import { Box } from "@chakra-ui/react";
// import Navbar from '../../components/Navbar'
import AllItems from "./store_page_components/AllItems";
// import Footer from '../../components/Footer'
import ScrollBtn from "../../Components/ScrollBtn";
import Navbar from "../../Components/navbar/storeNavbar";
import PrimaryFooter from "../../Components/Footer/primaryFooter"
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
      <PrimaryFooter />
    </Box>
  );
};

export default Store;