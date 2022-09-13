import React from 'react';
import './Servicios.css';
import larrow from '../../assets/leftarrow.svg';
import rarrow from '../../assets/rightarrow.svg';
import img1 from '../../assets/servicios-1.jpg';
import img2 from '../../assets/servicios-2.jpg';
import img3 from '../../assets/servicios-3.jpg';
import img4 from '../../assets/servicios-4.jpg';
import img5 from '../../assets/servicios-5.jpg';
import img6 from '../../assets/servicios-6.jpg';

const Servicios =()=>{

  const slider = [...document.querySelectorAll('.slider__body')];
  let value;

    function changePosition(change){
      const currentElement = Number(document.querySelector('.slider__body--show').dataset.id);
  
      value = currentElement;
      value += change;
      console.log(value)
  
      console.log(slider.length)
  
      if(value === 0 || value == slider.length+1){
        value = value === 0 ? slider.length : 1;
      }
  
      slider[currentElement-1].classList.toggle('slider__body--show');
      slider[value-1].classList.toggle('slider__body--show')
    } 

      return(
    <div className='body'>
      <section className="slider">
        <div className="slider__container-tittle">
          <h1 className="slider__title">¿Qué ofrecemos?</h1>
        </div>
        <div className="slider__container container">
          <img src={larrow} className="slider__arrow" id="before" onClick={()=>changePosition(1)}/>

          <section className="slider__body slider__body--show" data-id="1">
            <div className="slider__info">
              <h2 className="subtitle">Cardiología</h2>
              <p className="slider__review">
                Los exámenes cardiológicos periódicos se han vuelto una práctica necesaria permitiendo la identificación y tratamiento de enfermedades cardiacas.
              </p>
              <div className="slider__price-container">
                <h3 className="slider__price">s/100</h3>
                <button className="slider__price-link">Más información</button>
              </div>
            </div>

            <figure className="slider__picture">
              <img src={img1} alt="" className="slider__img"/>
            </figure>
          </section>

          <section className="slider__body" data-id="2">
            <div className="slider__info">
              <h2 className="subtitle">Laboratorio Clínico</h2>
              <p className="slider__review">
                Los exámenes de laboratorio son fundamentales para el diagnóstico y tratamiento adecuados de nuestros pacientes.
              </p>
              <div className="slider__price-container">
                <h3 className="slider__price">s/120</h3>
                <button className="slider__price-link">Más información</button>
              </div>
            </div>

            <figure className="slider__picture">
              <img src={img2} alt="" className="slider__img"/>
            </figure>
          </section>

          <section className="slider__body" data-id="3">
            <div className="slider__info">
              <h2 className="subtitle">Anestesia</h2>
              <p className="slider__review">
                Pensando en la seguridad del paciente, antes de inducirlo a la anestesia, debemos evaluarlo físicamente, así como a través de exámenes preoperatorios.
              </p>
              <div className="slider__price-container">
                <h3 className="slider__price">s/30</h3>
                <button className="slider__price-link">Más información</button>
              </div>
            </div>

            <figure className="slider__picture">
              <img src={img3} alt="" className="slider__img"/>
            </figure>
          </section>

          <section className="slider__body" data-id="4">
            <div className="slider__info">
              <h2 className="subtitle">Microchip de identificación</h2>
              <p className="slider__review">
                Un dispositivo del tamaño de un grano de arroz que se implanta en tu fiel amigo y que le brinda un código de identificación único en el mundo. Esta tecnología ayuda a que cientos de mascotas puedan regresar a sus hogares en caso de pérdida o extravío.
              </p>
              <div className="slider__price-container">
                <h3 className="slider__price">s/90</h3>
                <button className="slider__price-link">Más información</button>
              </div>
            </div>

            <figure className="slider__picture">
              <img src={img4} alt="" className="slider__img"/>
            </figure>
          </section>

          <section className="slider__body" data-id="5">
            <div className="slider__info">
              <h2 className="subtitle">Electrocardiograma (ECG)</h2>
              <p className="slider__review">
                El ECG es una herramienta para evaluar la actividad eléctrica del corazón.
              </p>
              <div className="slider__price-container">
                <h3 className="slider__price">s/165</h3>
                <button className="slider__price-link">Más información</button>
              </div>
            </div>

            <figure className="slider__picture">
              <img src={img5} alt="" className="slider__img"/>
            </figure>
          </section>

          <section className="slider__body" data-id="6">
            <div className="slider__info">
              <h2 className="subtitle">Cirugía General y Especializada</h2>
              <p className="slider__review">
                Nuestros profesionales se encuentran capacitados para realizar todo tipo de cirugías generales, desde esterilizaciones, hasta extracción de tumores y especializadas especializadas, desde cirugías plásticas hasta neurocirugías.
              </p>
              <div className="slider__price-container">
                <h3 className="slider__price">s/150</h3>
                <button className="slider__price-link">Más información</button>
              </div>
            </div>

            <figure className="slider__picture">
              <img src={img6} alt="" className="slider__img"/>
            </figure>
          </section>

          <img src={rarrow} className="slider__arrow" id="next" onClick={()=>changePosition(-1)} />
        </div>

      </section>
    </div>
  )
}

export {Servicios};