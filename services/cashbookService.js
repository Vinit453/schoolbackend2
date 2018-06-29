var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getAllCashbooks = function (queryString, callback) {
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

exports.getCashbookNames = function (queryString, callback) {
    var sql = "select distinct name from tbl_cashbook";
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

exports.getCashbookBankNames = function (queryString, callback) {
    var sql = "select distinct bankName from tbl_cashbook";
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

exports.getCashbookReport = function (cashbookReportReq, callback) {
    var filterQuery = 'name = ' + '\'' + cashbookReportReq['name'] + '\'' + ' and '
        + 'bankName = ' + '\'' + cashbookReportReq['bankName'] + '\'' + ' and  '
        + 'accountType = ' + '\'' + cashbookReportReq['accountType'] + '\'' + ' and  '
        + 'creationDate between ' + '\'' + cashbookReportReq['fromDate'] + '\'' + ' and '
        + '\'' + cashbookReportReq['toDate'] + '\'';

    var sql = "Select * from tbl_cashbook where " + filterQuery;

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