import React from 'react';
import Navbar from '../components/navbar/navbar';
import Homepage from '../components/heroSection/cultHomepage';
import PassHome from '../components/passSection/pass';
import PassDetail from '../components/detailPass/PassDetail';
import Cards from '../components/cards/HomepageCards';
import Banner from '../components/store/storeBanner';
import Family from '../components/cultFamily/cultFamily';
import WeAreCult from '../components/weAreCult/weAreCult';
import PrimaryFooter from '../components/Footer/primaryFooter';
import SecondaryFooter from '../components/Footer/secondaryFooter';

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
