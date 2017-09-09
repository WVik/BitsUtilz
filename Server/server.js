var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var fs = require('fs');
var multer = require('multer');
var path = require('path');


// When making a post request to uploads, we can generate an ID for that item, and save it by that name. At the same time, the
// same ID will be added to the item database and the user db as well. 
app.use('/upload/:uid',function(req,res,next){
  req.filename = req.params.uid;
  next();
})

var storage = multer.diskStorage({
	destination: function(req, file, callback) {

		callback(null, __dirname+'/img/images')
	},
	filename: function(req, file, callback) {
    var name = req.filename + '-' + Date.now()+ path.extname(file.originalname);

		callback(null, name)
	}
})

var upload = multer({storage:storage}).single('image');

mongoose.connect('mongodb://localhost/bitsaa');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'true'}));

var Review = new mongoose.Schema({
  timestamp:Date,
  user:String,
  item:String,
  response:String,
  isPositive:Boolean,
  rating:Number
});



var Item = mongoose.model('Item', {
    title: String,
    description: String,
    price: Number,
    timestamp : String,
    views: Number,
    isListed:Boolean,
    reviews:[{type: mongoose.Schema.ObjectId, ref: 'Review'} ],
    id: String,
    category: String,
    images: String,
    type: Number
});

var User = mongoose.model('User', {
  name: String,
  bitsId: String,
  uid: String,
  email: String,
  postedItems: [String],
  currentItems: [String],
  picture: String,
  //should we keep items as a subcollection of Users or store just the ids of the items, mongo must be effecient if its a relational database
  address: String,
  wishlist: [String],
  clubAccess: [String],
  favourites: [String]
});


var testItem = Item({title: "Bose Headphones", description:"Brand new Headphones",price:"5550", date_posted:"27-07-17", id:"001"}).save(function(err){
  if(err) throw err;
  console.log("Item saved!");
});

var testUser = User({name: "Vikram", id:"2015B4A7436P", adress:"VK", uid:"012",favourites:["001", "002", "003", ""] }).save(function(err){
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


// User Info (Profile) : /userinfo/uid
// Followed news: /news/uid(of user)
// All items listed: /items
// All news items: /news

app.post('/upload/:uid', upload, function(req, res) {
  if (req.file) {
    //console.dir(req.file);
    console.log(req.name);
    return res.end('Thank you for the file');
  }
  res.end('Missing file');
});



// --------------------------Users-----------------------------


//This request handles the profile of the user.
app.get('/userinfo/:uid', function(req,res){
  var user = User.findOne({'uid': req.params.uid},function(err,user){
    if(err)
      throw err;
    console.log(user);
    res.json(user);
  });
})

app.post('/followed/:uid/:clubs', function(req,res){
  clubs = req.body;
  var user = Users.findOne({'uid' : req.params.uid},function(err, user){
    if(err)
      throw err;
    user.favourites = clubs;
    })
})


// ----------------------Items---------------------

//Request handler to show all listed items in the database
app.get('/items/',function(req,res){
  var items = Item.find({ },function(err,items){
    if(err)
      throw err;
    res.json(items);
  })
})

//Items of particular category
/*app.get('/items/category/:category', function(req,res){
  var items = Item.find({'category':req.params.category},function(err,items){
    if(err)
    throw err;
    res.json(items);
  }
})
*/



app.get('/uploads/thumbnails/:id', function(req,res){
  var id = req.params.id;
  res.sendFile(__dirname+'/img/images/'+id+'.png');
})



// -----------------------News--------------------------

//Request handler to show all news items in the database
app.get('/news',function(req,res){
  var news = NewsItem.find({}, function(err,news){
    if(err)
      throw err;
    res.json(news);
  })
});

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



app.get('/test',function(req,res){
  res.send("Hello!");
})

app.listen(8500);
