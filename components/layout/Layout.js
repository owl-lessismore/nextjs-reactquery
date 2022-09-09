import React from 'react';
import Navbar from '../layout/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <h1>This is footer</h1>
    </>
  );
};

export default Layout;
