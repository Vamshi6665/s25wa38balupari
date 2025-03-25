var express = require('express');
var router = express.Router();

// Route to compute Math.exp()
router.get('/', function (req, res, next) {
    let x = req.query.x ? parseFloat(req.query.x) : (Math.random() * 10).toFixed(2); // Use query param or generate random x
    let y = Math.exp(x).toFixed(2); // Apply Math.exp() and format to 2 decimal places

    res.send(`Math.exp applied to ${x} is ${y}`);
});

module.exports = router;
