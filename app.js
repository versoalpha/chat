const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));

var oi = "oooo"


 

var fs = require('fs')













app.get('/api/users', function(req, res) {
    res.send({
      'w': oi,
    });
  });

  app.use(express.json());
app.use(express.urlencoded({ extended: true }));

  app.post('/api/users', function(req, res) {
    const name = req.body.name;
    const text1 = req.body.text1;

    fs.readFile('input.json', 'utf-8', function(err, data) {
        if (err) throw err
    
        var arrayOfObjects = JSON.parse(data)
        arrayOfObjects.users.push({
            name: req.body.name,
            age: req.body.text1
        })
    
        console.log(arrayOfObjects)
    
        fs.writeFile('input.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
            if (err) throw err
            console.log('Done!')
        })
    })
    
    console.log(req.body);
    res.send({
      'name': "foi",
    });
  });
  app.listen(port);
  console.log('Server started at http://localhost:' + port);


