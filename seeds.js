var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data  = [
    {
        name: "Clouds Rest",
        image: "https://images.unsplash.com/photo-1470246973918-29a93221c455?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=2e0c7ab322888c2775c7796455a6335c",
        description: "blah blah blah"
        
    },
    {
        name: "Desert Mesa",
        image: "https://images.unsplash.com/photo-1432817495152-77aa949fb1e2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=dcacfd227f272fd015c2525d172f54c0",
        description: "blah blah blah"
        
    },
    {
        name: "Canyon Floor",
        image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=efecec5744914b76ac1c34158d7779f0",
        description: "blah blah blah"
        
    }
];


function seedDB() {
    // Remove all campgrounds
    Campground.remove({}, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("Removed campgrounds!");    
        }
        
        // Add campgrounds
        data.forEach(function(seed) {
            Campground.create(seed, function(err, campground) {
                if(err) {
                    console.log(err);
                } else {
                    console.log("Added a campground");
                    // Create a comment
                    Comment.create(
                        {
                            text: "This place is greate, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment) {
                            if(err) {
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            }) 
        });
        
        // Add comments
        });
};

module.exports = seedDB;

