const app = require('express')();
const { Client } = require('pg');
const client = new Client(process.env.POSTGRES_HOST);
const http = require('http').Server(app);

//Connexion
client.connect(err => {
    if (!err) { console.log('OK') }
});

// Test la création de TABLE
client.query('CREATE TABLE photo(nom VARCHAR(50), email VARCHAR(255))');


const query = {
    text: 'INSERT INTO photo(nom, email) VALUES($1, $2)',
    values: ['brianc', 'brian.m.carlson@gmail.com'],
};
// INSERT
client.query(query, (err, res) => {
    if (err) {
        console.log(err.stack)
    } else {
        console.log(res)
    }
});

module.exports = http;