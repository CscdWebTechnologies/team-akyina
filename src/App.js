import React from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Account from "./components/Account";
import BlueBanner from "./components/BlueBanner";
import CoinTable from "./components/CoinTable";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import SpaceBanner from "./components/SpaceBanner";
import Crypto from "./components/Crypto";

const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <CoinTable />
      <Portfolio />
      <Crypto />
      <BlueBanner />
      <Account />
      <SpaceBanner />
      <Footer />
    </div>
  );
};

export default App;
