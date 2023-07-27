import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
const Layout = ({ children}) => {
  return (
    <>
   
        <Header />
        <div>{children}</div>
        <Body/>
        <Footer/>
    </>
  );
};

export default Layout;