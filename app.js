var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Campground = require("./models/campground");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");



app.get("/", function(req, res) {
    res.render("landing");
});

// INDEX - show all campgrounds
app.get("/campgrounds", function(req, res) {
    Campground.find({}, function(err, campgrounds){
        if(err) {
            console.log(err);
        } else {
            res.render("index", {campgrounds: campgrounds});        
        }
    });
});

// CREATE - add new campground to DB
app.post("/campgrounds", function(req, res) {
   //get data from form and add to a new campgrounds object
   var name = req.body.name;
   var image = req.body.image;
   var desc = req.body.description;
   var newCampground = {name: name, image: image, description: desc};
   
   // Create a new campground and save to DB
   Campground.create(newCampground, function(err, campground){
       if(err){
            console.log(err);
       } else {
           // Redirect back to campgrounds page
            res.redirect("/campgrounds");        
       }
   });
});

// NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res) {
   
   res.render("new"); 
});

// SHOW - Show info about one campground
app.get("/campgrounds/:id", function(req, res) {
    // Find campground with the provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err) {
            console.log(err);
        } else {
            // Render show tempalte with that campground
            res.render("show", {campground: foundCampground});        
        }
    });
});



app.listen(process.env.PORT, process.env.IP, function() {
    console.log("YelpCamp server running...");
});