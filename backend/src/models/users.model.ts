const db = require('../config/database');

const findAllUsers = (callback: Function) => {
    const query = 'SELECT * FROM users';
    db.query(query, (error: Error, results: any) => {
        callback(error, results);
    });
};

const findUserById = (id: number, callback: Function) => {
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [id], (error: Error, results: any) => {
        callback(error, results[0]);
    });
};

const addUser = (name: string, password: string, callback: Function) => {
    const query = 'INSERT INTO users (name, password) VALUES (?,?)';
    db.query(query, [name, password], (error: Error, results: any) => {
        callback(error, results);
    });
};

const deleteUser = (id: number, callback: Function) => {
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], (error: Error, results: any) => {
        callback(error, results);
    });
};

module.exports = {
    findAllUsers,
    findUserById,
    addUser,
    deleteUser
};  