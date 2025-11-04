import { Outlet } from "react-router";
import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <ul className="flex p-15 gap-5 text-3xl">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/articles">Articles</NavLink>
            <NavLink to="/login">Se connecter</NavLink>
            <NavLink to="/register">S'inscrire</NavLink>
            <Outlet />
        </ul>
    );
}