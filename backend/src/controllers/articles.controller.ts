const Articles = require('../models/articles.model');

const getAllArticles = (req: any, res: any) => {
    Articles.findAllArticles((error: Error, results: any) => {
        if (error) {
            console.error('❌ Erreur lors de la récupération des articles :', error.message);
            return res.status(500).send('Erreur serveur');
        }
        res.json(results);
    });
};

const getArticleById = (req: any, res: any) => {
    const id = req.params.id;
    Articles.findArticleById(id, (error: Error, results: any) => {
        if (error) {
            console.error('❌ Erreur lors de la récupération de l\'article :', error.message);
            return res.status(500).send('Erreur serveur');
        }
        res.json(results);
    });
};

const createArticle = (req: any, res: any) => {
    const { title, description, image = '', content, date } = req.body;
    Articles.createArticle(title, description, image, content, date, (error: Error, results: any) => {
        if (error) {
            console.error('❌ Erreur lors de la création de l\'article :', error.message);
            return res.status(500).send('Erreur serveur');
        }
        res.status(201).json({ id: results.insertId, title, description, image, content, date });
    });
};

const updateArticle = (req: any, res: any) => {
    const id = req.params.id;
    const { title, description, image = '', content, date } = req.body;
    Articles.updateArticle(id, title, description, image, content, date, (error: Error, results: any) => {
        if (error) {
            console.error('❌ Erreur lors de la mise à jour de l\'article :', error.message);
            return res.status(500).send('Erreur serveur');
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Article non trouvé');
        }
        res.status(200).json({ id, title, description, image, content, date });
    });
};

const deleteArticle = (req: any, res: any) => {
    const id = req.params.id;
    Articles.deleteArticle(id, (error: Error, results: any) => {
        if (error) {
            console.error('❌ Erreur lors de la suppression de l\'article :', error.message);
            return res.status(500).send('Erreur serveur');
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Article non trouvé');
        }
        res.status(204).send();
    }   
)};

module.exports = {
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
};