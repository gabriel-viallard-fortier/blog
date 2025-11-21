import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center p-45 justify-center">
            <h1 className="text-4xl font-bold p-5">Erreur 404</h1>
            <p className="text-lg p-5">La page que vous cherchez est introuvable</p>
            <Link to="/" className="mt-4 text-blue-500 hover:underline">Go back to Home</Link>
        </div>
    );
}