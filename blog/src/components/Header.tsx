import gabLogo from '/logo.jpg';
import { Outlet } from "react-router";
import { NavLink } from "react-router";


export default function Header() {

    return (
        <div className="w-screen bg-black place-items-center font-bold">
                <img className="logo-gaaab" src={gabLogo} alt="logo du Gaaab" />
                <h1 className="text-white" >Le blog du Gab</h1>
                <div>
                    <ul className="flex p-15 gap-5 text-3xl">
                        <NavLink to="/home">Accueil</NavLink>
                        <NavLink to="/articles">Articles</NavLink>
                        <Outlet />
                    </ul>
                </div>

        </div>
    );
}