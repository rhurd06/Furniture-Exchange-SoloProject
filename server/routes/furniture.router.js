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
    const query = `INSERT INTO "furniture" (picture_url, 
                    cost, location, description)
                    VALUES ($1, $2, $3, $4)
                    RETURNING "id";`
    pool.query(query, [req.body.picture_url, req.body.cost, 
                        req.body.location, req.body.description])
        .then(result => {
            console.log(`New furniture Id:`, result.rows[0].id);
            const createdFurnitureId= result.rows[0].id;

            //to handle the user id reference
            const userQuery = `INSERT INTO "furniture"
                                ("user_id")
                                VALUES ($1);`;
            pool.query(userQuery, [createdFurnitureId,
                        req.body.user_id])
                .then(result => {
                    res.sendStatus(201);
                })
                .catch(error => {
                    console.log(error);
                    res.sendStatus(500);
                })

            //now to handle the furniture type reference
            const funritureTypeQuery = ` INSERT INTO "furniture"
                                        ("furniture_type_id")
                                        VALUES ($1);`;
            pool.query(funritureTypeQuery, [createdFurnitureId, 
                        req.body.furniture_type_id])
                .then(result => {
                    res.sendStatus(201);
                })
                .catch(error => {
                    console.log(error);
                    res.sendStatus(500);
                })

            //catch for first query
        })
        .catch(error => {
            console.log(error);
            res.sendStatus(500);
        })
})

module.exports = router;