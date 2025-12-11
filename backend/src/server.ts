const express = require('express');
const app = express();
const port = process.env.PORT;
const connection =  require ('./config/database');

app.use(express.json());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// GLOBAL ROUTE
app.get('/', (req: any, res: any) => {
    res.send('Hello World!')
});

// ARTICLES ROUTES

// Get all articles
app.get('/articles', (req: any, res: any) => {   
    const query = 'SELECT * FROM articles';
    connection.query(query, (error: Error, results: any)=> {
        if (error) {
            console.error('❌ Erreur lors de la requête SQL:', error.message);
            return res.status(500).send('Erreur serveur');
        }
        res.json(results);
    });
});
// Get article by ID
app.get('/articles/:id', (req: any, res: any) => {   
    const id = req.params.id;
    const query = 'SELECT * FROM articles WHERE id = ?';
    
    connection.query(query, [id],(error: Error, results: any)=> {
        if (error) {
            console.error('❌ Erreur lors de la requête SQL:', error.message);
            return res.status(500).send('Erreur serveur');
        }
        res.json(results);
    });
});

// Create new article
app.post("/articles", (req: any, res: any) => {
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;
    const content = req.body.content;
    const date = req.body.date;

    const sql = "INSERT INTO articles (title, description, image, content, date) VALUES (?,?,?,?,?)";

    connection.query(sql,[title, description, image, content, date], (error: Error, results: any) => {
        if (error) {
            console.error("❌ Erreur lors de la requête SQL:", error.message);
            return res.status(500).send("Erreur serveur");
        }
        res.status(201).json({title: title, description: description , image: image, content: content, date: date });
    });
});

// Update article by ID
app.put("/articles/:id", (req: any, res: any) => {
    const { id } = req.params;
    const { title } = req.body;
    const { description } = req.body;
    const { image } = req.body;
    const { content } = req.body;
    const { date } = req.body;
    const sql = "UPDATE articles SET title = ?, description = ?, image = ?, content = ?, date = ? WHERE id = ?";
    
    connection.query(sql, [title, description, image, content, date, id], (error: Error, results:any) => {
        if (error) {
            console.error("❌ Erreur lors de la requête SQL:", error.message);
            return res.status(500).send("Erreur serveur");
        }
        if (results.affectedRows === 0) {
            return res.status(404).send("Article non trouvé");
        }
        res.json({ id: parseInt(id), title: title, description: description, image: image, content: content, date: date });
    });
});

// Delete article by ID
app.delete("/articles/:id", (req: any, res: any) => {
    const id = req.params.id;
    const sql = "DELETE FROM articles WHERE id = ?";

    connection.query(sql, [id], (error: Error, results: any) => {
        if (error) {
            console.error("❌ Erreur lors de la requête SQL:", error.message);
            return res.status(500).send("Erreur serveur");
        }
        if (results.affectedRows === 0) {
            return res.status(404).send("Article non trouvé");
        }
        res.status(204).send();
    });
});

// CATEGORIES ROUTES
// Get all categories
app.get("/categories", (req: any, res: any) => {
    const sql = "SELECT * FROM categories";

    connection.query(sql, (error: Error, results: any) => {
        if (error) {
            console.error("❌ Erreur lors de la requête SQL:", error.message);
            return res.status(500).send("Erreur serveur");
        }
        res.json(results);
    });
});

// Get category by ID
app.get("/categories/:id", (req: any, res: any) => {
    const id = req.params.id;
    const sql = "SELECT * FROM categories WHERE id = ?";

    connection.query(sql, [id], (error: Error, results: any) => {
        if (error) {
            console.error("❌ Erreur lors de la requête SQL:", error.message);
            return res.status(500).send("Erreur serveur");
        }
        res.json(results);
    });
});

// Delete category by ID
app.delete("/categories/:id", (req: any, res: any) => {
    const id = req.params.id;
    const sql = "DELETE FROM categories WHERE id = ?";

    connection.query(sql, [id], (error: Error, results: any) => {
        if (error) {
            console.error("❌ Erreur lors de la requête SQL:", error.message);
            return res.status(500).send("Erreur serveur");
        }
        if (results.affectedRows === 0) {
            return res.status(404).send("Catégorie non trouvée");
        }
        res.status(204).send();
    });
});

// Create new category
app.post("/categories", (req: any, res: any) => {
    const name = req.body.name;
    const sql = "INSERT INTO categories (name) VALUES (?)";

    connection.query(sql,[name], (error: Error, results: any) => {
        if (error) {
            console.error("❌ Erreur lors de la requête SQL:", error.message);
            return res.status(500).send("Erreur serveur");
        }
        res.status(201).json({ id: results.insertId, name: name });
    });
});

// Update category by ID
app.put("/categories/:id", (req: any, res: any) => {
    const { id } = req.params;
    const { name } = req.body;
    const sql = "UPDATE categories SET name = ? WHERE id = ?";
    
    connection.query(sql, [name, id], (error: Error, results:any) => {
        if (error) {
            console.error("❌ Erreur lors de la requête SQL:", error.message);
            return res.status(500).send("Erreur serveur");
        }
        if (results.affectedRows === 0) {
            return res.status(404).send("Catégorie non trouvée");
        }
        res.json({ id: parseInt(id), name: name });
    });
});
