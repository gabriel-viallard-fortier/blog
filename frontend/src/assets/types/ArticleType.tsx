export type ArticleType = {
    id?: number;
    users_id: number;
    categories_id: number;
    title: string;
    description: string;
    image?: string;
    content: string;
    date: string;
    categoryName?: string;
    likes: number;
};

export type CategoryType = {
    id: number;
    name: string;
};

export type LikeType = {
    id: number;
    articles_id: number;
    users_id: number;
};
export type ArticleThumbnailType = {
    article_id?: number,
    title: string,
    image?: string,
    category: string,
    description: string,
    author: string,
    likes: number
}