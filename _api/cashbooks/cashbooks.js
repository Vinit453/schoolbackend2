var express = require('express');
var router = express.Router();
var async = require('async');
var appRoot = require('app-root-path');
var jwt = require('jsonwebtoken');
var cashbookService = require(appRoot + '/services/cashbookService'); 


router.get('/', function (req, res, next) {
    cashbookService.getAllCashbooks("Cashbooks", function (err, results) {
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

router.get('/name', function (req, res, next) {
    cashbookService.getCashbookNames("Cashbooks", function (err, results) {
        if (err) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.status(500).send(err);
        } else {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send({ 'CashbookNames': results });
        }
    })
});

router.get('/bankname', function (req, res, next) {
    cashbookService.getCashbookBankNames("Cashbooks", function (err, results) {
        if (err) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.status(500).send(err);
        } else {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send({ 'CashbookBankNames': results });
        }
    })
});

router.post('/report', function (req, res, next) {
    cashbookService.getCashbookReport(req.body, function (err, results) {
        if (err) {
            //res.json(err);
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.status(500).send(err);
        }
        else {
            //res.json(results);
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.send({ 'Cashbooks': results });
        }

    })
});


// create new object
router.post('/', function (req, res, next) {
    cashbookService.addCashbook(req.body, function (err, results) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(results);
        }

    })
});

module.exports = router;

