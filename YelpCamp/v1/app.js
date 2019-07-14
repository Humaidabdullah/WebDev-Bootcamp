var express=require("express");
var app=express();
app.set("view engine","ejs");
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

var campgrounds=[
		{name:"Salmon Creek",image:"https://cdn2.howtostartanllc.com/images/business-ideas/business-idea-images/Campground.jpg"},
		{name:"Humaid",image:"https://cdn2.howtostartanllc.com/images/business-ideas/business-idea-images/Campground.jpg"},
		{name:"Colt",image:"https://cdn2.howtostartanllc.com/images/business-ideas/business-idea-images/Campground.jpg"},
	];

app.get("/",function(req,res){
	res.render("landing");
});


app.get("/campgrounds",function(req,res){
	res.render("campgrounds",{
		campgrounds:campgrounds
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
	var newCampground={name:name,image:image};
	campgrounds.push(newCampground);
	res.redirect("/campgrounds");
});

app.listen(3000,function(){
	console.log("YelpCamp Server started");
});