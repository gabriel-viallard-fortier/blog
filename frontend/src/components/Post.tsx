import { useEffect, useState } from 'react';

export type PostThumbnail = {
    id: number;
    title: string;
    date: string;
};
export type PostType = {
    id: number;
    title: string;
    image: string;
    legend: string;
    description: string;
    content: string;
    likeCount: number;
    date: string;
};

export function PostThumbnail(props: PostThumbnail) {


    return (
        <div key={props.id} className='p-2 m-1 border rounded-lg shadow-lg bg-sky-100'>
                <h3 className="text-center p-3 text-2xl">{props.title}</h3>
                <p className="text-center">{props.date}</p>
        </div>
    );
}


export default function Post(selectedPost: PostType) {
  // Gestion des likes
  const [likeCount, setLikeCount] = useState<number>(0);
  const [hasVoted, setHasVoted] = useState<boolean>(false);

  function handleThumbsUp() {
    
    if (hasVoted === false) {
      setLikeCount(likeCount => likeCount + 1);
      setHasVoted(true);
    }

    else {
      setLikeCount(likeCount => likeCount - 1);
      setHasVoted(false);
    }
  }
  {/* Affichage du post */}
  return (
    <div className="p-15 border-4 rounded-2xl shadow-xl bg-sky-100">
        <h2 className="text-4xl text-center p-10 text-shadow-lg">{selectedPost.title}</h2>
        <hr />
        <h2 className="text-2xl text-center p-15 text-shadow-xl">{selectedPost.description}</h2>
        <h2 className="text-2xl p-5 m-auto w-250 border-2 rounded-2xl bg-sky-100">{selectedPost.content}</h2>
        <div className="flex justify-center p-4 h-150">
          <img 
            src={selectedPost.image} 
            alt={selectedPost.legend} />
        </div>
        <h2 className="text-center">{selectedPost.legend}</h2>
        <div className="p-10 flex justify-center">
            <button className="text-2xl" onClick={handleThumbsUp} type="button">{hasVoted ? "💔" : "❤️" }</button>
            <p className="text-2xl text-center">{selectedPost.likeCount + likeCount} like : likes  </p>
        </div>
    </div>
  )
}