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
  const photo = req.body;
  const queryText = `
    INSERT INTO "gallery"
    ("url", "title", "description")
    VALUES
    ($1, $2, $3)
  `;
  pool
    .query(queryText, [photo.url, photo.title, photo.description])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    })
})

// PUT 
router.put('/like/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
  const itemId = req.params.id;
  const queryText = `
    DELETE FROM "gallery"
    WHERE "id" = $1;
  `;
  pool
    .query(queryText, [itemId])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});
module.exports = router;
