import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import type { ArticleType } from '../pages/ArticlePage';
import { toast } from 'sonner';
import Editor from 'react-simple-wysiwyg';

function ArticleEdit() {
    
    let navigate = useNavigate();
    
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams<{ id: string }>();

    const [oldArticle, setOldArticle] = useState<ArticleType>(
        {
            id: `${id}`,
            title: "",
            author: "",
            content: "",
            description: "",
            image: "",
            categoryName: "",
            likeCount: 0,
        });
    
    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:3000/articles/${id}`)
            .then((response) => response.json())
            .then((data) => setOldArticle(data))
            .finally(() => setIsLoading(false))
        }, [id]);

    function handleSubmit(event: { preventDefault: () => void; }) {

        event.preventDefault();
        setError(null);

        fetch(`http://localhost:3000/articles/${id}`, {
            method: "PUT",
            body: JSON.stringify(oldArticle),
            headers: {
                "Content-Type": "application/json",
                },
            })
            .then((res) => {
                if (!res.ok) throw new Error(`Erreur HTTP: ${res.status}`);
            })
            .then(() => {
                    toast("Article édité correctement");
                    setTimeout(() => navigate('/articles'), 1000)

            })
            .catch((err) => setError(err.message))
    }
  return (
    <>
            <div className="w-full">

            {/* Formulaire d'édition de post */}
            <form onSubmit={handleSubmit}>
                <fieldset className='m-20 p-10 border rounded-2xl grid grid-cols-5 gap-4 bg-yellow-200/70'>

                    <legend className="p-4 text-2xl">Édition de l'article</legend>

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
                        value={oldArticle.title}
                        className="bg-sky-300/70 col-span-3 col-start-3 p-2 border rounded-xl "
                        onChange={(e) => setOldArticle({ ...oldArticle, title: e.target.value })}
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
                        value={oldArticle.author}
                        className="bg-sky-300/70 col-span-3 col-start-3 p-2 border rounded-xl"
                        onChange={(e) => setOldArticle({ ...oldArticle, author: e.target.value })}
                        />

                    {/* Contenu */}
                    <label
                        className="col-span-2"
                        htmlFor="editor">
                        Saisissez le contenu de l'article
                    </label>


                    <div className="bg-sky-300/70 col-span-3 col-start-3 p-2 border rounded-xl">
                        <Editor value={oldArticle.content} onChange={(e) => setOldArticle({ ...oldArticle, content: e.target.value })}/>
                    </div>


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
                        value={oldArticle.categoryName}
                        onChange={(e) => setOldArticle({ ...oldArticle, categoryName: e.target.value })}
                        className="bg-sky-300/70 col-span-3 col-start-3 p-2 border rounded-xl"
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
                        value={oldArticle.description}
                        className="bg-sky-300/70 col-span-3 col-start-3 p-2 border rounded-xl"
                        onChange={(e) => setOldArticle({ ...oldArticle, description: e.target.value })}
                        />

                    {/* image */}
                    <label
                        className="col-span-2"
                        htmlFor="postImgInput">
                        Choisissez une image
                    </label>
                    <input
                        className='bg-sky-300/70 col-span-3 col-start-3 p-2 border rounded-xl'
                        type="file"
                        id="postImgInput"
                        name="postImgInput"
                        onChange={(e) => setOldArticle({ ...oldArticle, image: e.target.value })} />

                    <button
                        className='bg-sky-300 hover:bg-sky-500 col-start-3 col-span-3 p-2 m-auto w-50 border'
                        type="submit">
                        Envoyer
                    </button>
                </fieldset>
            </form>
        </div>
    </>
  )
}

export default ArticleEdit