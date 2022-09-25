import React from 'react';
import './Hero.css';
import perrito from "../../Img/img-hero.png";


const Hero = () => {
    return (

        <main className='main'>
            <article className='hero' id='hero'>
                <div className='hero_container'>
                    <section className='hero_info-container'>
                        <h1 className='hero_info-title'> Salud y bienestar para tu mascota </h1>
                        <p className='hero_info-paragraph'> Contamos con movilidad para transporte </p>
                        <div className='hero_info-link-container'>
                            <button href="#" className='hero_info-link--colorbg'> Contáctanos </button>
                            <button href="#" className='hero_info-link'> Adopta </button>
                        </div>
                    </section>
                    <div className='hero_img-container'>
                        <img src={perrito} width="300" height="300" alt="mascota" className='hero_img-mascota' />
                    </div>
                </div>
            </article>



        </main>

        );
    }
export default Hero;