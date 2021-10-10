const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));

var oi = "oooo"

var a
const getCSV = require('get-csv');
 
var fs = require('fs')

app.get('/api/chat', function(req, res) {
    getCSV('https://docs.google.com/spreadsheets/d/1_0ZfPnHpX6b79W7RZ-5NzAFmh6wjy_QEdOQtSWYm2SQ/gviz/tq?tqx=out:csv&tq&gid=1443938747')
    .then(rows => a= rows);
    console.log(a)
    res.send({
      'w': a,
    });
  });

  app.use(express.json());
app.use(express.urlencoded({ extended: true }));

  app.post('/api/chat', function(req, res) {
    const name = req.body.name;
    const text1 = req.body.text1;
   

    fs.readFile('input.json', 'utf-8', function(err, data) {
        if (err) throw err
    
        var arrayOfObjects = JSON.parse(data)
        arrayOfObjects.chat.push({
            name: req.body.name,
            age: req.body.text1
        })
    
        console.log(arrayOfObjects)
    
        fs.writeFile('input.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
            if (err) throw err
            console.log('Done!')
        })
    })
    res.send({
      'name': JSON.stringify(arrayOfObjects),
    });
  });
  app.listen(port);
  console.log('Server started at http://localhost:' + port);


