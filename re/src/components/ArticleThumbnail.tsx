import { Link } from "react-router";
import { useState } from 'react';

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

export default function ArticleThumbnail(props: ArticleType) {

    const [likeCount, setLikeCount] = useState<number>(props.likeCount);
    const [hasVoted, setHasVoted] = useState<boolean>(false);

    function handleThumbsUp() {
        if (hasVoted === false) {
            setLikeCount(likeCount => likeCount + 1);
            setHasVoted(true);
        }
        else {
            setLikeCount(likeCount => likeCount -1);
            setHasVoted(false);
        }
    }

    return (
        <div>
            <div key={props.id} className='sm:w-35 md:w-45 lg:w-65 h-120 p-2 border rounded-lg shadow-lg'>
                <Link className="flex flex-col items-center" to={`/articles/${props.id}`}>
                    <h3 className="font-bold text-center p-5 sm:text-1xl md:text-2xl lg:text-2xl place-items-center ">{props.title}</h3>
                    <img className="sm:w-25 md:w-30 lg:w-35 rounded-full aspect-square object-cover" src={props.image} alt={props.title} />
                </Link>
                <p className="font-medium text-center p-2">{props.description}</p>
                <h4 className="text-center p-2">{props.categoryName}</h4>
                <h6 className="text-center p-2">Écrit par {props.author}</h6>
                <div className="p-1 flex justify-around">
                    <p className="text-2xl text-center">{likeCount} likes</p>
                    <button className="text-2xl" onClick={handleThumbsUp} type="button">{hasVoted ? "💔" : "❤️" }</button>
                </div>
            </div>
        </div>
    );
}