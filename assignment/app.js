var express=require("express");
var app=express();

app.get("/",function(req,res){
	res.send("Hi There,Welcome to my assignment");
});
app.get("/speak/:animal",function(req,res){
		var sounds={
			pig:"Oink",
			cow:"Moo",
			dog:"Woof Woof",
		};
	var animal=req.params.animal;
	var sound=sounds[animal];
	res.send("The "+animal+" says '"+sound+"'");
	
});
app.get("/repeat/:word/:num",function(req,res){
	var str='';
	for(var i=0;i<req.params.num;i++){
		str=str+req.params.word+" ";
	}
	res.send(str);
});
app.get("*",function(req,res){
	res.send("I am sorry. What are you doing with your life?");
});
app.listen(3000,function(){
	console.log("Server started");
});