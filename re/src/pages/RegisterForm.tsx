export default function RegisterForm() {
    return (
        <div className="flex flex-col p-15 place-items-center">
            <form action="">

                <fieldset className="grid p-10 border-8 bg-blue-500 gap-3">
                    <legend className="text-2xl bg-white text-black">Créez votre compte</legend>

                    <label htmlFor="username">Nom d'utilisateur</label>
                    <input className="p-1 bg-blue-100 text-black" type="text" id="username" name="username"/>

                    <label htmlFor="password">Mot de passe</label>
                    <input className="p-1 bg-blue-100 text-black" type="password" />

                    <label htmlFor="passwordVerification">Confirmez le mot de passe</label>
                    <input className="p-1 bg-blue-100 text-black" type="password" id="passwordVerification" name="passwordVerification"/>

                    <button className="hover:bg-yellow-700" type="submit">S'inscrire</button>
                </fieldset>
            </form>
        </div>
    );
}