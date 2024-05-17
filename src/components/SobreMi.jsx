import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
    faCss3,
    faReact,
    faJs,
    faPhp,
    faLaravel,
    faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import MyPhoto from "../assets/img/my-photo.jpg";
function SobreMi() {
    return (
        <section id="sobre-mi">
            <h1>¿Quien soy?</h1>
            <div>
                <img src={MyPhoto} alt="Brayan David Avila Orozco" />
                <p>
                    ¡Hola! Soy <strong>Brayan David Avila Orozco</strong>, un apasionado
                    del desarrollo de software, originario de Montería, Colombia. A mis 17
                    años, llevo cinco años involucrado en la gestión de un negocio
                    familiar, una experiencia que me ha brindado una visión única de los
                    desafíos empresariales.
                    <br />
                    Mi verdadera pasión radica en el desarrollo web, un camino que comencé
                    a explorar hace seis meses. Desde entonces, he descubierto un mundo
                    fascinante donde la tecnología se convierte en una herramienta
                    transformadora. Mi enfoque se centra en fusionar la innovación
                    tecnológica con la eficiencia operativa, buscando constantemente
                    maneras de mejorar y agilizar los procesos empresariales.
                    <br />
                    Estoy comprometido con un constante camino de aprendizaje, siempre
                    buscando adquirir nuevas habilidades y conocimientos para mejorar mis
                    capacidades como desarrollador web. Mi objetivo es utilizar la
                    tecnología como motor para impulsar el crecimiento y la eficiencia en
                    el mundo del desarrollo de software.
                    <br />
                    Estoy emocionado por todo lo que está por venir en mi viaje en el
                    desarrollo web. Cada día es una oportunidad para aprender y crecer, y
                    estoy ansioso por enfrentar nuevos desafíos y contribuir al mundo del
                    software con soluciones innovadoras y eficientes.
                </p>
            </div>
            <hr />
            <div>
                <h2>Formación</h2>
                <p>
                    Me gradué del colegio <strong> La Ribera </strong>en Montería,
                    Córdoba, donde obtuve mi título de bachiller. Además, he completado un
                    curso técnico en programación de software en el{" "}
                    <strong> Sena </strong>. Actualmente, me dedico al autoaprendizaje
                    para mejorar continuamente y adquirir las mejores prácticas en el
                    desarrollo de software web.
                    <br />
                    Mi formación incluye un técnico en desarrollo de software en el Sena y
                    un complementario en desarrollo web con PHP. Durante el último año, he
                    dedicado tiempo al estudio independiente, profundizando en temas
                    relacionados con el desarrollo de software y la tecnología web.
                    <br />
                    Estas experiencias educativas y de aprendizaje autodidacta me han
                    proporcionado una base sólida en el campo del desarrollo de software,
                    permitiéndome avanzar y crecer profesionalmente en este emocionante y
                    dinámico ámbito.
                </p>
            </div>
            <hr />
            <div>
                <h2>Mis Habilidades</h2>
                <p>
                    con experiencia en PHP, CSS, JavaScript y MySQL. Mi enfoque se centra
                    en crear experiencias digitales únicas y funcionales. Con no más de 1
                    año de práctica en el desarrollo web, he trabajado con lenguajes y
                    herramientas clave para construir sitios web dinámicos y atractivos.
                    Mi habilidad para utilizar plataformas como GitHub como repositorio
                    demuestra mi compromiso con las mejores prácticas de desarrollo y
                    control de versiones. Pero mi interés no se limita solo al código.
                    También tengo experiencia en el mundo empresarial, con habilidades en
                    administración, comunicación y resolución de problemas. Esta
                    combinación me permite no solo crear soluciones técnicas, sino
                    comprender cómo estas se alinean con los objetivos comerciales. Mi
                    objetivo es fusionar mis conocimientos técnicos con mi comprensión
                    empresarial para optimizar procesos y mejorar la eficiencia. Siempre
                    busco nuevas oportunidades para aplicar la tecnología y el diseño a
                    desafíos empresariales.
                    <br />
                    <br />
                    <FontAwesomeIcon icon={faCss3} /> CSS{" "}
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={farStar} />{" "}
                    <FontAwesomeIcon icon={faJs} /> JavaScript{" "}
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={farStar} />{" "}
                    <FontAwesomeIcon icon={faReact} /> React{" "}
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={farStar} />
                    <FontAwesomeIcon icon={farStar} />{" "}
                    <FontAwesomeIcon icon={faPhp} /> PHP{" "}
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={farStar} />
                    <FontAwesomeIcon icon={farStar} />{" "}
                </p>
            </div>
        </section>
    );
}
export default SobreMi;
