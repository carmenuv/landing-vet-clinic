import React from "react";
import "./AdoptionSection.css";
import conejo from "../../assets/conejo-section-adoption.png";

const AdoptionSection = () => {


  return (
    <section className="adoption">
      <div className="adoption__container">
        <div className="adoption__img-container">
          <img src={conejo} alt="" className="adoption__img-rabbit"/>
        </div>
        <div className="adoption__info-container">
          <h2 className="adoption__info-title">Adopción</h2>
          <h3 className="adoption__info-subtitle">Adopta en VetClinic</h3>
          <p className="adoption__info-paragraph">
            La defensa de los animales es una causa que involucra justicia,
            compasión y respeto. Con responsabilidad, seguiremos defendiendo los
            derechos animales, dando así voz a aquellos que todavía no la tienen
            en nuestra sociedad
          </p>
          <div>
            <button className="adoption__info-button">¡Adopta!</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdoptionSection;
