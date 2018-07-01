var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getBankDetails = function (queryString, callback) {
  var sql = "select  * from tbl_bankDetails";
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

exports.getBankDetailsById = function (id, callback) {
    var sql = "select  * from tbl_bankDetails where id='" + id + "'";
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

exports.postBankDetails = function (BankDetails, callback) {
 var setString = "";
 var keyString="";
 var valueString="";
    let BankDetailsbjectLeng = Object.keys(BankDetails).length;
    var i = 1;
    for (var key in BankDetails) {  
        if (i != BankDetailsbjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+BankDetails[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+BankDetails[key]+"'"; 
        } 
        i++;

    }

    var sql = "INSERT INTO tbl_bankDetails ("+keyString+") VALUES (" +valueString+")";

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
 exports.patchBankDetails = function (id, BankDetails, callback) {
    var setString = "";
    let BankDetailsbjectLeng = Object.keys(BankDetails).length;
    var i = 1;
    for (var key in BankDetails) {

        console.log(key + "  " + BankDetails[key]); // here is your column name you are looking for
        if (i != BankDetailsbjectLeng)
            setString = setString + key + "='" + BankDetails[key] + "',";
        else
            setString = setString + key + "='" + BankDetails[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_bankDetails SET " + setString + "WHERE id = '" + id + "'";
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

exports.deleteBankDetails = function (id, callback) {
    var sql = "DELETE from tbl_bankDetails where id='" + id + "'";
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