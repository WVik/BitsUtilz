var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var fs = require('fs');

mongoose.connect('mongodb://localhost/bitsaa');
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
    reviews:[{type: mongoose.Schema.ObjectId, ref: 'Review'} ],
    id: String
});

var User = mongoose.model('User', {
  name: String,
  id: String,
  uid: String,
  email: String,
  allItems: [String],
  currentItems: [String],
  picture: String,
  address: String,
  wishlist: [String],
  clubAccess: [String],
  favourites: [String]
});


var testItem = Item({title: "Bose Headphones", description:"Brand new Headphones",price:"5550", date_posted:"27-07-17", id:"001"}).save(function(err){
  if(err) throw err;
  console.log("Item saved!");
});

var testUser = User({name: "Vikram", id:"2015B4A7436P", adress:"VK", uid:"012",favourites:["001"] }).save(function(err){
  if(err) throw err;
  console.log("Item saved!");
});


var NewsItem = mongoose.model('NewsItem', {
  title: String,
  date_posted: String,
  club: String,
  likes: Number,
  id: String
});


//This request handles the profile of the user.
app.get('/userinfo/:uid', function(req,res){
  var user = User.findOne({'uid': req.params.uid},function(err,user){
    if(err)
      throw err;
    console.log(user);
    res.json(user);
  });
})

//Request handler to show all listed items in the database
app.get('/items/',function(req,res){
  var items = Item.find({ },function(err,items){
    if(err)
      throw err;
    res.json(items);
  })
})

//Request handler to show all news items in the database
app.get('/news',function(req,res){
  var news = NewsItem.find({}, function(err,news){
    if(err)
      throw err;
    res.json(news);
  })
})

app.get('/news/:uid',function(req,res){
  var uid = req.params.uid;
  var newsArray = [];
  var user = User.findOne({'uid':uid},function(err,user){
      var favourites = user.favourites;
      console.log(favourites);
      favourites.forEach(function(favourite){
        Item.findOne({'id':favourite},function(err,item){
          newsArray.push(item.id);
          //console.log(newsArray);


        })
        res.send(newsArray);

      })
      //console.log(newsArray);
  })
})



app.get('/uploads/items/:id', function(req,res){
  var id = req.params.id;
  res.sendFile(__dirname+'/img/images/'+id+'.png');
})




app.get('/test',function(req,res){
  res.send("Hello!");
})

app.listen(8500);
