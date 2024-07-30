import React from 'react';
import Header from '../components/Header/Headers'
import Footer from '../Footer/Footer';
import Routers from '../routes/Routerss';


const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
