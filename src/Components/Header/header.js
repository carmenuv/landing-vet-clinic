import React from 'react';
import './Header.css';
import logo from "../../Img/logo-vet-clinic.svg";
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  return (

    <header className='header '>
      <div className='container'>
        <nav className="navbar navbar-expand-lg p-3 ">
          <div className="container-fluid ">
            
            <a href="/" className="navbar-brand" onClick={()=>navigate("/")}>
              <img className='header-nav_link-logo' src={logo} alt="Logo Veterinaria" width="134px" height="44px" />
            </a>
            
            <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav " aria-expanded="false" aria-label="Toggle navigation ">
              <span className="navbar-toggler-icon navbar-dark" ></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
              <ul className="navbar-nav nav">
                <li className="nav-item">
                  <a className="nav-link text-white" href="/#servicios">Servicios</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-white" href="/#equipo">Equipo</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/#testimonios">Testimonios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#contacto">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>



  );
}
export default Header;