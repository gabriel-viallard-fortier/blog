const Categories = require('../models/categories.model');

const getAllCategories = (req: any, res: any) => {
    Categories.findAllCategories((error: Error, results: any) => {
        if (error) {
            console.error('❌ Erreur lors de la récupération des catégories :', error.message);
            return res.status(500).send('Erreur serveur');
        }
        res.json(results);
    });
};

const getCategoryById = (req: any, res: any) => {
    const id = req.params.id;
    Categories.findCategoryById(id, (error: Error, results: any) => {
        if (error) {
            console.error('❌ Erreur lors de la récupération de la catégorie :', error.message);
            return res.status(500).send('Erreur serveur');
        }
        res.json(results);
    });
};

const deleteCategory = (req: any, res: any) => {
    const id = req.params.id;
    Categories.deleteCategory(id, (error: Error, results: any) => {
        if (error) {
            console.error('❌ Erreur lors de la suppression de la catégorie :', error.message);
            return res.status(500).send('Erreur serveur');
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Catégorie non trouvée');
        }
        res.status(204).send();
    });
};

const createCategory = (req: any, res: any) => {
    const { name } = req.body;
    Categories.createCategory(name, (error: Error, results: any) => {
        if (error) {
            console.error('❌ Erreur lors de la création de la catégorie :', error.message);
            return res.status(500).send('Erreur serveur');
        }
        res.status(201).json({ id: results.insertId, name : name});
    });
};

const editCategory = (req: any, res: any) => {
    const id = req.params.id;
    const { name } = req.body;
    Categories.updateCategory(id, name, (error: Error, results: any) => {
        if (error) {
            console.error('❌ Erreur lors de la mise à jour de la catégorie :', error.message);
            return res.status(500).send('Erreur serveur');
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Catégorie non trouvée');
        }
        res.status(200).json({ id, name });
    });
};

// Controller methods for categories
module.exports = {
    getAllCategories,
    getCategoryById,
    deleteCategory,
    createCategory,
    editCategory,
};