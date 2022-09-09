import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <h1>This is header</h1>
      <div>{children}</div>
      <h1>This is footer</h1>
    </>
  );
};

export default Layout;
