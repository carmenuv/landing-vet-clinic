import React from "react";
import "./Equipo.css";

import img1 from '../../assets/profile1.png';
import img2 from '../../assets/profile2.png';
import img3 from '../../assets/profile3.png';

const Equipo = () => {
  return (
    <section className="equipo__section" id="equipo">
      <div className="container text-center equipo">
        <div className="mb-4">
          <h1 className="equipo__info-title">¿Quiénes integran nuestro equipo?</h1>
        </div>
        <div className="container m-y-2 ">
          <div className="row col-12 mt-3">
            <div className="col-md-4 col-sm-12">
              <div>
                <img src={img1} alt="" width="230px" />
              </div>
              <div>
                <h2 className="equipo__info-subtitle">Sofía Shawn</h2>
                <h5 className="adoption__info-paragraph">Veterinaria</h5>
                <p className="adoption__info-paragraph">
                  Especialista en perros
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div>
                <img src={img2} alt="" width="230px"/>
              </div>
              <div>
                <h2 className="equipo__info-subtitle">Franco Snow</h2>
                <h5 className="adoption__info-paragraph">Veterinario</h5>
                <p className="adoption__info-paragraph">
                  Especialista en gatos
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="">
                <img src={img3} alt="" width="230px"/>
              </div>
              <div>
                <h2 className="equipo__info-subtitle">Ana Fiuz</h2>
                <h5 className="adoption__info-paragraph">Veterinaria</h5>
                <p className="adoption__info-paragraph">
                  Especialista conejos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>   
  );
};

export { Equipo };


