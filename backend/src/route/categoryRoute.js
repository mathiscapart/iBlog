const { models } = require('../models');
const { getIdParam } = require('./getId');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const category = await models.Category.findAll();
    res.status(200).json(category);
});

router.get('/:id', async (req, res) => {
    const id = getIdParam(req);
    const category = await models.Category.findByPk(id);
    if (category) {
        res.status(200).json(category);
    } else {
        res.status(404).send('404 - Not found');
    }
})

router.post('/', async (req, res) => {
    await models.Category.create(req.body);
    res.status(201).end('Category created');
})

router.put('/:id', async (req, res) => {
    const Category = await models.Category.findByPk(getIdParam(req));

    if (Category) {
        await models.Category.update(req.body, {
            where: {
                id: getIdParam(req)
            }
        });
        res.status(200).end('Category successfully updated');
    }else{
        res.status(404).send('404 - Not found');
    }
})

router.delete('/:id', async (req, res) => {
    const Category = await models.Category.findByPk(getIdParam(req));

    if (Category) {
        await models.Category.destroy({
            where: {
                id: getIdParam(req)
            }
        });
        res.status(200).end('Category successfully deleted.');
    }else{
        res.status(404).send('404 - Not found');
    }
})

module.exports = router;