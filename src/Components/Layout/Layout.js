import React from 'react';
import Header from './Header';
import Body from './Body';
const Fitness = ({ children}) => {
  return (
    <>
   
        <Header />
        <div>{children}</div>
        <Body/>
    </>
  );
};

export default Fitness;