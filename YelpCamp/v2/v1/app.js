var express=require("express");
var app=express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/yelpcamp",{useNewUrlParser:true});

app.set("view engine","ejs");

var campgroundSchema=mongoose.Schema({
	name:String,
	image:String,
	description:String
});

var Campground=mongoose.model("Campground",campgroundSchema);

// Campground.create({
// 	name:"Humaid",
// 	image:"https://cdn2.howtostartanllc.com/images/business-ideas/business-idea-images/Campground.jpg",
// 	description:"This is the most beautiful destination in the whole world"
// },function(err,campground){
// 	if(err){
// 		console.log("ERROR");
// 	}else{
// 		console.log("Created a new campground");
// 	}
// });


//SCHEMA


// var campgrounds=[
// 		{name:"Salmon Creek",image:"https://cdn2.howtostartanllc.com/images/business-ideas/business-idea-images/Campground.jpg"},
// 		{name:"Humaid",image:"https://cdn2.howtostartanllc.com/images/business-ideas/business-idea-images/Campground.jpg"},
// 		{name:"Colt",image:"https://cdn2.howtostartanllc.com/images/business-ideas/business-idea-images/Campground.jpg"},
// 	];

app.get("/",function(req,res){
	res.render("landing");
});


app.get("/campgrounds",function(req,res){
	Campground.find({},function(err,allCampgrounds){
		if(err){
			console.log("ERROR");
		}else{
				res.render("index",{
			campgrounds:allCampgrounds
	});
		}
	});
	
});


app.get("/campgrounds/new",function(req,res){
	res.render("new");
});

app.post("/campgrounds",function(req,res){
	// get data from form and add to campgrounds 
	// redirect back to campground page
	var name=req.body.name;
	var image=req.body.image;
	var description=req.body.description;
	var newCampground={name:name,image:image,description:description};
	Campground.create(newCampground,function(err,campground){
			if(err){
				console.log("ERROR");
			}else{
			res.redirect("/campgrounds");
			}
	});
});
// show us more info about one Campground
app.get("/campgrounds/:id",function(req,res){
	Campground.findById(req.params.id,function(err,founcCampground){
		if(err){
			console.log(err);
		}else{
			res.render("show",{
				campground:founcCampground
			});
		}
	});

});
app.listen(3000,function(){
	console.log("YelpCamp Server started");
});