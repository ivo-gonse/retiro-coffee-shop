import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import '../assets/css/styles.css'
import '../assets/css/home.css'

import productTemplateLg from '../assets/img/products/product-template-lg.png'
import cafeteria1 from '../assets/img/other/cafeteria-1.jpg'
import cafeteria2 from '../assets/img/other/cafeteria-2.jpg'
import cafeteria3 from '../assets/img/other/cafeteria-4.jpg'
import cafeteria4 from '../assets/img/other/cafeteria-3.jpg'
import product2 from '../assets/img/products/product-2.png'
import product4 from '../assets/img/products/product-4.png'
import product3 from '../assets/img/products/product-3.png'
import cafetera from '../assets/background/bg-cafetera.jpg'

const Home = () => {

    useEffect(() => {
        const emailInput = document.getElementById('email-input');
        const clearButton = document.getElementById('clear-button');

        clearButton.addEventListener('click', () => {
            emailInput.value = '';
        });

        return () => {
            clearButton.removeEventListener('click', () => {
                emailInput.value = '';
            });
        };
    }, []);

    return (
        <body>
            <div id="bg-cup" class="section-1 bg-img-1 d-flex flex-column align-items-center justify-content-center fw-bold fst-italic">
                <h2 class="white">Un siglo de</h2>
                <h2 class="white">tradición en</h2>
                <h2 class="white">cada taza</h2>
                <h3 class="secondary">1923 - 2023</h3>
            </div>

            <div class="section-2 row g-0 bg-white">
                <div id="bg-product" class="col-12 offset-lg-1 col-lg-5 d-flex flex-column justify-content-center text-center">
                    <h4 class="black fw-bold mb-4">¡El rico sabor de nuestro<br/>café te está esperando!</h4>
                    <p class="black">Vení a visitarnos o comprá nuestos<br/>productos online.</p>
                    <p class="black">Contamos con envios sin cargo a<br/>todo el país.</p>
                    <Link to="/productos" class="button-hover-secondary secondary d-flex justify-content-center text-decoration-none">
                        <p class="fw-bold fst-italic pe-2">Catálogo</p>
                        <i class="bi bi-box-arrow-up-right fw-bold"></i>
                    </Link>
                </div>
                <div class="col-5 d-none d-lg-block my-auto text-center">
                    <img src={productTemplateLg}/>
                </div>
            </div>

            <div class="section-2 row g-0 bg-2">
                <div class="col-7 d-none d-md-block">
                    <div id="carousel-1" class="carousel slide d-flex justify-content-center text-center">
                        <button class="arrow" type="button" data-bs-target="#carousel-1" data-bs-slide="prev">
                            <i class="bi bi-caret-left-fill white"></i>
                        </button>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={cafeteria1} class="carousel-img"/>
                            </div>
                            <div class="carousel-item">
                                <img src={cafeteria2} class="carousel-img"/>
                            </div>
                            <div class="carousel-item">
                                <img src={cafeteria3} class="carousel-img"/>
                            </div>
                            <div class="carousel-item">
                                <img src={cafeteria4} class="carousel-img"/>
                            </div>
                        </div>
                        <button class="arrow" type="button" data-bs-target="#carousel-1" data-bs-slide="next">
                            <i class="bi bi-caret-right-fill white"></i>
                        </button>
                    </div>
                </div>
                <div class="col-12 col-md-5 d-flex flex-column justify-content-center text-center">
                    <h4 class="primary fw-bold mb-4">Visitá todas nuestras<br />sucursales</h4>
                    <p class="primary">Hoy en día contamos con cuatro<br />locales en diferentes partes de<br />Buenos Aires.</p>
                    <Link to="/sucursales" class="button-hover-white white text-decoration-none d-flex justify-content-center">
                        <p class="fw-bold fst-italic pe-2">Sucursales</p>
                        <i class="bi bi-box-arrow-up-right fw-bold"></i>
                    </Link>
                </div>
            </div>

            <div id="bg-coffee" class="section-2 bg-img-1 d-flex flex-column align-items-center justify-content-center text-center px-4">
                <h4 class="secondary fw-bold mb-4">Conocé más de nosotros</h4>
                <p class="secondary mx-4 d-none d-sm-block py-lg-2" style={{ maxWidth: '900px' }}>
                    Hace ya un siglo que comprometemos nuestra pasión y dedicación en ofrecer productos de 
                    la más alta calidad, una tradición que perdura y en la que seguimos creyendo firmemente.
                </p>
                <p class="secondary mx-4 d-block d-sm-none" style={{ maxWidth: '900px' }}>
                    Hace ya un siglo que comprometemos nuestra pasión y dedicación en ofrecer productos de la más alta calidad.
                </p>
                <p class="secondary mb-lg-4">Enterate más de nuestra historia.</p>
                <Link to="/quienes-somos" class="button-hover-white white text-decoration-none d-flex justify-content-center">
                    <p class="fw-bold fst-italic pe-2">Quienes somos</p>
                    <i class="bi bi-box-arrow-up-right fw-bold"></i>
                </Link>
            </div>

            <div class="section-3 bg-white d-flex flex-column align-items-center justify-content-center text-center">
                <h4 class="black fw-bold mb-2 mb-lg-4 mb-lg-5 w-lg-100 px-3 px-lg-0">Los productos preferidos de nuestros clientes:</h4>
                <div class="d-flex mb-4">
                    
                    <div class="d-flex flex-column align-items-center justify-content-center text-center px-2 px-sm-4 px-xl-5">
                        <div>
                            <img src={product4} class="img-product-1"/>
                        </div>
                        <div class="card-description-1 bg-4">
                            <p class="mt-5 name"><strong>Café Arabica</strong><br/>300g</p>
                            <div class="pt-sm-1 pb-1 pb-sm-2 d-flex justify-content-center mb-2 mb-sm-3">
                                <div class="fw-bold fst-italic">~</div> 
                                <div class="fw-bold fst-italic px-1">6500$</div>
                                <div class="fw-bold fst-italic">~</div>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex flex-column align-items-center justify-content-center text-center px-2 px-sm-4 px-xl-5">
                        <div>
                            <img src={product2} class="img-product-1"/>
                        </div>
                        <div class="card-description-1 bg-4">
                            <p class="mt-5 name"><strong>Café Molido</strong><br/>400g</p>
                            <div class="pt-sm-1 pb-1 pb-sm-2 d-flex justify-content-center mb-2 mb-sm-3">
                                <div class="fw-bold fst-italic">~</div> 
                                <div class="fw-bold fst-italic px-1">6300$</div>
                                <div class="fw-bold fst-italic">~</div>
                            </div>
                        </div>
                    </div>

                    <div class="d-none d-md-block">
                        <div class="d-flex flex-column align-items-center justify-content-center text-center px-2 px-sm-4 px-xl-5">
                            <div>
                                <img src={product3} class="img-product-1"/>
                            </div>
                            <div class="card-description-1 bg-4">
                                <p class="mt-5 name"><strong>Café Robusta</strong><br/>400g</p>
                                <div class="pt-sm-1 pb-1 pb-sm-2 d-flex justify-content-center mb-2 mb-sm-3">
                                    <div class="fw-bold fst-italic">~</div>
                                    <div class="fw-bold fst-italic px-1">7000$</div>
                                    <div class="fw-bold fst-italic">~</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section-2 row g-0 bg-2">
                <div class="col-12 col-md-6 col-lg-5 d-flex flex-column justify-content-center text-center px-5">
                    <h4 class="primary fw-bold mb-4">Contactanos</h4>
                    <p class="primary">¡Estamos a tu dispocición!<br />Ante cualquier duda o consulta<br />escribinos a nuestro mail:</p>
                    <p class="primary fw-bold">retirocoffeeshop@gmail.com</p>
                    <p class="primary">También podes contarnos tus<br />inquietudes aca:</p>
                    <Link to="/contacto" class="button-hover-white white text-decoration-none d-flex justify-content-center">
                        <p class="fw-bold fst-italic pe-2">Contacto</p>
                        <i class="bi bi-box-arrow-up-right fw-bold"></i>
                    </Link>
                </div>
                <div class="col-7 d-none d-lg-block my-auto text-center">
                    <img class="bg-img-2" src={cafetera}/>
                </div>
                <div class="col-6 d-none d-md-block d-lg-none my-auto text-center">
                    <img id="bg-coffee-machine-md" class="bg-img-2" src={cafetera}/>
                </div>
            </div>

            <div id="bg-coffee-bag" class="section-2 bg-img-1 d-flex flex-column align-items-center justify-content-center text-center px-4">
                <h4 class="secondary fw-bold mb-4">¡Suscribite a nuestra Newsletter!</h4>
                <p class="secondary mx-4" style={{ maxWidth: '900px' }}>Dejanos tu mail para estar al tanto de todas nuestras novedades y promociones.</p>
                <div id="email-bar" class="p-1 py-2 py-sm-5">
                    <input type="text" class="input-home" id="email-input" placeholder="Enter your Email" />
                    <button class="button button-hover fw-bold" id="clear-button">Suscribirse</button>
                </div>
            </div>

        </body>
    )
}
export default Home