const Likes = require('../models/likes.model');

const getLikesByArticleId = (req: any, res: any) => {
    const articles_id = req.params.articles_id;
    Likes.getLikesByArticleId(articles_id, (error: Error, results: any) => {
        if (error) {
            console.error('❌ Erreur lors de la récupération des likes :', error.message);
            return res.status(500).send('Erreur serveur');
        }
        res.json(results);
    });
};

const addLike = (req: any, res: any) => {
    const articles_id = req.params.articles_id;
    const users_id = req.body.users_id;
    Likes.addLike(articles_id, users_id, (error: Error, results: any) => {
        if (error) {
            console.error('❌ Erreur lors de l\'ajout du like :', error.message);
            return res.status(500).send('Erreur serveur');
        }
        res.status(201).json({ message: 'Like ajouté avec succès' });
    });
};

const removeLike = (req: any, res: any) => {
    const articles_id = req.params.articles_id;
    const users_id = req.body.users_id;
    Likes.removeLike(articles_id, users_id, (error: Error, results: any) => {
        if (error) {
            console.error('❌ Erreur lors de la suppression du like :', error.message);
            return res.status(500).send('Erreur serveur');
        }
        res.status(200).json({ message: 'Like supprimé avec succès' });
    });
};

module.exports = {
    getLikesByArticleId,
    addLike,
    removeLike
};  