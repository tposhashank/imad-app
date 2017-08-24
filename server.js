var express = require('express');
var morgan = require('morgan');
var path = require('path');

// Database Connection started

var pool = require('pg').Pool;

var config = {
    user: '	tposhashank',
    database: '	tposhashank',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

//Create the pool somewhere globally so it is lifetime and last for as long as app is running
var pool = new Pool(config);

app.get('/test-db', function(req,res) {
    
    //make a select request
    //return the response with the results
    pool.query('SELECT * FROM test', function (err, result){
        if (err){
            res.status(500).send(err.toString());
        } else {
            res.send(JSON.stringify(result));
        }
        
    });
});

// Database Connection Ended

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
