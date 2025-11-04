import gabLogo from '/logo.jpg';
import Navbar from "./Navbar";

export default function Header() {

    return (
        <div className="w-screen bg-black place-items-center font-bold">
                <img className="logo-gaaab" src={gabLogo} alt="logo du Gaaab" />
                <h1 className="text-orange-500" >Le blog du Gab</h1>
                <Navbar />
        </div>
    );
}