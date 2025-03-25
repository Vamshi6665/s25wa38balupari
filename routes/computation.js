var express = require('express');
var router = express.Router();


function calcAngle(opposite, adjacent) {
    return Math.atan(opposite / adjacent);
}

router.get('/', function (req, res, next) {
    
    let opposite = req.query.opposite ? parseFloat(req.query.opposite) : Math.random() * 10 + 1; // Avoid 0 to prevent division issues
    let adjacent = req.query.adjacent ? parseFloat(req.query.adjacent) : Math.random() * 10 + 1;

    let angle = calcAngle(opposite, adjacent); 

    res.send(`calcAngle applied to opposite=${opposite.toFixed(2)}, adjacent=${adjacent.toFixed(2)} is ${angle.toFixed(5)} radians`);
});

module.exports = router;
