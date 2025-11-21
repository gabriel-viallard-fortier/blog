export default function LoginForm () {
    return (
        <div className="flex flex-col p-15 place-items-center">
            <form className="w-90" action="">
                <fieldset className="grid p-10 border-8 bg-blue-500 gap-3">
                    <legend className="text-2xl p-5 bg-white text-black">Connectez-vous</legend>

                    <label htmlFor="username">Nom d'utilisateur</label>
                    <input className="p-1 bg-blue-100 text-black" type="text" id="username" name="username"/>

                    <label htmlFor="password">Mot de passe</label>
                    <input className="p-1 bg-blue-100 text-black" type="password" />

                    <button className="hover:bg-yellow-700" type="submit">S'inscrire</button>
                </fieldset>
            </form>
        </div>
    );
}