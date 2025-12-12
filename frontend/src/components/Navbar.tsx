import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <>
        <ul className="flex p-15 gap-5 text-2xl text-yellow-900 items-center">
            <li className="bg-yellow-200/70 active:bg-yellow-700/70 border rounded-xl p-4">
                <NavLink to="/">Accueil</NavLink>
            </li>
            <li className="bg-yellow-200/70 active:bg-yellow-700/70 border rounded-xl p-4">
                <NavLink to="/articles">Articles</NavLink>
            </li>            
            <li className="bg-yellow-200/70 active:bg-yellow-700/70 border rounded-xl p-4">
                <NavLink to="/register">S'inscrire</NavLink>
            </li>
            <li className="bg-yellow-200/70 active:bg-yellow-700/70 border rounded-xl p-4">
                <NavLink to="/login">Se connecter</NavLink>
            </li>
        <span className="bg-yellow-200/70 active:bg-yellow-700/70 border rounded-xl p-4  m-auto">
            <NavLink to="/articles/new">Créer un article</NavLink>
        </span>
            
        </ul>
        </>
    );
}