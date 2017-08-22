var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var fs = require('fs');

mongoose.connect('mongodb://localhost/BitsUtilz');
app.use(bodyParser.urlencoded({'extended':'true'}));

var Review = new mongoose.Schema({
  date:Date,
  user:String,
  response:String,
  isPositive:Boolean,
  rating:Number
});

var Item = mongoose.model('Item', {
    title: String,
    description: String,
    price: Number,
    date_posted: String,
    views: Number,
    reviews:[{type: mongoose.Schema.ObjectId, ref: 'Review'} ]
});

var User = mongoose.model('User', {
  name: String,
  id: String,
  uid: String,
});

var NewsItem = mongoose.model('NewsItem', {
  title: String,
  date_posted: String,
  club: String,
  likes: Number,
  id: String
});

/*app.get('/items', function(req,res){
  Item.find({},function(data))


  // There's a module for Images which we can use.
})
*/

//This request handles the profile of the user.
app.get('/userinfo/:uid', function(req,res){
  if(err)
    res.send(err);

  var user = User.find({uid: req.params.uid});
  var userData = {'name':user.name, 'id':user.id};
  res.send(json.stringify(userData));

})



app.get('/uploads/items/:id', function(req,res){
  var id = req.params.id;
  res.sendFile('./img/images/'+id);

})

app.listen(8500);
