import React from 'react'
import { Link } from 'react-router-dom';

import '../assets/css/styles.css'

import logoVerticalSecondary150 from '../assets/img/logo/logo-vertical-secondary-150.png'
import logoOnlySecondary50 from '../assets/img/logo/logo-only-secondary-50.png'

const Footer = () => {
    return (
    
        <footer>
            <div class="bg-2 p-2"></div>
            <div class="bg-1 d-flex pt-3 pt-md-4 pb-4 pb-md-5 justify-content-around">

                <div>
                    <img class="mx-3 d-none d-sm-block" src={logoVerticalSecondary150}/>
                    <img class="mx-4 d-block d-sm-none" src={logoOnlySecondary50}/>
                </div>

                <div class="me-sm-5 white d-flex flex-column">
                    <h5 class="fw-bold secondary">Enlaces útiles:</h5>
                    <Link to="/" class="white text-decoration-none">Inicio</Link>
                    <Link to="/productos" class="white text-decoration-none">Productos</Link>
                    <Link to="/sucursales" class="white text-decoration-none">Sucursales</Link>
                    <Link to="/quienes-somos" class="white text-decoration-none">Quienes somos</Link>
                    <Link to="/contacto" class="white text-decoration-none">Contacto</Link>
                </div>

                <div class=" me-sm-5 white d-flex flex-column ">
                    <h5 class="fw-bold secondary">Redes:</h5>
                    <div class="row">
                        <a class="col-1 col-sm-4" href="https://www.instagram.com">
                            <i class="bi bi-instagram white text-decoration-none"></i>
                        </a>
                        <a class="col-1 col-sm-4" href="https://www.twitter.com">
                            <i class="bi bi-twitter white text-decoration-none"></i>
                        </a>
                        <a class="col-1 col-sm-4" href="https://www.m.facebook.com">
                            <i class="bi bi-facebook white text-decoration-none"></i>
                        </a>
                    </div>
                </div>

            </div>
            <div class="bg-footer-3 p-1 secondary text-center">
                <p id="all-rights-reserved">2023 Retiro Coffee Shop  |  All Rights Reserved</p>
            </div>
        </footer>

    )
}
export default Footer