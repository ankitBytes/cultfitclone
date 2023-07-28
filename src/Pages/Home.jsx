import React from 'react';

import Homepage from '../Components/heroSection/cultHomepage';
import PassHome from '../Components/passSection/pass';
import PassDetail from '../Components/detailPass/PassDetail';
import Cards from '../Components/cards/HomepageCards';
import Banner from '../Components/store/storeBanner';
import Family from '../Components/cultFamily/cultFamily';
import WeAreCult from '../Components/weAreCult/weAreCult';
import PrimaryFooter from '../Components/Footer/primaryFooter';
import SecondaryFooter from '../Components/Footer/secondaryFooter';
import Navbar from '../Components/navbar/navbar';
import Box from "@mui/material/Box"

const Home = () => {
  return (
    <Box sx={{background: "#010e24"}}>
    <Navbar />
      <Homepage />
      <PassHome />
      <PassDetail />
      <Cards />
      <Banner />
      <Family />
      {/* <WeAreCult /> */}
      <PrimaryFooter />
      <SecondaryFooter />
    </Box>
  );
};

export default Home;
