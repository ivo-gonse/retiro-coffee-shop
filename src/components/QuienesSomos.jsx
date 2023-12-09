import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/css/styles.css'
import '../assets/css/quienes-somos.css'

import cafeteriaOld from "../assets/img/other/cafeteria-old.jpg"

const QuienesSomos = () => {
    return (
        <body>
    
            <div id="bg-banner-quienes-somos" class="banner-1 bg-img-1 d-flex flex-column align-items-center justify-content-center fw-bold fst-italic">
                <h2 class="white">Quienes somos</h2>
            </div>

            <div class="content-1 bg-white d-flex flex-column justify-content-center align-items-center py-5 px-5">
            <h4 class="black fw-bold mb-4 w-100 text-center">Nuestra historia</h4>
            <p class="black w-100 mt-3">
                Bienvenidos a Retiro Coffee Shop, un rincón acogedor y lleno de historia ubicado en el corazón de Buenos Aires. Nuestra historia se remonta a los años 20, 
                cuando la ciudad estaba en pleno auge de construcción de las vías de la estación Retiro. Fue en este contexto que nació nuestra querida cafetería.
            </p>
            <p class="black w-100">
                En 1923, mientras las vías se extendían y la ciudad cobraba vida, un grupo de trabajadores de la construcción se reunía diariamente en una pequeña carpa al 
                lado de la obra. Eran tiempos difíciles, y el estruendo de las máquinas y el polvo de la construcción eran su compañía constante. Pero, para sobrellevar 
                las largas jornadas de trabajo, surgió una idea brillante: ¿por qué no disfrutar de una buena taza de café juntos?
            </p>
            <p class="black w-100">
                Fue así como Retiro Coffee Shop tomó vida. En medio de la tumultuosa obra, nuestra pequeña carpa se convirtió en un refugio de camaradería y delicioso café. 
                Los obreros, con sus manos ásperas y rostros cansados, encontraron en Retiro Coffee Shop un lugar donde recargar energías y compartir historias de sus días 
                en la construcción.
            </p>
            <p class="black w-100">
                A medida que los años pasaron, nuestra cafetería creció y se convirtió en un ícono del barrio. Nuestro café, preparado con gran pasión y cuidado, se ganó 
                el corazón de los porteños. La esencia de la época dorada de la construcción de Retiro se mantuvo viva en cada taza de café servida.
            </p>
            <p class="black w-100">
                Hoy en día, Retiro Coffee Shop cuenta con cinco acogedores locales en diferentes partes de Buenos Aires, pero nuestra alma sigue siendo la misma. Nos 
                enorgullece ser un punto de encuentro para amigos, familias y viajeros que desean disfrutar de una taza de café excepcional y sumergirse en la rica historia 
                de nuestra ciudad.
            </p>
            <p class="black w-100">
                Nuestro compromiso con la calidad, la tradición y el espíritu comunitario perdura. En cada taza de café que preparamos, en cada sonrisa que compartimos, y 
                en cada rincón de nuestra cafetería, encontrarás un pedazo de la historia de Retiro y el espíritu de Buenos Aires.
            </p>

            <img id="img-cafeteria" class="py-5" src={cafeteriaOld}/>
            <Link id="volver" to="/" class="volver-al-menu text-decoration-none secondary d-flex justify-content-center align-items-center">
                <p id="no-margin" class="volver-al-menu fw-bold pe-2">Volver al menú principal</p>
                <i class="bi bi-arrow-left-circle fw-bold"></i>
            </Link>
            <div class="p-2"></div>

            </div>

        </body>
    )
}
export default QuienesSomos