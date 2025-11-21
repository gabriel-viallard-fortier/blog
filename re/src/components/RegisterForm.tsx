export default function RegisterForm() {
    return (
        <div className="flex flex-col p-15 place-items-center">
            <form action="">
                <fieldset className="grid p-10 rounded-2xl border-3 bg-yellow-200/70 gap-3">
                    <legend className="text-2xl p-5 text-black">Inscription</legend>

                    <label htmlFor="username">Nom d'utilisateur</label>
                    <input className="border rounded-xl p-1 bg-blue-300 text-black" type="text" id="username" name="username"/>

                    <label htmlFor="password">Mot de passe</label>
                    <input className="border rounded-xl p-1 bg-blue-300 text-black" type="password" />
                    
                    <label htmlFor="passwordVerification">Confirmez le mot de passe</label>
                    <input className="border rounded-xl p-1 bg-blue-300 text-black" type="password" id="passwordVerification" name="passwordVerification"/>

                    <button className="p-2 w-35 m-auto border-2 rounded-2xl bg-sky-200/70 active:bg-sky-700/70 hover:bg-sky-500" type="submit">S'inscrire</button>
                </fieldset>
            </form>
        </div>
    );
}