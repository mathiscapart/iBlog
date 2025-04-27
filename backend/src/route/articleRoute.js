const { models } = require('../models');
const { getIdParam } = require('./getId');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const article = await models.Article.findAll(
        {
            include: [
                {
                    model: models.Category,
                    attributes: ['id', 'key', 'name', 'enable']
                },
                {
                    model: models.User,
                    attributes: ['id', 'lastName', 'firstName', 'email', 'avatar']
                }
            ]
        }
    );
    res.status(200).json(article);
});

router.get('/:id', async (req, res) => {
    const id = getIdParam(req);
    const article = await models.Article.findByPk(id, {
        include: [
            {
                model: models.Category,
                attributes: ['id', 'key', 'name', 'enable']
            },
            {
                model: models.User,
                attributes: ['id', 'lastName', 'firstName', 'email', 'avatar']
            }
        ]
    });
    if (article) {
        res.status(200).json(article);
    } else {
        res.status(404).send('404 - Not found');
    }
})

router.post('/', async (req, res) => {
    await models.Article.create(req.body);
    res.status(201).end('Article create successfully');
})

router.put('/:id', async (req, res) => {
    const article = await models.Article.findByPk(getIdParam(req));

    if (article){
        await models.Article.update(req.body, {
            where: {
                id: getIdParam(req)
            }
        });
        res.status(200).end('Article modify');
    }else{
        res.status(404).end('404 - Not Found')
    }
})

router.delete('/:id', async (req, res) => {
    const article = await models.Article.findByPk(getIdParam(req));

    if (article) {
        await models.Article.destroy({
            where: {
                id: getIdParam(req)
            }
        });
        res.status(200).end('Article delete');
    }else{
        res.status(404).end('404 - Not Found');
    }
})

module.exports = router;