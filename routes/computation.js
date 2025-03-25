var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    let x = req.query.x ? parseFloat(req.query.x) : (Math.random() * 10).toFixed(2); 
    let y = Math.exp(x).toFixed(2); 

    res.send(`Math.exp applied to ${x} is ${y}`);
});

module.exports = router;
