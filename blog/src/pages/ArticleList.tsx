import ArticleThumbnail from '../components/ArticleThumbnail';
import '../assets/css/articleList.css';


export default function ArticleList() {
    return (
        <div className="place-items-center">

          <h3 className='m-10 text-2xl'>Decouvrez des articles et tutos détaillés au fur et à mesure de ma progression</h3>
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