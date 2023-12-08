import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/css/styles.css'
import '../assets/css/productos.css'

import product1 from '../assets/img/products/product-1.png'
import product2 from '../assets/img/products/product-2.png'
import product3 from '../assets/img/products/product-3.png'
import product4 from '../assets/img/products/product-4.png'
import product5 from '../assets/img/products/product-5.png'
import product6 from '../assets/img/products/product-6.png'

const products = [
    {
        image: product2,
        name: "Café Arabica",
        grams: "300",
        price: "6500"
    },{
        image: product3,
        name: "Café Robusta",
        grams: "400",
        price: "7000"
    },{
        image: product4,
        name: "Café Molido",
        grams: "400",
        price: "6300"
    },{
        image: product6,
        name: "Café Tostado",
        grams: "300",
        price: "6000",
    },{
        image: product1,
        name: "Café Orgánico",
        grams: "400",
        price: "8000"
    },{
        image: product5,
        name: "Café Descafeinado",
        grams: "400",
        price: "5300"
    }
]

const Productos = () => {
    return (
        <body>
            
            <div id="bg-banner-productos" class="banner-1 bg-img-1 d-flex flex-column align-items-center justify-content-center fw-bold fst-italic">
            <h2 class="white">Productos</h2>
            </div>

            <div class="bg-white d-flex flex-column justify-content-center align-items-center text-center py-2 px-2">
                <h4 class="black fw-bold my-4 my-sm-5 mx-3">¡Recordá que contamos con envios a todo el país!</h4>
                
                <div id="productos" class="row row-cols-1 row-cols-md-2">

                    {
                        products.map(product=>{
                            return(
                                <div class="col d-flex align-items-center justify-content-center text-center my-3 my-sm-4">
                                    <div>
                                        <img src={product.image} class="img-product-2"/>
                                    </div>
                                    <div class="card-description-2 bg-4 d-flex flex-column justify-content-center">
                                        <p class="name pb-1"><strong>{product.name}</strong><br/><span class="grams">{product.grams}g</span></p>
                                        <div class="pt-sm-1 pb-1 pb-sm-2 d-flex justify-content-center">
                                            <div class="fw-bold fst-italic">~</div>
                                            <div class="fw-bold fst-italic px-1">{product.price}$</div>
                                            <div class="fw-bold fst-italic">~</div>
                                        </div>
                                        <div>
                                            <div class="d-flex justify-content-center">
                                                <button class="bg-4 d-flex align-items-center justify-content-center button-product secondary ">
                                                    <i class="bi bi-cart-plus fw-bold pe-1"></i>
                                                    <p>Agregar al carrito</p>
                                                </button>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-center">
                                                <button class="bg-4 d-flex align-items-center justify-content-center button-product secondary ">
                                                    <i class="bi bi-info-circle fw-bold pe-1"></i>
                                                    <p>Detalles</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <button id="carrito-button" class="button button-hover fw-bold mt-4 mb-3">Ver carrito</button>
                <Link id="volver" to="/" class="volver-al-menu text-decoration-none secondary d-flex justify-content-center align-items-center mb-4 mb-sm-5">
                    <p id="no-margin" class="volver-al-menu fw-bold pe-2">Volver al menú principal</p>
                    <i class="bi bi-arrow-left-circle fw-bold"></i>
                </Link>
                <div class="p-3"></div>
                
            </div>
        </body>

    )
}
export default Productos