const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//get my items from DB
router.get('/:id', rejectUnauthenticated, (req, res) => {
    pool.query(`SELECT * FROM "furniture" WHERE user_id=$1;`, [req.user.id])
        .then((results) => {
            res.send(results.rows);
            console.log(results.rows);
        })
        .catch((error) => {
            res.sendStatus(500);
            console.log(`Error in GET my items`, error);
        })
});

//update one of my items
router.put('/', rejectUnauthenticated, (req, res) => {
    // let furnitureId = req.params.id;
    let query = `UPDATE "furniture" SET user_id=$1, picture_url=$2, cost=$3, location=$4, 
                    description=$5, furnitureType=$6, sold=$7 WHERE "id"=$1;`;
console.log(req.body);
    pool.query(query, [req.user.id, req.body.picture_url, req.body.cost, 
        req.body.location, req.body.description, req.body.furnitureType, req.body.sold])
        .then(() => {
            console.log('Mark sold');
            res.sendStatus(201);
                pool.query(`INSERT INTO "user" ("email")
                            VALUES ($1);`)
                    res.sendStatus(201);
        })
        .catch(error => {
            console.log(`Error making database query ${query}`, error);
            res.sendStatus(500);
        });
});

//delete one of my items
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const query = `DELETE FROM "furniture" WHERE id=$1 AND user_id=$2;`;
    pool.query(query, [req.params.id, req.user.id])
        .then(() => { res.sendStatus(201) 
        })
        .catch(error => {
            console.log('Error deleting item', error);
            res.sendStatus(500);
        });
});

module.exports = router;