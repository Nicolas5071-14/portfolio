// components/Header.jsx
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">À propos</Link>
                <Link to="/projects">Projets</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}