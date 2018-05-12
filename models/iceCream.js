var orm = require("../config/orm.js");

var iceCream = {
    selectAll: function(cb) {
        orm.selectAll("iceCream", function(result) {
            cb(result);
        });
    },

    insertOne: function(columns, values, cb) {
        orm.insertOne("iceCream", columns, values, function (result){
            cb(result);
        });
    },

    updateOne: function(columnValPair, condition, cb) {
        orm.updateOne("iceCream", columnValPair, condition, function (result){
            cb(result);
        });
    }
};

module.exports = iceCream;