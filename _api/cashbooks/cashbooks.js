var express = require('express');
var router = express.Router();
var async = require('async');
var appRoot = require('app-root-path');
var jwt = require('jsonwebtoken');
var cashbookService = require(appRoot + '/services/cashbookService'); 


router.get('/', function (req, res, next) {
    cashbookService.getCashbooks("Cashbooks", function (err, results) {
        if (err) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.status(500).send(err);
        } else {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send({ 'Cashbooks': results });
        }

    })
});

module.exports = router;

