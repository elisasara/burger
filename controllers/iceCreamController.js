var express = require("express");
var iceCream = require("../models/iceCream.js");

// creates the router with express
var router = express.Router();

// home page route, showing all ice creams
router.get("/", function(req, res){
    iceCream.selectAll(function(data){
        // create the object to be passed into the handlebars file
        var hbObject = {
            iceCream: data
        };
        res.render("index", hbObject);
    });
});

router.post("/api/icecreams", function (req, res){
    iceCream.insertOne([iceCream_name], [req.body.name], function (data) {
        res.json(data);
    });
});

router.put("/api/icecreams/:id", function (req, res){
    var condition = "id = " + req.params.id;

    iceCream.updateOne({
        devoured: req.body.devoured
    }, condition, function (result){
        if (result.changedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        };
    });
});

module.exports = router;