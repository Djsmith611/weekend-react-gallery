const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')


// GET
router.get('/', (req, res) => {
  const queryText = `
    SELECT * FROM "gallery"
    ORDER BY "id";
  `;
  pool
    .query(queryText)
    .then((result) => {
      res.status(200).send(result.rows);
    })
    .catch((err) => {
      console.error("ERROR in GET ROUTE",err);
      res.sendStatus(500);
    });
});

// POST
router.post('/', (req,res) => {

})

// PUT 
router.put('/:id', (req, res) => {
  const itemId = req.params.id;
  const queryText = `
    UPDATE "gallery"
    SET "likes" = "likes" + 1
    WHERE "id" = $1;
  `;
  pool
    .query(queryText, [itemId])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error("ERROR in PUT ROUTE", err);
      res.sendStatus(500);
    });
});

// DELETE
router.delete('/like/:id', (req, res) => {
  
});
module.exports = router;
