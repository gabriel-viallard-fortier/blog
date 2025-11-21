import { useState } from "react"
import type { ArticleType } from "../pages/ArticlePage"
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function ArticleCreate() {

    let navigate = useNavigate();
    
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [newArticle, setNewArticle] = useState<ArticleType>(
        {
            title: "",
            author: "",
            content: "",
            description: "",
            image: "/logo.jpg",
            categoryName: "",
            likeCount: 0,
        });

    function handleSubmit(event: { preventDefault: () => void; }) {

        event.preventDefault();
        setIsLoading(true);
        setError(null);

        fetch("http://localhost:3000/articles", {
            method: "POST",
            body: JSON.stringify(newArticle),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error("Erreur serveur");
                return res.json();
            })
            .then(() => {
                toast("Article créé correctement");
                setTimeout(() => navigate('/articles'), 1000)
            })
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));

        }

        if(isLoading) return (<h2>Chargement en cours</h2>);
        if(error) return (<h2>Erreur : {error}</h2>);

        return (
            <div className="w-full">
            {/* Formulaire d'ajout de post */}
            <form onSubmit={handleSubmit}>
                <fieldset className='bg-yellow-200/70 m-20 p-10 border grid grid-cols-5 gap-4'>


                    <legend className="p-4 text-2xl">Nouvel article</legend>

                    {/* Titre */}
                    <label
                        className="col-span-2"
                        htmlFor="postTitleInput"
                    >
                        Entrez un titre pour l'article
                    </label>
                    <input
                        type="text"
                        id="postTitleInput"
                        name="postTitleInput"
                        placeholder="Titre du post"
                        value={newArticle.title}
                        className="col-span-3 col-start-3 p-2 border"
                        onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
                    />

                    {/*Author */}
                    <label
                        className="col-span-2"
                        htmlFor="postAuthorInput"
                    >
                        Saisissez votre blaze
                    </label>
                    <input
                        type="text"
                        id="postAuthorInput"
                        name="postAuthorInput"
                        placeholder="Auteur du post"
                        value={newArticle.author}
                        className="col-span-3 col-start-3 p-2 border"
                        onChange={(e) => setNewArticle({ ...newArticle, author: e.target.value })}
                    />

                    {/* Contenu */}
                    <label
                        className="col-span-2"
                        htmlFor="postContentInput">
                        Saisissez le contenu de l'article
                    </label>
                    <textarea
                        className="col-span-3 col-start-3 p-2 border"
                        id="postContentInput"
                        name="postContentInput"
                        value={newArticle.content}
                        onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
                    >
                    </textarea>

                    {/* Catégorie */}
                    <label
                        className="col-span-2"
                        htmlFor="postCategoryInput"
                    >
                        Entrez la catégorie de l'article
                    </label>
                    <input
                        type="text"
                        id="postCategoryInput"
                        name="postCategoryInput"
                        placeholder="Catégorie du post"
                        value={newArticle.categoryName}
                        onChange={(e) => setNewArticle({ ...newArticle, categoryName: e.target.value })}
                        className="col-span-3 col-start-3 p-2 border"
                    />


                    {/* Description */}
                    <label
                        htmlFor="postDescription"
                        className="col-span-2">
                        Description
                    </label>
                    <input
                        type="text"
                        placeholder="Description de l'article"
                        value={newArticle.description}
                        className="col-span-3 col-start-3 p-2 border"
                        onChange={(e) => setNewArticle({ ...newArticle, description: e.target.value })}
                    />

                    {/* image */}
                    <label
                        className="col-span-2"
                        htmlFor="postImgInput">
                        Choisissez une image
                    </label>
                    <input
                        className='col-span-3 col-start-3 p-2 border'
                        type="file"
                        id="postImgInput"
                        name="postImgInput"
                        onChange={(e) => setNewArticle({ ...newArticle, image: e.target.value })} />

                    <button
                        className='bg-sky-200/40 col-start-3 col-span-3 p-2 m-auto w-50 border'
                        type="submit">
                        Envoyer
                    </button>
                </fieldset>
            </form>
        </div>
    )

}
