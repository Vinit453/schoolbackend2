var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'us-cdbr-iron-east-04.cleardb.net',
    user: 'bab1397f63d408',
    password: '0ed0be87',
    database: 'heroku_7a47b378a7afcca'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("My sql connected");
});

module.exports = connection;