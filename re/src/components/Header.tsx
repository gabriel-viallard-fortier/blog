import Navbar from "./Navbar";

export default function Header() {

    return (
        <div className="w-full md:w-screen lg:w-screen flex flex-col bg-sky-300 place-items-center font-bold">
                <img className="logo-gaaab" src="/logo.jpg" alt="logo du Gaaab" />
                <h1 className="m-auto text-black text-4xl" >Le blog du Gab</h1>
                <Navbar />
        </div>
    );
}