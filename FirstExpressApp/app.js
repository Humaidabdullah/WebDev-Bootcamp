var express=require("express");
var app=express();
//"/"=> "Hi There"
app.get("/",function(req,res){
	res.send("Hi There");
});
app.get("/bye",function(req,res){
	res.send("BYE BYE");
});
app.get("/dog",function(req,res){
	res.send("DID YOU MEAN DOG? :o ");
});

app.get("/r/:subredditName",function(req,res){
	 var subreddit=req.params.subredditName;
	res.send("WELCOME TO THE "+subreddit+" SUBREDDIT");
});
app.get("/r/:subredditName/comments/:id/:title",function(req,res){
		console.log(req.params);
	res.send("Wow you are doing really great");
});
app.get("*",function(req,res){
	res.send("Not defined Bruhh Sorry :D");
});
app.listen(3000,function(){
	console.log("Server has started");
});