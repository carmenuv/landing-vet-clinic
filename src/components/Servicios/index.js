import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import img1 from '../../assets/servicios-1.jpg';
import img2 from '../../assets/servicios-2.jpg';
import img3 from '../../assets/servicios-3.jpg';
import img4 from '../../assets/servicios-4.jpg';
import img5 from '../../assets/servicios-5.jpg';
import img6 from '../../assets/servicios-6.jpg';
import "./Servicios.css";

const Servicios =()=>{

    return(
    <section className='servicios__section' id="servicios">
      <div className="slider__container-tittle">
        <h1 className="slider__title">¿Qué ofrecemos?</h1>
      </div>
      <Swiper navigation={true} modules={[Navigation]}>

          <SwiperSlide className="slider__body">
            <figure>
              <img src={img1} alt="Cardióloga"/>
            </figure>
            <div className="slider__info">
              <h2 className="subtitle">Cardiología</h2>
              <p className="slider__review">
                Los exámenes cardiológicos periódicos se han vuelto una práctica necesaria permitiendo la identificación y tratamiento de enfermedades cardiacas.
              </p>
              <div>
                <h3 className="slider__price">s/100</h3>
                
              </div>
            </div>            
          </SwiperSlide>

          <SwiperSlide className="slider__body">
            <figure>
              <img src={img2} alt="Laboratorista"/>
            </figure>
            <div className="slider__info">
              <h2 className="subtitle">Laboratorio Clínico</h2>
              <p className="slider__review">
                Los exámenes de laboratorio son fundamentales para el diagnóstico y tratamiento adecuados de nuestros pacientes.
              </p>
              <div>
                <h3 className="slider__price">s/120</h3>
                
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slider__body">
            <figure>
              <img src={img3} alt="Anestesia"/>
            </figure>
            <div className="slider__info">
              <h2 className="subtitle">Anestesia</h2>
              <p className="slider__review">
                Pensando en la seguridad del paciente, antes de inducirlo a la anestesia, debemos evaluarlo físicamente, así como a través de exámenes preoperatorios.
              </p>
              <div>
                <h3 className="slider__price">s/30</h3>
                
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slider__body">
            <figure>
              <img src={img4} alt="Microchip de identificación"/>
            </figure>
            <div className="slider__info">
              <h2 className="subtitle">Microchip de identificación</h2>
              <p className="slider__review">
                Un dispositivo del tamaño de un grano de arroz que se implanta en tu fiel amigo y que le brinda un código de identificación único en el mundo. Esta tecnología ayuda a que cientos de mascotas puedan regresar a sus hogares en caso de pérdida o extravío.
              </p>
              <div>
                <h3 className="slider__price">s/90</h3>
                
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slider__body">
            <figure>
              <img src={img5} alt="Electrocardiograma"/>
            </figure>
            <div className="slider__info">
              <h2 className="subtitle">Electrocardiograma (ECG)</h2>
              <p className="slider__review">
                El ECG es una herramienta para evaluar la actividad eléctrica del corazón.
              </p>
              <div>
                <h3 className="slider__price">s/165</h3>
                
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slider__body">
            <figure>
              <img src={img6} alt="Bisturí"/>
            </figure>
            <div className="slider__info">
              <h2 className="subtitle">Cirugía General y Especializada</h2>
              <p className="slider__review">
                Nuestros profesionales se encuentran capacitados para realizar todo tipo de cirugías generales, desde esterilizaciones, hasta extracción de tumores y especializadas especializadas, desde cirugías plásticas hasta neurocirugías.
              </p>
              <div>
                <h3 className="slider__price">s/150</h3>
                
              </div>
            </div>
          </SwiperSlide>

      </Swiper>
    </section>
  )
}

export {Servicios};