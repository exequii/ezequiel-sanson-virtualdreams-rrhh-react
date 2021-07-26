import React from "react";
import { NavBar } from "../components/NavBar";
import { Formulario } from "../components/Formulario";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Formulario></Formulario>
      <Footer></Footer>
    </div>
  );
};

export default Home;
