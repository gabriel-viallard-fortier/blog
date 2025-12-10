const express = require('express')
const app = express()
const port = process.env.PORT;
const db = require('./config/database');

app.get('/', (req: any, res: any) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/articles', (req: any, res: any) => {   
    const query = 'SELECT * FROM article';
    db.query(query, (error: Error, results: any)=> {
        if (error) {
            console.error('❌ Erreur lors de la requête SQL:', error.message);
            return res.status(500).send('Erreur serveur');
        }
        res.json(results);
    });
});