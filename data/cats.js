var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");
var catSchema= new mongoose.Schema({
	name:String,
	age:Number,
	temperament:String
});

var Cat=mongoose.model("cat",catSchema);

// var george= new Cat({
// 	name:"Mrs.Norris",
// 	age:8,
// 	temperament:"Evil"
// });

// george.save(function(err,cat){
// 	if(err){
// 		console.log("Error");
// 	}else{
// 		console.log("Saved");
// 		console.log(cat);
// 	}
// });
Cat.create({
	name:"Snow",
	age:10,
	temperament:"Noice"
},function(err,cat){
	if(err){
		console.log(err);
	}else{
		console.log(cat);
	}	
});

Cat.find({},function(err,cats){
	if(err){
		console.log("ERROR");
		console.log(err);
	}else{
		console.log("All the cats");
		console.log(cats);
	}
});