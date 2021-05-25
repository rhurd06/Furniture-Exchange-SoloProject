const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// get all the furniture items from the database
router.get('/', (req, res) => {
    pool.query (`SELECT * FROM "furniture";`)
        .then((results) => {
            res.send(results.rows);
        })
        .catch((error) => {
            res.sendStatus(500);
            console.log('Error in GET furniture', error);
        })
});

module.exports = router;