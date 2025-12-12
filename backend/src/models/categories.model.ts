const db = require('../config/database');

const findAllCategories = (callback: Function) => {
    const query = 'SELECT * FROM categories';
    db.query(query, (error: Error, results: any) => {
        callback(error, results);
    });
};

const findCategoryById = (id: number, callback: Function) => {
    const query = 'SELECT * FROM categories WHERE id = ?';
    db.query(query, [id], (error: Error, results: any) => {
        callback(error, results[0]);
    });
};

const createCategory = (name: string, callback: Function) => {
    const query = 'INSERT INTO categories (name) VALUES (?)';
    db.query(query, [name], (error: Error, results: any) => {
        callback(error, results);
    });
};

const updateCategory = (id: number, name: string, callback: Function) => {
    const query = 'UPDATE categories SET name = ? WHERE id = ?';
    db.query(query, [name, id], (error: Error, results: any) => {
        callback(error, results);
    });
};

const deleteCategory = (id: number, callback: Function) => {
    const query = 'DELETE FROM categories WHERE id = ?';
    db.query(query, [id], (error: Error, results: any) => {
        callback(error, results);
    });
};

module.exports = {
    findAllCategories,
    findCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
};