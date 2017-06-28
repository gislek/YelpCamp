var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name: "Granite Hill",
//     image: "https://farm9.staticflickr.com/8038/7930463550_42c3f82870.jpg"
// }, function(err, campground){
//     if(err){
//         console.log("ERROR");
//         console.log(err);
//     } else {
//         console.log("NEWLY CREATED CAMPGROUND");
//         console.log(campground);
//     }
// });

// var campgrounds = [
//             {name: "Salmon Creek", image: "https://farm1.staticflickr.com/22/31733208_3190a1e982.jpg"},
//             {name: "Granite Hill", image: "https://farm9.staticflickr.com/8038/7930463550_42c3f82870.jpg"},
//             {name: "Mountain Goat's Rest", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
//             {name: "Salmon Creek", image: "https://farm1.staticflickr.com/22/31733208_3190a1e982.jpg"},
//             {name: "Granite Hill", image: "https://farm9.staticflickr.com/8038/7930463550_42c3f82870.jpg"},
//             {name: "Mountain Goat's Rest", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"}
//         ];


app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    Campground.find({}, function(err, campgrounds){
        if(err) {
            console.log(err);
        } else {
            res.render("campgrounds", {campgrounds: campgrounds});        
        }
    });
});

app.post("/campgrounds", function(req, res) {
   //get data from form and add to campgrounds array
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name: name, image: image};
   
   Campground.create(newCampground, function(err, campground){
       if(err){
            console.log(err);
       } else {
            res.redirect("/campgrounds");        
       }
   });
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new.ejs"); 
});



app.listen(process.env.PORT, process.env.IP, function() {
    console.log("YelpCamp server running...");
});