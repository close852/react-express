const express = require('express');
const router = express.Router();
let todoDAO = require('../dao/todoDAO')

router.get('/api/hello', async function (req, res) {
    let result = await todoDAO.getTodoById('13');
    res.send(result)
})
router.get('/api/greeting', async function (req, res) {
    let result = await todoDAO.getTodoById('11');
    res.send(result)
})

module.exports = router;
//https://supdev.tistory.com/46