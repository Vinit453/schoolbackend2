var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getFee = function (queryString, callback) {
    var sql = "select  * from tbl_fee";
    con.query(sql, function (err, result) {
        if (err) {
            callback(null, err);
            return;
        }
        else {
            callback(null, result);
            return;
        }
    });
}