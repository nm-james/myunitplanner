const mysql = require('mysql2');

var database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'website'
});

database.connect(function(err) {
    if (err) throw err;
    // Create Updates Table
    database.query(`CREATE TABLE IF NOT EXISTS updates
    (
        id INT(11) NOT NULL AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        posted DATE NOT NULL,
        creator VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        front VARCHAR(255) NOT NULL,
        content JSON NOT NULL,
        PRIMARY KEY ` + '(`id`)' + `
    )`, function(err, result) {
        if (err) throw err;
        console.log('Table Updates has been initialised!');
        // End Connection
        database.end(function(err) {
            if (err) throw err;
            console.log('Ended Connection');
        });
    });
});

function DBConnection() {
    const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Nathan2004',
        database: 'website'
    });
    console.log('Created new Connection!');
    return db
}

module.exports = {
    db: database,
    Create: DBConnection
};