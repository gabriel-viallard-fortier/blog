const db = require('../config/database');

const getLikesByArticleId = (articles_id: number, callback: Function) => {
    const query = 'SELECT * FROM likes WHERE articles_id = ?';
    db.query(query, [articles_id], (error: Error, results: any) => {
        callback(error, results);
    });
};

const addLike = (articles_id: number, users_id: number, callback: Function) => {
    const query = 'INSERT INTO likes (articles_id, users_id) VALUES (?, ?)';
    db.query(query, [articles_id, users_id], (error: Error, results: any) => {
        callback(error, results);
    });
};

const removeLike = (articles_id: number, users_id: number, callback: Function) => {
    const query = 'DELETE FROM likes WHERE articles_id = ? AND users_id = ?';
    db.query(query, [articles_id, users_id], (error: Error, results: any) => {
        callback(error, results);
    });
};

module.exports = {
    getLikesByArticleId,
    addLike,
    removeLike
};