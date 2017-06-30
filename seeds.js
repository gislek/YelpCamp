var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data  = [
    {
        name: "Clouds Rest",
        image: "https://images.unsplash.com/photo-1470246973918-29a93221c455?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=2e0c7ab322888c2775c7796455a6335c",
        description: "Lorem ipsizzle dolor pizzle phat, consectetuer adipiscing i'm in the shizzle. Nullam sapien velit, aliquet volutpizzle, suscipizzle ass, gravida vel, shiznit. Pellentesque pimpin' brizzle. Sizzle eros. Boofron dolor dapibizzle turpizzle tempizzle i'm in the shizzle. Boofron pellentesque nibh izzle turpizzle. Shizzlin dizzle izzle fizzle. Break yo neck, yall eleifend break yo neck, yall nisi. In hac habitasse platea dictumst. Mofo dapibus. Uhuh ... yih! tellus dawg, pretizzle , boom shackalack ac, eleifend vitae, nunc. For sure suscipizzle. Integer semper velit sizzle purizzle."
        
    },
    {
        name: "Desert Mesa",
        image: "https://images.unsplash.com/photo-1432817495152-77aa949fb1e2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=dcacfd227f272fd015c2525d172f54c0",
        description: "Julia roberts be kind rewind carlton dance roseanne. Skate tees sports utility vehicles good will hunting home improvement airwalk. Fila ac slater tommy hilfiger turtlenecks, velcro sneakers union jack mazda mpv bike caps tae bo wonderwall. Gangsta’s paradise uncle phil dsl overalls, royal stewart tartan wild cherry pepsi shania twain apollo 13 reebok pumps mario lemieux."
        
    },
    {
        name: "Canyon Floor",
        image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=efecec5744914b76ac1c34158d7779f0",
        description: "Troll dolls dial-up britpop floppy disk mazda mpv. Free willy nickelodeon boo-ya harrison ford smashing pumpkins jonathan taylor thomas, leopard print tlc snapback hats kazaa braveheart. Toy story boy meets world atlanta braves when you’re lost out there and you’re all alone babyface, piercings I don’t want no scrubs overalls gettin’ jiggy wit it. "
        
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
                            text: "Lorizzle tellivizzle yo mamma bow wow wow amizzle, consectetuer doggy elit. Shut the shizzle up break yo neck, yall velizzle, bow wow wow volutpizzle, dope tellivizzle, gravida vizzle, bling bling. Pellentesque eget tortor. That's the shizzle phat. Doggy at shizzle my nizzle crocodizzle dapibizzle doggy tempus crazy. Maurizzle yo nibh break it down turpizzle. Yo izzle mofo. Pellentesque pot rhoncizzle mah nizzle. In hac habitasse fo shizzle dictumst. The bizzle dapibus. Curabitizzle tellizzle urna, mofo eu, black nizzle, eleifend vitae, nunc. Pimpin' suscipit. Cool sempizzle sheezy sed yippiyo.",
                            author: "Snoop Dogg"
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

