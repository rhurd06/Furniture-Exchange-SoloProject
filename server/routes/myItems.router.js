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
router.put('/:id', rejectUnauthenticated, (req, res) => {
    let furniture = req.params.id;
    console.log(req.furniture);
    let query = `UPDATE "furniture" SET picture_url=$2, cost=$3, location=$4, 
                    description=$5, sold=$6 WHERE "furniture".id=$1;`;
console.log(req.body);
    pool.query(query, [req.furniture.id, req.body.picture_url, req.body.cost, 
        req.body.location, req.body.description, req.body.sold])
        .then(() => {
            // console.log('Mark sold');
            // res.sendStatus(201);
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

// //delete one of my items
// router.delete('/:id', rejectUnauthenticated, (req, res) => {
//     const query = `DELETE FROM "furniture" WHERE id=$1 AND user_id=$2;`;
//     pool.query(query, [req.params.id, req.user.id])
//         .then(() => { res.sendStatus(201) 
//         })
//         .catch(error => {
//             console.log('Error deleting item', error);
//             res.sendStatus(500);
//         });
// });

module.exports = router;