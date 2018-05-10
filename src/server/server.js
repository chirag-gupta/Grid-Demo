var express    = require('express')
var bodyParser = require('body-parser')
var shortid = require('shortid')
var util = require('util');
var fs = require('fs');
const http = require('http');
var service = require('./service');
var app  = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.json());  

var port = process.env.PORT || 3000

var router = express.Router();
// enable cors --not safe
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});
router.get("/getGridData", service.getData);
router.get("/getColumnNames" , service.getGridColumnName);
router.post("/postId" , service.postId);

// logging middleware
router.use(function(req, res, next) {
    console.log('\nReceived:',{url: req.originalUrl, body: req.body, query: req.query})
    next();
})

app.use('/api', router)
app.listen(port, () => console.log(`API running on localhost:${port}`))
