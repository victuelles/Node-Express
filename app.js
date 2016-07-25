var express=require("express"); //web framework

var app=express();
var port=5000;

app.use(express.static('public'));
app.use(express.static('src/views'));


app.get('/',function(req,res){

	res.send('Hello world!');
});

app.get('/books',function(req,res){

	res.send('Hello Books!');
});

app.listen(port,function(err){

	console.log("Running server on port "+port);
});