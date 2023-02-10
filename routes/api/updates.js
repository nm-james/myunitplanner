const express = require("express");
const router = express.Router();

const cors = require('cors');

const db = require('../data/database')

var whitelist = ['http://localhost:3000', 'http://localhost:3000/updates']

var corsOptions = {
    origin: function( origin, callback ) {
        if (whitelist.indexOf(origin) !== -1) {
            callback( null, true )
        } else {
            callback( null, false )
        }
    },
}


router.get('/', cors(corsOptions), (req, res) => {
    const connection = db.Create()
    connection.query('SELECT * FROM updates', function(err, result) {
        if (err) throw err;
        res.json(result)
    });
    connection.end();
});


router.get('/:id', cors(corsOptions), (req, res) => {
    const connection = db.Create()
    console.log( req.params.id );
    let query = 'SELECT * FROM updates'
    if (Number.isInteger( parseInt(req.params.id) )) {
        query += ' WHERE id = ' + req.params.id
    }
    connection.query(query, function(err, result) {
        if (err) throw err;
        res.json(result)
    });
    connection.end();
});

router.get('/:desc', cors(corsOptions), (req, res) => {
    const connection = db.Create()
    console.log(req.params.desc );
    let query = 'SELECT * FROM updates'
    if (req.params.desc === 'true') {
        query += ' ORDER BY id DESC'
    }
    connection.query(query, function(err, result) {
        if (err) throw err;
        res.json(result)
    });
    connection.end();
});

module.exports = router;
