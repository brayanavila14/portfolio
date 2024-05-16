import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Contact() {
    return (
        <section id="contacto">
            <p>Puedes contactarme en:</p>
            <div>
                <a href="mailto:brayandavidavilaorozco@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>{" "}
                <a href="tel:+573015658710">
                    <FontAwesomeIcon icon={faPhone} />
                </a>{" "}
                <a
                    href="https://www.linkedin.com/in//brayan-avila-1223bb26b/"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>{" "}
                <a href="https://www.github.com/brayanavila14/" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </section>
    );
}
export default Contact;
