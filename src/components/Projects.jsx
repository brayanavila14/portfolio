import { PropTypes } from "prop-types";
import Portafolio from "../assets/img/portafolio.png";
import TicTacToe from "../assets/img/tic-tac-toe.png";
import MouseFollower from "../assets/img/mouse-follower.png";
import "../assets/styles/Projects.css"
function Project({ title, img, children }) {
    return (
        <div className="projects">
            <div className="project" style={{ padding: "20px" }}>
                <img
                    src={img}
                    alt={title}
                    style={{ border: "1px rgb(110, 170, 220) solid", borderRadius: "20px"}}
                />
                <div>
                    <h2>{title}</h2>
                    <p>{children}</p>
                </div>
            </div>
            <hr />
        </div>
    );
}
Project.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    img: PropTypes.string,
};
function Projects() {
    return (
        <section id="proyectos">
            <h1>Proyectos</h1>
            <Project title="Portafolio" img={Portafolio}>
                Un portafolio personal desarrollado en React para mostrar mi trabajo,
                habilidades y experiencia.
            </Project>
            <Project title="Tic Tac Toe" img={TicTacToe}>
                Una versión del clásico juego de tres en raya desarrollada en React
            </Project>
            <Project title="Mouse follower" img={MouseFollower}>
                Una aplicación divertida que sigue el movimiento del mouse desarrollada
                en React.
            </Project>
        </section>
    );
}
export default Projects;
