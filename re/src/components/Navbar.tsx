import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <>
        <ul className="flex p-15 gap-5 text-2xl text-yellow-900">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/articles">Articles</NavLink>
            <NavLink to="/articles/new">Créer un article</NavLink>
            <NavLink to="/register">S'inscrire</NavLink>
            <NavLink to="/login">Se connecter</NavLink>
        </ul>
        </>
    );
}