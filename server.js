var express = require('express');
var formidable = require('formidable');

var app = express();
app.set('view engine', 'ejs');

app.use("/public", express.static(__dirname + '/public'));


app.use(express.static('public'));
app.get('/',function(req,res){
         res.sendFile( __dirname + "/" + "index.html" );

});


app.get('/marriage',function(req,res){
         res.sendFile( __dirname + "/public/" + "marriage.html" );

});




var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
