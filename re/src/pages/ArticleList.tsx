import ArticleThumbnail from '../components/ArticleThumbnail';
import '../assets/css/articleList.css';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';


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

function ArticleList() {
    const [articles, setArticles] = useState<ArticleType[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch(`http://localhost:3000/articles?_page=${currentPage + 1}&_per_page=4`);
            const data = await response.json();
            const totalCount = response.headers.get("items");
            console.log(totalCount)
            setArticles(data.data);
            if (totalCount) {
                setPageCount(Math.ceil(parseInt(totalCount) / 4));
            }
        };

        fetchArticles();
    }, [currentPage]);

    const handlePageClick = (event: { selected: number }) => {
        setCurrentPage(event.selected);
    };

    const filteredArticles: ArticleType[] = articles.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col">
            <div className="p-10 flex justify-center">
                <input className="bg-yellow-200/50 border rounded-xl w-100 p-2" placeholder="Votre recherche ici" onChange={(event) => setSearchTerm(event.target.value)} />
            </div>

            <ReactPaginate
                className="flex justify-center gap-4"
                pageCount={pageCount}
                onPageChange={handlePageClick}
                previousLabel={"< previous"}
                nextLabel={"next >"}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
            />

            <ul className='m-auto container lg:gap-2 lg:p-10 sm:gap-1 sm:p-5'>
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
            </ul>
        </div>
    );
}


export default ArticleList;