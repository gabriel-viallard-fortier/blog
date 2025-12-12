import ArticleThumbnail from '../components/ArticleThumbnail';
import '../assets/css/articleList.css';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import type { ArticleType } from '../assets/types/ArticleType';


function ArticleList() {
    const [articles, setArticles] = useState<ArticleType[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    // const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const fetchArticles = async () => {
            try {

                const response = await fetch(import.meta.env.VITE_REACT_APP_API_URL + `/articles`);
                const data = await response.json();
                setArticles(data);
            }
            catch (error) {
                toast.error('Une erreur est survennue: ' + error);    
            }
        };
        fetchArticles();
    }, [])
        

    const filteredArticles: ArticleType[] = articles.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase()) 
    // ||
    // article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    // article.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
);

    return (
        <div className="flex flex-col">

            {/* searchBar */}
            <div className="p-10 flex justify-center">
                <label hidden htmlFor="searchbar"></label>
                <input name="searchbar" className="bg-yellow-200/50 border rounded-xl w-100 p-2" placeholder="Votre recherche ici" onChange={(event) => setSearchTerm(event.target.value)} />
            </div>

            {/* articles list */}    
            <ul className='m-auto container lg:gap-2 lg:p-10 sm:gap-1 sm:p-5 '>
                {filteredArticles.map((article) => (
                    <li key={article.id} >
                        <ArticleThumbnail
                            title={article.title}
                            author={''}
                            image={article.image ?? ''}
                            description={article.description}
                            category={article.categoryName ?? 'Inclassable'}
                            article_id={article.id} 
                            likes={article.likes}                        
                            />
                    </li>
                ))}
            </ul>


            {/* Pagination */}
            {/* <div className="flex justify-center gap-10">
                <button 
                    onClick={() => setCurrentPage(currentPage -1)} 
                    disabled={currentPage === 0}>Précedent</button>
                    <span>{currentPage}</span>
                <button 
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={articles.length < 4}>Suivant</button>
            </div>   */}



        </div>
    );
}


export default ArticleList;