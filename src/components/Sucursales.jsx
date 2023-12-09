import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/css/styles.css'
import '../assets/css/sucursales.css'

import sucursal1 from '../assets/img/other/sucursal-1.jpg'
import sucursal2 from '../assets/img/other/sucursal-2.jpg'
import sucursal3 from '../assets/img/other/sucursal-3.jpg'
import sucursal4 from '../assets/img/other/sucursal-4.jpg'

const sucursales = [
    {
        image: sucursal1,
        location: "Retiro",
        adress: "Av. Juncal 708, CABA",
        telephoneNumber: "4785-2435"
    },{
        image: sucursal2,
        location: "Belgrano",
        adress: "Mendoza 2848, CABA",
        telephoneNumber: "4511-2180"
    },{
        image: sucursal3,
        location: "Vicente López",
        adress: "Tapiales 1148, Bs As",
        telephoneNumber: "4244-1967"
    },{
        image: sucursal4,
        location: "Martínez",
        adress: "Av. Gral. Alvear 434, Bs As",
        telephoneNumber: "4797-4452"
    },
]

const Sucursales = () => {
    return (
        <body>
    
            <div id="bg-banner-sucursales" class="banner-1 bg-img-1 d-flex flex-column align-items-center justify-content-center fw-bold fst-italic">
                <h2 class="white">Sucursales</h2>
            </div>

            <div class="bg-white d-flex flex-column justify-content-center align-items-center text-center py-2 px-2">
                <h4 class="black fw-bold mt-5 mb-3 mb-sm-5 mx-3">¡Recordá que contamos con envios a todo el país!</h4>
            
                <div id="sucursales" class="row row-cols-1 row-cols-lg-2">
                
                    {
                        sucursales.map(sucursal=>{
                            return(
                                <div class="d-flex flex-column align-items-center justify-content-center px-2 px-sm-4 px-xl-5 mb-4 mb-sm-5">
                                    <div>
                                        <img src={sucursal.image} class="img-sucursal-1"/>
                                    </div>
                                    <div class="card-description-1 bg-4 p-4">
                                        <h4 class="mt-4 pt-4 mb-4 fw-bold location">{sucursal.location}</h4>
                                        <div class="d-flex secondary">
                                        <i class="px-2 bi bi-geo-alt-fill"></i>
                                        <p>{sucursal.adress}</p>
                                        </div>
                                        <div class="d-flex secondary">
                                        <i class="px-2 bi bi-telephone-fill"></i>
                                        <p>{sucursal.telephoneNumber}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
              
                </div>

                <p id="horarios" class="black mt-2 mt-sm-3 mx-3 fw-bold">Horarios: Todos los días de 9am - 7pm</p>
                <Link id="volver" to="/" class="volver-al-menu text-decoration-none secondary d-flex justify-content-center align-items-center mb-4 mb-sm-5">
                    <p id="no-margin" class="volver-al-menu fw-bold pe-2">Volver al menú principal</p>
                    <i class="bi bi-arrow-left-circle fw-bold"></i>
                </Link>
                <div class="p-3"></div>

            </div>

        </body>
    )
}
export default Sucursales