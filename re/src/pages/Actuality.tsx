'use client'
import { useEffect, useState } from 'react';
import Post, { PostThumbnail, type PostType } from '../components/Post';

export default function Actualities(props: PostType) {

  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedPostId, setSelectedPostId] = useState<number>(1)
  const [error, setError] = useState(null);
  const [originalPost, setOriginalPost] = useState<PostType | undefined>(undefined);

  // Chargement des posts
  useEffect(() => {

    setIsLoading(true);
    setError(null);

    // fetch ('db.json')
    fetch('http://localhost:3000/posts')

      .then((response) => {
        if (!response.ok) throw new Error(`Erreur HTTP : ${response.status}`);
        return response.json();
      })

      .then((data) => {
        setPosts(data)
        setOriginalPost(posts.find((p: PostType) => p.id == selectedPostId))
      })

      .catch((err) => setError(err.message))

      .finally(() => {
        setIsLoading(false)
      });

  }, []);

  const selectedPost: PostType | undefined = posts.find((p) => p.id == selectedPostId)




  if (isLoading) {
    return (
      <h2 className="text-4xl text-center">Chargement des actualités</h2>
    )
  }

  return (
    <div className="p-20">
      <div className="bg-orange-100/65 rounded-3xl p-10 border-4">

        <h1 className="text-5xl m-10 text-center font-medium ">Actualités</h1>
        <div className="flex p-5 gap-25 m-auto">

          {/* Side Bar */}
          <aside>
            {posts.map((post) => (
              <li className="w-full" key={post.id} onClick={() => setSelectedPostId(post.id)}>
                <PostThumbnail
                  id={post.id}
                  key={post.id}
                  title={post.title}
                  date={post.date}
                />
              </li >
            ))}
          </aside>

          {/* SelectedPost */}
          {selectedPost ?
            <Post
              id={selectedPost.id}
              title={selectedPost.title}
              image={selectedPost.image}
              legend={selectedPost.legend}
              description={selectedPost.description}
              content={selectedPost.content}
              likeCount={selectedPost.likeCount}
              date={selectedPost.date}
            />
            :
            <h2 className="text-3xl text-center">Chargement</h2>
          }
        </div>
      </div>
    </div>
  )
}
