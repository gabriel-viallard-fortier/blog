const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((error: any) => {
    if (error) {
        console.error('❌ Erreur de connexion à MySQL:', error.message);
        return;
    }
    console.log('✅ Connecté à la base de données MySQL');
});

module.exports = db;