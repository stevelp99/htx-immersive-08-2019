var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(_, res) {
  res.json(["Mark", "Lauren", "Huy", "Steven"]);
});

module.exports = router;
