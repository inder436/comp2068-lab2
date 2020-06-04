'use strict';
var express = require('express');
var router = express.Router();
router.get('/', function (req, res)
{
    console.log(req.query);
    function calculate(method, x, y)
    {
        if (method === "Add")
        {
            console.log(x + " + " + y + " = " + (parseInt(x) + parseInt(y)));
        }
        else if (method === "Subtract") {
            console.log(x + " - " + y + " = " + (parseInt(x) - parseInt(y)));
        }
        else if (method === "Multiply") {
            console.log(x + " * " + y + " = " + (parseInt(x) * parseInt(y)));
        }
        else if (method === "Divide") {
            console.log(x + " * " + y + " = " + (parseInt(x) / parseInt(y)));
        } else {
            console.log("Error");
        }
    }
    if (req.query.method != "") {
        calculate(req.query.method, req.query.x, req.query.y);
    }
    res.render('index', { title: 'Calc' });
});

module.exports = router;
