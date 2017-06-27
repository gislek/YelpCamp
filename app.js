var express = require("express");
var app = express();

app.set("view engine", "ejs");




app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    var campgrounds = [
            {name: "Salmon Creek", image: "https://farm1.staticflickr.com/22/31733208_3190a1e982.jpg"},
            {name: "Granite Hill", image: "https://farm9.staticflickr.com/8038/7930463550_42c3f82870.jpg"},
            {name: "Mountain Goat's Rest", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg"}
        ]
        
        res.render("campgrounds", {campgrounds: campgrounds});
});





app.listen(process.env.PORT, process.env.IP, function() {
    console.log("YelpCamp server running...");
});