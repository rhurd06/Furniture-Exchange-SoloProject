const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// get all the furniture items from the database
router.get('/', (req, res) => {
    const query = `SELECT * FROM "furniture";`;
    pool.query (query)
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
    const query = `INSERT INTO "furniture" (user_id, picture_url, 
                    cost, location, description, furniture_type_id)
                    VALUES ($1, $2, $3, $4, $5, $6)
                    RETURNING "id";`
    pool.query(query, [req.user.id, req.body.picture_url, req.body.cost, 
                        req.body.location, req.body.description, req.body.furnitureType])
        .then(result => {
            console.log(`New furniture Id:`, result.rows[0].id);
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('first query', error);
            res.sendStatus(500);
        })
})

module.exports = router;