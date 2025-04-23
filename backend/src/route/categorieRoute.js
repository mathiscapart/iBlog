const { models } = require('../models');
const { getIdParam } = require('./getId');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const categorie = await models.Categorie.findAll();
    res.status(200).json(categorie);
});

router.get('/:id', async (req, res) => {
    const id = getIdParam(req);
    const categorie = await models.Categorie.findByPk(id);
    if (categorie) {
        res.status(200).json(categorie);
    } else {
        res.status(404).send('404 - Not found');
    }
})

router.post('/', async (req, res) => {
    await models.Categorie.create(req.body);
    res.status(201).end('Categorie created');
})

router.put('/:id', async (req, res) => {
    const Categorie = await models.Categorie.findByPk(getIdParam(req));

    if (Categorie) {
        await models.Categorie.update(req.body, {
            where: {
                id: getIdParam(req)
            }
        });
        res.status(200).end('Categorie successfully updated');
    }else{
        res.status(404).send('404 - Not found');
    }
})

router.delete('/:id', async (req, res) => {
    const Categorie = await models.Categorie.findByPk(getIdParam(req));

    if (Categorie) {
        await models.Categorie.destroy({
            where: {
                id: getIdParam(req)
            }
        });
        res.status(200).end('Categorie successfully deleted.');
    }else{
        res.status(404).send('404 - Not found');
    }
})

module.exports = router;