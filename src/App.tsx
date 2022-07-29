import React from "react";
import Details from "./components/Details";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Explore />
      <Details />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
