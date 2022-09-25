import './Footer.css';

const Footer=()=>{
    return(
        <div className='contenedor-hidden'>
            

            

            <footer className='footer-principal'>
                <div className='footer-limit'>
                    <div className="flex-footer">
                        <div className="contactese-con">
                            <h2 className="text-center menu-contactese">Contáctanos</h2>
                            <nav className="list-footer">
                                <li>Santiago de Surco 386</li>
                                <li>8:00 am  - 8:00 pm</li>
                                <li>(+51) 982137382</li>
                                <li>vetclinic@gmail.com</li>
                            </nav>
                            <div className="mapa-veterinaria">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.699548225094!2d-77.00754848435562!3d-12.132697923333795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b806c287fc85%3A0x788292c975bfb253!2sCl%C3%ADnica%20Veterinaria%20Surco!5e0!3m2!1ses-419!2spe!4v1663273102740!5m2!1ses-419!2spe" 
                                    width="1024" 
                                    height="350" 
                                    style={{border:0}}
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade">                                
                                </iframe>
                            </div>
                        </div>

                        <div className="enlaces-container contenedor">
                            <div className="panda">                                                                            
                            </div>
        
                            <div className="enlaces-servicios">                        
                                <nav className="ancor-footer">
                                    <a href="#">Servicios</a>
                                    <a href="#">Doctores</a>
                                    <a href="#">Quienes Somos</a>
                                    <a href="#">Preguntas</a>
                                    <a href="#">Opiniones</a>
                                </nav>
                            </div>
                            <div>                        
                                <nav className="ancor-iconos">
                                    <a href="#">
                                        <i className="bi bi-facebook"></i>
                                    </a>                            
                                    <a id="instagram" href="#">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                    <a id="twitter" href="#">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                    <a id="twitter" href="#">
                                        <i className="bi bi-telegram"></i>
                                    </a>                            
                                </nav>
                            </div>   
                        </div>
                        <div className='copyright'>
                            <p className="copyright-info ">2022. Todos los derechos reservados. Consentimiento
                            para el tratamiento de datos.
                            </p>
                        </div>
                       
                    </div>
                    
                </div>
            </footer>
        </div>        
    )
}
export default Footer;