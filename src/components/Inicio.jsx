import React from "react";
import { Link } from "react-router-dom";
import "../components/styles/Inicio.css";

export const Inicio = () => {
  return (
    <div className="containerBody">
      <div className="bodyHome">
        <h1>VIRTUAL DREAMS</h1>
        <h2>
          Atrévete a innovar, lleva tu negocio al próximo nivel. Nosotros te
          proponemos dar ese salto junto a nosotros, brindándote asesoría y
          soporte desde la planeación hasta la implementación.
        </h2>
        <Link className="login" to="/contacto">
          Contactemonos!
        </Link>
      </div>
    </div>
  );
};

export default Inicio;
