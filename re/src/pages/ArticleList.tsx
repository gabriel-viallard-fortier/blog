import ArticleThumbnail from '../components/ArticleThumbnail';
import '../assets/css/articleList.css';
import { useEffect, useState } from 'react';


export type ArticleType = {
    id: number;
    title: string;
    author: string;
    description: string;
    image: string;
    isPublished: boolean;
    likeCount: number;
    categoryName: string;
};

 export default function ArticleList() {
    
    const [articles, setArticles] = useState<ArticleType[]>([]);    
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        // fetch ('db.json')
        fetch('http://localhost:3000/articles')
            .then((response) => response.json())
            .then((data) => setArticles(data))
        }, []);
    
    const filteredArticles: ArticleType[] = articles.filter((article) => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.categoryName.toLowerCase().includes(searchTerm.toLowerCase())

);
    return (
        <div className="">
            <div className="p-10 flex justify-center">
                <input className="bg-yellow-200/50 border p-2" placeholder="Votre recherche ici" onChange={(event) => setSearchTerm(event.target.value)} />
            </div>

            <section className='m-auto container lg:gap-2 lg:p-10 sm:gap-1 sm:p-5'>
                {filteredArticles.map((article) => (
                    <li key={article.id} >
                        <ArticleThumbnail
                            id={article.id}
                            title={article.title}
                            author={article.author}
                            image={article.image}
                            isPublished={article.isPublished}
                            likeCount={article.likeCount}
                            categoryName={article.categoryName}
                            description={article.description}
                            />

                    </li>

                ))}
                
            </section>
        </div>
    );
}