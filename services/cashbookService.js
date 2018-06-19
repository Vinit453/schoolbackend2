var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getCashbooks = function (queryString, callback) {
    var sql = "select  * from tbl_cashbook";
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