const { models } = require('../models');
const { getIdParam } = require('./getId');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const user = await models.User.findAll();
    res.status(200).json(user);
});

router.get('/:id', async (req, res) => {
    const id = getIdParam(req);
    const user = await models.User.findByPk(id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).send('404 - Not found');
    }
})

router.post('/', async (req, res, next) => {
    try{
        await models.User.create(req.body);
        res.status(201).end('user created successfully.');
    }catch (err){
        next(err);
    }
})

router.put('/:id', async (req, res) => {
    const user = await models.User.findByPk(getIdParam(req));

    if (user){
        await models.User.update(req.body, {
            where: {
                id: getIdParam(req)
            }
        });
        res.status(200).end('user updated successfully.');
    }else{
        res.status(404).send('404 not found');
    }
})

router.delete('/:id', async (req, res) => {
    const user = await models.User.findByPk(getIdParam(req));

    if (user){
        await models.User.destroy({
            where: {
                id: getIdParam(req)
            }
        });
        res.status(200).end('user deleted successfully.');
    }else{
        res.status(404).send('404 not found');
    }
})

module.exports = router;