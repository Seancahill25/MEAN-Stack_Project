var MongoClient = require("mongodb").MongoClient;
var dburl = "mongodb://seancahill25-mean-stack-workspace-5814288/meanhotel";

var _connection = null;

var open = function() {
    MongoClient.connect(dburl, function(err, client) {
        if (err) {
            console.log("DB connnection failed");
            return;
        }
        _connection = client.db("meanhotel");
        console.log('DB connnection open', client);
    });
};

var get = function() {
    return _connection;
};

module.exports = {
    open: open,
    get: get
};