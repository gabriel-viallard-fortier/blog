'use client'
import React, { useEffect, useState } from 'react';
import '../components/shop.css';

export type ArticleType = {
    id: number;
    category: string;
    type: string;
    name: string;
    images: string[];
    stock: number;
    price: number;
    description: string;
};
export type Category = {
    id: number;
    name: string;
}
const categories: Category[] = [
    { id: 0, name: "Jardin" },
    { id: 1, name: "Vaisselle" },
    { id: 2, name: "Boites" },
    { id: 3, name: "Décoration" },
    { id: 4, name: "Animaux" },
    { id: 5, name: "Raku" },
    { id: 6, name: "Raku nu" }
]
function Shop() {

    // Gestion de la recherche
    const [articles, setArticles] = useState<ArticleType[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        setIsLoading(true);
        setError(null);

        // fetch ('db.json')
        fetch('http://localhost:3000/articles')

            .then((response) => {
                if (!response.ok) throw new Error(`Erreur HTTP : ${response.status}`);
                return response.json();
            })
            .then((data) => setArticles(data))
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));

    }, []);

    const filteredArticles: ArticleType[] = articles.filter((article) =>
        article.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (isLoading) {
        return (
            <h2 className="text-4xl text-center">Chargement des articles</h2>
        )
    }

    return (


        <div className="p-20">
            <div className="bg-orange-100/65 rounded-3xl p-10 border-4">
                <h1 className="text-5xl m-10 text-center font-medium ">Boutique</h1>
                <div className="flex p-5 gap-25 m-auto">

                    <div className="border-4 m-auto rounded-3xl bg-sky-100 flex flex-col w-350 p-15">

                        {/* Barre de recherhe */}
                        <div className="flex m-10 justify-center font-bold">
                            <input className="border p-4 bg-white" placeholder="Votre recherche ici" onChange={(event) => setSearchTerm(event.target.value)} />
                        </div>


                        {/* Affichage des catégories */}
                        <aside className='flex'>
                            {categories.map((category) => (
                                <div key={category.id} className='w-50 p-1 text-2xl text-center m-4 border rounded-lg shadow-lg bg-sky-300'>
                                    {category.name}
                                </div>

                            ))}
                        </aside>



                        <div className="container gap-5 ">
                            {/* Affichage des articles */}
                            {filteredArticles.map((a) => (
                                <div key={a.id} className='m-auto p-5 border-2 rounded-2xl shadow-lg bg-sky-300/50'>
                                    <section className='border-2 rounded-2xl p-1'>
                                        <div className="flex flex-col justify-center">
                                            <h3 className="text-center p-5 text-2xl">{a.name}</h3>
                                            <h4 className="text-center p-2">{a.type}</h4>
                                            <h6 className="text-center p-2">stock: {a.stock}</h6>
                                            <div className="flex justify-center">
                                                <img className="w-40 h-70" src={a.images[0]} />
                                            </div>
                                            <p className="text-2xl text-center">{a.price} €</p>
                                            <p className="text-center p-2">{a.description}</p>
                                        </div>
                                    </section>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;