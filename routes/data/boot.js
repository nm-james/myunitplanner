const mysql = require('mysql2');
require('./database');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

con.connect(function(err) {
    if (err) throw err;
    // Check for a Data Base for us to use
    con.query('CREATE DATABASE IF NOT EXISTS website', function(err, result) {
        if (err) throw err;
        console.log('Database Website has been initialised!');
        // End Connection
        con.end(function(err) {
            if (err) throw err;
            console.log('Ended Connection');
        });
    });
});
