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
        </body>
    )
}
export default Home