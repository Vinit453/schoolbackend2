var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getFeeType = function (queryString, callback) {
  var sql = "select  * from tbl_feeType";
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

exports.getFeeTypeById = function (id, callback) {
    var sql = "select  * from tbl_feeType where id='" + id + "'";
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

exports.postFeeType = function (FeeType, callback) {
 var setString = "";
 var keyString="";
 var valueString="";
    let FeeTypebjectLeng = Object.keys(FeeType).length;
    var i = 1;
    for (var key in FeeType) {  
        if (i != FeeTypebjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+FeeType[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+FeeType[key]+"'"; 
        } 
        i++;

    }

    var sql = "INSERT INTO tbl_feeType ("+keyString+") VALUES (" +valueString+")";

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
 exports.patchFeeType = function (id, FeeType, callback) {
    var setString = "";
    let FeeTypebjectLeng = Object.keys(FeeType).length;
    var i = 1;
    for (var key in FeeType) {

        console.log(key + "  " + FeeType[key]); // here is your column name you are looking for
        if (i != FeeTypebjectLeng)
            setString = setString + key + "='" + FeeType[key] + "',";
        else
            setString = setString + key + "='" + FeeType[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_feeType SET " + setString + "WHERE id = '" + id + "'";
    console.log("Final Update query =\n" + sql);
    con.query(sql, function (err, result) {
        if (err) {
            callback(null, err);
            return;
        }
        else {
            callback("User Updated");
        }
        console.log(result.affectedRows + " record(s) updated");
    })
}

exports.deleteFeeType = function (id, callback) {
    var sql = "DELETE from tbl_feeType where id='" + id + "'";
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