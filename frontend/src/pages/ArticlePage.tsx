import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Editor, EditorProvider } from 'react-simple-wysiwyg';
import { toast } from 'sonner';
import type { ArticleType } from '../assets/types/ArticleType';


function ArticlePage() {

    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    function ArticleDelete() {

        setIsLoading(true);
        setError(null);

        fetch(`http://localhost:3000/articles/${id}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Impossible de supprimer l’article");
                }
                toast("Article supprimé correctement");
                navigate('/articles');
            })
            .catch((err) => {
                console.error(err);
                setError(err);
                setError(err.message || "Une erreur est survenue lors de la suppression");
            })
            .finally(() => setIsLoading(false))
    }

    const [article, setArticle] = useState<ArticleType | null>(null);

    useEffect(() => {
        fetch(`http://localhost:3000/articles/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setArticle(data);
                setIsLoading(false);
            });
    }, [id]);

    if (error) return <div>Error: {error}</div>;

    if (isLoading) return <div>Loading...</div>;

    if (!article || !article.id) return <div>Article not found</div>;

    return (
        <div className="p-25 ">
            <div className="w-150 m-auto p-10 border-2 rounded-4xl flex flex-col text-center">
                <h1>{article.title}</h1>
                <p>Author: {article.author}</p>
                <div className="w-50 m-auto rounded-4xl">
                    <img className="rounded-full aspect-square object-cover" src={article.image} alt={article.description} />
                </div>
                <EditorProvider>
                    <Editor value={article.content}></Editor>
                </EditorProvider>

                <p>{article.description}</p>
            </div>
            <div className="text-center">
                <button type="button" className="bg-sky-200/70 active:bg-sky-700/70 hover:bg-sky-500 m-15 border p-3" onClick={ArticleDelete}>Supprimer l'article</button>
                <button type="button" className="bg-sky-200/70 active:bg-sky-700/70 hover:bg-sky-500 m-15 border p-3" onClick={() => navigate(`/articles/${id}/edit`)}>Éditer l'article</button>

            </div>
        </div>
    );
};

export default ArticlePage;

