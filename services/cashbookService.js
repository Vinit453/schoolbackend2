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

exports.addCashbook = function (cashbook, callback) {
    var setString = "";
    var keyString = "";
    var valueString = "";
    let cashbookObjectLeng = Object.keys(cashbook).length;
    var i = 1;
    for (var key in cashbook) {
        if (i != cashbookObjectLeng) {
            keyString = keyString + key + ',';
            valueString = valueString + "'" + cashbook[key] + "',";
        }
        else {
            keyString = keyString + key;
            valueString = valueString + "'" + cashbook[key] + "'";
        }
        i++;
    }

    var sql = "INSERT INTO tbl_cashbook (" + keyString + ") VALUES (" + valueString + ")";

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