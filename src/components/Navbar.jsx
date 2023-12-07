import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

import '../assets/css/navbar.css'

import logoHorizontalSecondary250 from '../assets/img/logo/logo-horizontal-secondary-250.png'
import logoHorizontalSecondary200 from '../assets/img/logo/logo-horizontal-secondary-200.png'

const Navbar = () => {

    const [isNavHidden, setIsNavHidden] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (prevScrollPos > currentScrollPos) {
                if (isNavHidden) {
                    navBar.style.transform = 'translateY(0)';
                    setIsNavHidden(false);
                }
            } else {
                if (!isNavHidden) {
                    navBar.style.transform = 'translateY(-100%)';
                    setIsNavHidden(true);
                }
            }
            setPrevScrollPos(currentScrollPos);
        };

        const navBar = document.querySelector('nav');
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isNavHidden, prevScrollPos,]);

    const isLinkActive = (path) => {
        return location.pathname === path;
    };
    
    return (

        <div class="header">
            <nav>
                <div class="d-none d-sm-block text-center">
                    <div class="bg-1 p-3">
                        <img src={logoHorizontalSecondary250}/>
                    </div>
                    <div class="bg-2 p-2 white fw-bold border-a">
                        <Link to="/" className={`nav-button ${isLinkActive('/') ? 'primary' : 'white'} text-decoration-none p-3`}>Inicio</Link>
                        <Link to="/productos" className={`nav-button ${isLinkActive('/productos') ? 'primary' : 'white'} text-decoration-none p-3`}>Productos</Link>
                        <Link to="/sucursales" className={`nav-button ${isLinkActive('/sucursales') ? 'primary' : 'white'} text-decoration-none p-3`}>Sucursales</Link>
                        <Link to="/quienes-somos" className={`nav-button ${isLinkActive('/quienes-somos') ? 'primary' : 'white'} text-decoration-none p-3`}>Quienes somos</Link>
                        <Link to="/contacto" className={`nav-button ${isLinkActive('/contacto') ? 'primary' : 'white'} text-decoration-none p-3`}>Contacto</Link>
                    </div>
                </div>

                <div class="d-block d-sm-none">
                    <div class="bg-1 p-3">
                        <img src={logoHorizontalSecondary200} class="img-2"/>
                        <button id="button-2" class="secondary float-end border border-0 bg-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-menu" aria-controls="offcanvas-menu">
                            <i class="bi bi-list" style={{ fontSize: "40px" }}></i>
                        </button>
                    </div>
                    <div class="bg-2 p-1 border-a"></div>
                </div>
            </nav>
            <div class="offcanvas offcanvas-start " tabindex="-1" id="offcanvas-menu" aria-labelledby="offcanvasLabel" style={{ zIndex: '9999' }}>
                <div class="offcanvas-header bg-1">
                    <h4 class="offcanvas-title fw-bold secondary ps-3" id="offcanvasLabel">Menú</h4>
                    <button id="button-2" class="border border-0 secondary bg-1" type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i class="bi bi-x" style={{ fontSize: "30px" }}></i>
                    </button>
                </div>
                <div class="offcanvas-body bg-footer-3 d-flex flex-column fw-bold" data-bs-dismiss="offcanvas" aria-label="Close">
                    <Link to="/" class="nav-button-2 white text-decoration-none p-3">Inicio</Link>
                    <Link to="/productos" class="nav-button-2 white text-decoration-none p-3">Productos</Link>
                    <Link to="/sucursales" class="nav-button-2 white text-decoration-none p-3">Sucursales</Link>
                    <Link to="/quienes-somos" class="nav-button-2 white text-decoration-none p-3">Quienes somos</Link>
                    <Link to="/contacto" class="nav-button-2 white text-decoration-none p-3">Contacto</Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar