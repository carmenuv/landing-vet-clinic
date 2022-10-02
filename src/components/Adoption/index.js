import React from "react";
import "./AdoptionSection.css";
import conejo from "../../assets/conejo-section-adoption.png";
import { Link } from "react-router-dom";

const AdoptionSection = () => {


  return (
    <section className="adoption" id="adopta">
      <h2 className="adoption__info-title">Adopta</h2>
      <div className="adoption__container">
        <div className="adoption__img-container">
          <img src={conejo} alt="" className="adoption__img-rabbit"/>
        </div>
        <div className="adoption__info-container">
          
          <h3 className="adoption__info-subtitle">Adopta en VetClinic</h3>
          <p className="adoption__info-paragraph">
            La defensa de los animales es una causa que involucra justicia,
            compasión y respeto. Con responsabilidad, seguiremos defendiendo los
            derechos animales, dando así voz a aquellos que todavía no la tienen
            en nuestra sociedad.
          </p>
          <div>
          <Link to="/adopta">
            <button className="adoption__info-button">Quiero adoptar</button>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdoptionSection;
