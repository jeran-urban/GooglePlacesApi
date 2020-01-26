var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

router.use(express.static(path.join(__dirname,'../public/'), {index: 'home.html'}));

router.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"));
});

module.exports = router;