const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const errorMiddleware = require('../error/errorMiddleware');

const myToken = function (req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).send('Token non fourni');

    const parts = authHeader.split(' ');
    const [ , token] = parts;

    if (token !== process.env.TOKEN) return res.status(401).send('Token non valide');
    next()
}

const categorieRouter = require('./categorieRoute');
const userRouter = require('./userRoute');
const articleRouter = require('./articleRoute');

app.use(myToken)
app.use(bodyParser.json());
app.use('/user', userRouter);
app.use('/article', articleRouter);
app.use('/categorie', categorieRouter);
app.get('/error', () => {
    throw new Error('This is a forced error!');
});

app.use(errorMiddleware)

module.exports = app;