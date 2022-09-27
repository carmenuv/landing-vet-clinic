import React from "react";
import "./Equipo.css";

import img1 from '../../assets/profile1.png';
import img2 from '../../assets/profile2.png';
import img3 from '../../assets/profile3.png';

const Equipo = () => {
  return (
    <section className="container text-center" id="#equipo">
      <div className="mb-4">
        <h1>¿Quiénes integran nuestro equipo?</h1>
      </div>
      <div class="container m-y-2">

        <div class="row gap-1">

          <div class="col">
            <div className="">
              <img src={img1} alt="" className="" width="280px" />              
            </div>
            <div className="">
              <h2 className="">Sofía Shawn</h2>
              <h5>Veterinaria</h5>
              <p className="">
                Especialista en perros
              </p>
            </div>

          </div>
          <div class="col">
            <div className="">
              <img src={img2} alt="" className="" width="280px"/>
            </div>
            <div className="">
              <h2 className="">Franco Snow</h2>
              <h5>Veterinario</h5>
              <p className="">
                Especialista en gatos
              </p>
            </div>
          </div>

          <div class="col">
            <div className="">
              <img src={img3} alt="" className="" width="280px"/>
            </div>
            <div className="">
              <h2 className="">Ana Fiuz</h2>
              <h5>Veterinaria</h5>
              <p className="">
                Especialista conejos
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>   
  );
};

export { Equipo };


