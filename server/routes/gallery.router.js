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
      console.error(err);
      res.sendStatus(500);
    });
});

// POST
router.post('/', (req,res) => {

})

// PUT 
router.put('/like/:id', (req, res) => {
  
});

// DELETE
router.delete('/like/:id', (req, res) => {
  
});
module.exports = router;
