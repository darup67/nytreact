var express = require("express");

var articleController = require("../controllers/articleController");

var router = new express.Router();

// Get all quotes (or optionally a specific quote with an id)
router.get("/articles/:id?", articleController.index);
// Create a new quote using data passed in req.body
router.post("/articles", articleController.create);
// Update an existing quote with a speicified id param, using data in req.body
router.patch("/articles/:id", articleController.update);
// Delete a specific quote using the id in req.params.id
router.delete("/articles/:id", articleController.destroy);

module.exports = router;