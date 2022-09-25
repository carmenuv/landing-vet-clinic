import React from 'react';
import './Header.css';
import logo from "../../Img/logo-vet-clinic.svg";

const Header = () => {
  return (

    <header className='header '>
      <div className='container'>
        <nav className="navbar navbar-expand-lg p-3 ">
          <div className="container-fluid ">
            <a className="navbar-brand " href="#"><img className='header-nav_link-logo' src={logo} alt="Logo Veterinaria" width="12" height="22" />
            </a>
            <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav " aria-expanded="false" aria-label="Toggle navigation ">
              <span className="navbar-toggler-icon navbar-dark" ></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
              <ul className="navbar-nav nav">
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Servicios</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-white" href="#">Staff</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Testimonios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Contacto</a>
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