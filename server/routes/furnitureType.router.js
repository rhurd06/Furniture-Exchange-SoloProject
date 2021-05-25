const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    //query to get all furniture types from database
    const query = `SELECT * FROM "furniture_type" ORDER BY "id" ASC;`;
    pool.query(query)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log(`Error getting furniture types`, error);
            res.sendStatus(500);
        })
});

module.exports = router;