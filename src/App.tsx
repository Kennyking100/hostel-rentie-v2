import React from "react";
import Details from "./components/Details";
import Explore from "./components/Explore";
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
    </>
  );
}

export default App;
