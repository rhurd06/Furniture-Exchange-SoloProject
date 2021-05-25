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

router.post('/', (req, res) => {
    console.log(req.body);
    // RETURNING "id" will give us back the id of the furniture item added 
    const query = `INSERT INTO "furniture" (picture_url, cost, location, description, furniture_type)`
})

module.exports = router;