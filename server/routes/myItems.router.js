const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//get my items from DB
router.get('/:id', rejectUnauthenticated, (req, res) => {
    pool.query(`SELECT furniture.id, picture_url, cost, location, description, furniture.user_id, "user".email FROM "furniture" 
                JOIN "user" on "user".id = furniture.user_id
                WHERE user_id=$1;`, [req.user.id])
        .then((results) => {
            res.send(results.rows);
            // console.log(results.rows);
        })
        .catch((error) => {
            res.sendStatus(500);
            console.log(`Error in GET my items`, error);
        })
});

//update one of my items
router.put('/:id', (req, res) => {
    let item = req.body.data;
    console.log(req.body, req.params.id);
    let query = `UPDATE "furniture" SET picture_url=$2, cost=$3, location=$4, 
                    description=$5, sold=$6 WHERE "id"=$1;`;
    pool.query(query, [req.params.id, item.picture_url, item.cost, 
        item.location, item.description, item.sold])
        .then(() => {
                pool.query(`UPDATE "user" SET email=$2
                            WHERE "id"=$1;`,
                            [req.user.id, req.user.email])
                    .then(() => {
                        res.sendStatus(201);
                    })
                    .catch(error => {
                        console.log(`Error updating email in put route`, error);
                        res.sendStatus(500);
                    })
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
        .then(() => { 
            res.sendStatus(201) 
        })
        .catch(error => {
            console.log('Error deleting item', error);
            res.sendStatus(500);
        });
});

module.exports = router;