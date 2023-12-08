import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import '../assets/css/styles.css'
import '../assets/css/contacto.css'

import contact from '../assets/img/other/contact.jpg'

const Contacto = () => {

    useEffect(() => {
        const nameInput = document.getElementById('name-input');
        const emailInput = document.getElementById('email-input');
        const consultaInput = document.getElementById('consulta-input');
        const clearButton = document.getElementById('clear-button-contacto');

        clearButton.addEventListener('click', () => {
            nameInput.value = '';
            emailInput.value = '';
            consultaInput.value = '';
        });

        return () => {
            clearButton.removeEventListener('click', () => {
                nameInput.value = '';
                emailInput.value = '';
                consultaInput.value = '';
            });
        };
    }, []);

    return (
        <body>
            <div id="bg-banner-contacto" class="banner-1 bg-img-1 d-flex flex-column align-items-center justify-content-center fw-bold fst-italic">
                <h2 class="white">Contacto</h2>
            </div>

            <div class="bg-white d-flex flex-column justify-content-center align-items-center text-center py-2 px-2">
                <h4 class="secondary fw-bold mt-4 mt-sm-5 mb-4 mx-3">Escribinos tus inquietudes</h4>
                <p class="black fw-bold mb-4 mb-sm-5 mx-3">Te responderemos vía mail</p>
                <div id="contact-row" class="row">
                    <div class="col-md-6 bg-4 d-flex flex-column justify-content-around align-items-center p-3 p-lg-4">
                        <input class="input" id="name-input" type="text" placeholder="Nombre"/>
                        <input class="input" id="email-input" type="text" placeholder="Email"/>
                        <textarea class="input" id="consulta-input" type="text" placeholder="Consulta"></textarea>
                        <button id="clear-button-contacto" class="button button-hover fw-bold mt-3 mb-2 mt-lg-4 mb-lg-3">Enviar</button>
                    </div>
                    <div class="col-md-6 d-none d-md-block">
                        <img src={contact} class="contact-img"/>
                    </div>
                </div>
                
                <p class="black mt-4 mt-sm-5 mb-1 mb-sm-2 mx-3">También podes consultarnos a <strong>retirocoffeeshop@gmail.com</strong> o llamandonos:</p>
                
                <div id="telephone-numbers" class='bg-4 d-flex flex-wrap align-items-center justify-content-around pt-2 pb-1 px-3 mt-4 mt-sm-5 mb-4 mb-sm-5'>
                    <p class="tel-name mt-2">Retiro</p>
                    <i class="bi bi-telephone-fill primary"></i>
                    <p class="tel-number primary">4785-2435</p>
                    <p class="tel-name">Belgrano</p>
                    <i class="bi bi-telephone-fill primary"></i>
                    <p class="tel-number primary">4511-2180</p>
                    <p class="tel-name">Vicente López</p>
                    <i class="bi bi-telephone-fill primary"></i>
                    <p class="tel-number primary">4244-1967</p>
                    <p class="tel-name">Martínez</p>
                    <i class="bi bi-telephone-fill primary"></i>
                    <p class="tel-number primary">4797-4452</p>
                </div>

                <Link id="volver" to="/" class="volver-al-menu text-decoration-none secondary d-flex justify-content-center align-items-center mb-4 mb-sm-5">
                    <p id="no-margin" class="volver-al-menu fw-bold pe-2">Volver al menú principal</p>
                    <i class="bi bi-arrow-left-circle fw-bold"></i>
                </Link>
                <div class="p-3"></div>

            </div>
       </body>
    
    )
}
export default Contacto