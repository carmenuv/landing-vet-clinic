import React from 'react';
import './Hero.css';
import perrito from "../../Img/img-hero.png";
import { Servicios } from '../Servicios';
import Form from '../Form/Form';
import AdoptionSection from '../Adoption';
import { Equipo } from '../Equipo/index';
import {Testimonios} from '../Testimonios/index';


const Hero = () => {
    return (

        <div>
            <main className='main' id='hero'>
                <article className='hero'>
                    <div className='hero_container'>
                        <section className='hero_info-container'>
                            <h1 className='hero_info-title'> Salud y bienestar para tu mascota </h1>
                            <p className='hero_info-paragraph'> Amplia experiencia clínica. Contamos con movilidad para transporte </p>
                            <div className='hero_info-link-container'>
                                <a href="#reserva" className='hero_info-link--colorbg'>Agenda una cita</a>
                                <a href="#adopta" className='hero_info-link'> Adopta </a>
                            </div>
                        </section>
                        <div className='hero_img-container'>
                            <img src={perrito} width="300" height="300" alt="mascota" className='hero_img-mascota' />
                        </div>
                    </div>
                </article>
            </main>
            <Servicios/>
            <Equipo/>
            <AdoptionSection/>
            <Form/>
            <Testimonios/>
        </div>

        );
    }
export default Hero;