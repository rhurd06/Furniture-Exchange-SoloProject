const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//get favorites from Database
router.get('/:id', rejectUnauthenticated, (req, res) => {
    const query = `SELECT favorites.user_id, furniture_id, picture_url, cost, 
                    description, "user".username, "user".email from "favorites"
                    JOIN "user" on favorites.user_id = "user".id
                    JOIN furniture on favorites.furniture_id = furniture.id
                    WHERE favorites.user_id=$1;`;
    pool.query(query, [req.user.id])
        .then((results) => {
            res.send(results.rows);
        })
        .catch((error) => {
            res.sendStatus(500);
            console.log('Error in favorites GET route', error);
        })
});

//post (add) new favorites to Database 
router.post('/', rejectUnauthenticated, (req, res) => {
    const query = `INSERT INTO "favorites" (user_id, furniture_id)
                    VALUES ($1, $2)
                    RETURNING "id";`;
    console.log('logging req.body', req.body.id);
    pool.query(query, [req.user.id, req.body.id])
        .then((results) => {
            res.sendStatus(201);
            console.log('New favorites id:', results.rows[0]);
        })
        .catch((error) => {
            res.sendStatus(500);
            console.log('Error in favorites POST route', error);
        })
});

module.exports = router;