var connection = require("../config/connection.js");

var orm = {
    selectAll: (table, cb) => {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: (table, column, value, cb) => {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, column, value], (err, res) => {
            if(err) throw err;
            
            cb(res);
        });
    },

    updateOne: (table, column, burgerId, cb) => {
        var queryString = "UPDATE ?? SET ?? = 1 WHERE id = ?";
        connection.query(queryString, [table, column, burgerId], (err, res) => {
            console.log("update" + queryString);
            if (err) throw err;
            console.log(res);
            cb(res);
    });
    }
}

module.exports = orm;



















// Export the orm object for the model (cat.js).
module.exports = orm;