import React from "react";
import { NavBar } from "../components/NavBar";
import { Inicio } from "../components/Inicio";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Inicio></Inicio>
      <Footer></Footer>
    </div>
  );
};

export default Home;
