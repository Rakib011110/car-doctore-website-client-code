import React from "react";
import Banner from "./Banner";
import About from "./About";
import ServicesCard from "./Services/ServicesCard";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>

      <Services></Services>
    </div>
  );
};

export default Home;
