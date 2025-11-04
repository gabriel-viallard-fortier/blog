import ArticleThumbnail from './ArticleThumbnail';
import '../assets/css/articleList.css';


export default function ArticleList() {
    return (
        <div className="place-items-center">

            <h2 className="p-15 font-bold text-3xl">Articles super cools</h2>
            <div className="container">
                <ArticleThumbnail />
                <ArticleThumbnail />
                <ArticleThumbnail />
                <ArticleThumbnail />
                <ArticleThumbnail />
                <ArticleThumbnail />
                <ArticleThumbnail />
                <ArticleThumbnail />
            </div>
        </div>
    );
}