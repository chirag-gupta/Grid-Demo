'use strict';
var path       = require('path');
var fs         = require('fs');
var datafile  = 'data.json';
var dataLocation = __dirname + '/data';
var express = require('express');
const bodyParser = require('body-parser');

var gridDataFileReader = {};
function readJsonFileSync(filepath, encoding){
    
    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return file;
}
gridDataFileReader.postId = function(req,res){
    res.status(200);
    res.send({"successfull":"ok"});
    
}

gridDataFileReader.getGridColumnName = function(req,res){
    res.send([ 'name', 'phone', 'email' , 'company', 'date_entry', 'org_num', 'address_1' , 'city',
  'zip', 'geo', 'pan', 'pin', 'id', 'status' , 'fee', 'guid', 'date_exit' ,  'date_first', 'date_recent', 'url' , 'submit']);
}

gridDataFileReader.getData = function(req,res){

    var filepath = __dirname + '/data/' + datafile;
    res.send(readJsonFileSync(filepath));
    
}

module.exports = gridDataFileReader;