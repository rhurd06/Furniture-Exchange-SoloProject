const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//get favorites from Database
router.get('/', rejectUnauthenticated, (req, res) => {
    const query = `SELECT * from "favorites
                    WHERE user_id=$1;`;
    pool.query(query)
        .then((results) => {
            res.sendStatus(results.rows);
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
    pool.query(query, [req.user.id, req.furniture.id])
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