const Users = require('../models/users.model');

const getAllUsers = (req: any, res: any) => {
    Users.findAllUsers((error: Error, results: any) => {
        if (error) {
            console.error('❌ Erreur lors de la récupération des utilisateurs :', error.message);
            return res.status(500).send('Erreur serveur');
        }
        res.json(results);
    });
};

const getUserById = (req: any, res: any) => {
    const id = req.params.id;
    Users.findUserById(id, (error: Error, results: any) => {
        if (error) {
            console.error('❌ Erreur lors de la récupération de l\'utilisateur :', error.message);
            return res.status(500).send('Erreur serveur');
        }
        res.json(results);
    });
};

const addUser = (req: any, res: any) => {
    const { name, password } = req.body;
    Users.addUser(name, password, (error: Error, results: any) => {
        if (error) {
            console.error('❌ Erreur lors de la création de l\'utilisateur :', error.message);
            return res.status(500).send('Erreur serveur');
        }
        res.status(201).json({ id: results.insertId, name });
    });
};

const deleteUser = (req: any, res: any) => {
    const id = req.params.id;
    Users.deleteUser(id, (error: Error, results: any) => {
        if (error) {
            console.error('❌ Erreur lors de la suppression de l\'utilisateur :', error.message);
            return res.status(500).send('Erreur serveur');
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Utilisateur non trouvé');
        }
        res.status(204).send();
    });
};
 const updateUser = (req: any, res: any) => {
    const id = req.params.id;
    const { name, password } = req.body;
    Users.updateUser(id, name, password, (error: Error, results: any) => {
        if (error) {
            console.error('❌ Erreur lors de la mise à jour de l\'utilisateur :', error.message);
            return res.status(500).send('Erreur serveur');
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Utilisateur non trouvé');
        }
        res.status(200).json({ id, name, password });
    });
};

const patchUser = (req: any, res: any) => {
    const id = req.params.id;
    const { name, password } = req.body;
    Users.patchUser(id, name, password, (error: Error, results: any) => {
        if (error) {
            console.error('❌ Erreur lors de la mise à jour partielle de l\'utilisateur :', error.message);
            return res.status(500).send('Erreur serveur');
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Utilisateur non trouvé');
        }
        res.status(200).json({ id, name, password });
    });
};

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    deleteUser,
    updateUser,
    patchUser
};  