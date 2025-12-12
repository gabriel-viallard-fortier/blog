const db = require('../config/database');

const findAllArticles = (callback: Function) => {
    const query = 'SELECT a.*, c.name as categoryName, COUNT(l.id) as likes FROM articles a LEFT JOIN categories c ON a.categories_id = c.id LEFT JOIN likes l ON a.id = l.articles_id GROUP BY a.id';
    db.query(query, (error: Error, results: any) => {
        callback(error, results);
    });
};

const findArticleById = (id: number, callback: Function) => {
    const query = 'SELECT a.*, c.name as categoryName, COUNT(l.id) as likes FROM articles a LEFT JOIN categories c ON a.categories_id = c.id LEFT JOIN likes l ON a.id = l.articles_id WHERE a.id = ? GROUP BY a.id, c.name';
    db.query(query, [id], (error: Error, results: any) => {
        callback(error, results[0]);
    });
};

const createArticle = (title: string, description: string, image: string = '', content: string, date: string, callback: Function) => {
    const query = 'INSERT INTO articles (title, description, image, content, date) VALUES (?,?,?,?,?)';
    db.query(query, [title, description, image, content, date], (error: Error, results: any) => {
        callback(error, results);
    });
};

const updateArticle = (id: number, title: string, description: string, image: string = '', content: string, date: string, callback: Function) => {
    const query = 'UPDATE articles SET title = ?, description = ?, image = ?, content = ?, date = ? WHERE id = ?';
    db.query(query, [title, description, image, content, date, id], (error: Error, results: any) => {
        callback(error, results);
    });
};

const deleteArticle = (id: number, callback: Function) => {
    const query = 'DELETE FROM articles WHERE id = ?';
    db.query(query, [id], (error: Error, results: any) => {
        callback(error, results);
    });
};

module.exports = {
    findAllArticles,
    findArticleById,
    createArticle,
    updateArticle,
    deleteArticle
};