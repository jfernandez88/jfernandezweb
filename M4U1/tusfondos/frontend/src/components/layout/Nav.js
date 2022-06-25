import { Link } from "react-router-dom";
const Nav = (props) => {
    return (
        <nav>
            <ul className="holder">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/NoticiasPage">Noticias</Link></li>
                <li><Link to="/FondosPage">Fondos</Link></li>
                <li><Link to="/NosotrosPage">Nosotros</Link></li>
                <li><Link to="/ContactoPage">ContactoPage</Link></li>

            </ul>

        </nav>
    );
}

export default Nav;