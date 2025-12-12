const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT;

const categoriesRoutes = require('./routes/categories.routes');
const usersRoutes = require('./routes/users.routes');
const articlesRoutes = require('./routes/articles.routes');
const likesRoutes = require('./routes/likes.routes');

app.use(express.json());
app.use(cors());

app.use('/categories', categoriesRoutes);
app.use('/articles', articlesRoutes);
app.use('/users', usersRoutes);
app.use('/likes', likesRoutes);

app.listen(port, () => {
    console.log(`My-Blog-API listening on port ${port}`)
});

