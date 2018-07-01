var appRoot = require('app-root-path');
var con = require(appRoot + '/services/connectionService');

exports.getInstallmentType = function (queryString, callback) {
  var sql = "select  * from tbl_installmentType";
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

exports.getInstallmentTypeById = function (id, callback) {
    var sql = "select  * from tbl_installmentType where id='" + id + "'";
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

exports.postInstallmentType = function (InstallmentType, callback) {
 var setString = "";
 var keyString="";
 var valueString="";
    let InstallmentTypebjectLeng = Object.keys(InstallmentType).length;
    var i = 1;
    for (var key in InstallmentType) {  
        if (i != InstallmentTypebjectLeng)
		{
		keyString=keyString+key+',';
		valueString=valueString+"'"+InstallmentType[key]+"',"; 
		}
		else 
		{
		keyString=keyString+key;
		valueString=valueString+"'"+InstallmentType[key]+"'"; 
        } 
        i++;

    }

    var sql = "INSERT INTO tbl_installmentType ("+keyString+") VALUES (" +valueString+")";

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
 exports.patchInstallmentType = function (id, InstallmentType, callback) {
    var setString = "";
    let InstallmentTypebjectLeng = Object.keys(InstallmentType).length;
    var i = 1;
    for (var key in InstallmentType) {

        console.log(key + "  " + InstallmentType[key]); // here is your column name you are looking for
        if (i != InstallmentTypebjectLeng)
            setString = setString + key + "='" + InstallmentType[key] + "',";
        else
            setString = setString + key + "='" + InstallmentType[key] + "'";
        i++;

    }
    var sql = "UPDATE tbl_installmentType SET " + setString + "WHERE id = '" + id + "'";
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

exports.deleteInstallmentType = function (id, callback) {
    var sql = "DELETE from tbl_installmentType where id='" + id + "'";
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