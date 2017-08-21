var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/BitsUtilz');
app.use(bodyParser.urlencoded({'extended':'true'}));


var Item = mongoose.model('Item', {
    title: String,
    description: String,
    price: Number,
    date-posted: String,
    views: Number
});

var User = mongoose.model('User', {
  name: String,
  id: String,
  uid: String
});


app.get('/items', function(req,res){
  if(err)
    res.send(err);

  // There's a module for Images which we can use.
})

//This request handles the profile of the user.
app.get('/userinfo/:uid', function(req,res){
  if(err)
    res.send(err);

  var user = User.find({uid: req.params.uid});
  var userData = {'name':user.name, 'id':user.id};
  res.send(json.stringify(userData));

})
