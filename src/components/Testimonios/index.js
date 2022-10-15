import React from 'react';

import "./Testimonios.css";

import img1 from '../../assets/dog.jpeg';
import img2 from '../../assets/rabbit.jpeg';
import img3 from '../../assets/cat.jpeg';

const Testimonios =()=>{

    return(

    <section className="testimonials" id="testimonios">
      <div className="testimonials-container">

        <div className="testimonials__container-title">
          <h1 className="testimonials__info-subtitle">¿Qué opinión tienen nuestros clientes de nuestros servicios?</h1>
        </div>

        <div className="row">
          <div className="col">
            <div className="testimonial">
              <div className="testimonial-img">
                <img src={img1} alt="dog"/>
              </div>
              <div className="quote-mark">
                <i className="bi bi-quote testimonial__icon"></i>
              </div>            
              <div className="testimonial-text">
                <p>
                  Hace 2 años que llevo a mi perrito y ha sido fantástico. Ellos nos atienden lo más rápido posible. Son muy higiénicos y, lo más importante, la atención es de primera. Los recomiendo.
                </p>
                <div className="name">Rebeca Clark - Doctora</div>
              </div>            
            </div>
          </div>

          <div className="col">
            <div className="testimonial">
              <div className="testimonial-img">
                <img src={img2} alt="dog"/>
              </div>
              <div className="quote-mark">
                <i className="bi bi-quote testimonial__icon"></i>
              </div>            
              <div className="testimonial-text">
                <p>
                  Hace 2 años que llevo a mi perrito y ha sido fantástico. Ellos nos atienden lo más rápido posible. Son muy higiénicos y, lo más importante, la atención es de primera. Los recomiendo.
                </p>
                <div className="name">Robert Allen - Empresario</div>
              </div>            
            </div>
          </div>

          <div className="col">
            <div className="testimonial">
              <div className="testimonial-img">
                <img src={img3} alt="dog"/>
              </div>
              <div className="quote-mark">
                <i className="bi bi-quote testimonial__icon"></i>
              </div>            
              <div className="testimonial-text">
                <p>
                  Hace 2 años que llevo a mi perrito y ha sido fantástico. Ellos nos atienden lo más rápido posible. Son muy higiénicos y, lo más importante, la atención es de primera. Los recomiendo.
                </p>
                <div className="name">Silvia Moura- Dentista</div>
              </div>            
            </div>            
          </div>

        </div>
      
      </div>
      
    </section>




  )
}

export {Testimonios};