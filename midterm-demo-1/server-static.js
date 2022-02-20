////////////////////////////////////////////
// Activity Name: fourthExpress.js        //
// Author Name : Magbanua Karl Caniel D.  //
// Section and Code : WD-202 / 2083       //
////////////////////////////////////////////

var express = require('express');
var app = express();

app.unsubscribe(express.static('public'));

app.get('/', function(req, res){
    res.send('You have succesfully created second app!')
})

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%$:%$", host, port)
})