import React from 'react';
import Navbar from './components/navbar/navbar';
import Homepage from './components/heroSection/cultHomepage';
import PassHome from './components/passSection/pass';
import PassDetail from './components/detailPass/PassDetail';
import Cards from './components/cards/HomepageCards';
import Banner from './components/store/storeBanner';

const App = () => {
  return (
    <>
      <Navbar />
      <Homepage />
      <PassHome />
      <PassDetail />
      <Cards />
      <Banner />
    </>
  );
};

export default App;
