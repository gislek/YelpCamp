var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


var campgrounds = [
            {name: "Salmon Creek", image: "https://farm1.staticflickr.com/22/31733208_3190a1e982.jpg"},
            {name: "Granite Hill", image: "https://farm9.staticflickr.com/8038/7930463550_42c3f82870.jpg"},
            {name: "Mountain Goat's Rest", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"},
            {name: "Salmon Creek", image: "https://farm1.staticflickr.com/22/31733208_3190a1e982.jpg"},
            {name: "Granite Hill", image: "https://farm9.staticflickr.com/8038/7930463550_42c3f82870.jpg"},
            {name: "Mountain Goat's Rest", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"}
        ];


app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
   //get data from form and add to campgrounds array
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name: name, image: image};
   campgrounds.push(newCampground);
   
   //redirect back to campgrounds
   res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new.ejs"); 
});



app.listen(process.env.PORT, process.env.IP, function() {
    console.log("YelpCamp server running...");
});