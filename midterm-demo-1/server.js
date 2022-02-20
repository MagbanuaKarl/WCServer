///////////////////////////////////////////
// Activity Name: thirdExpress.js        //
// Author Name : Magbanua Karl Caniel D. //
// Section and Code : WD-202 / 2083      //
///////////////////////////////////////////

var express = require('express');
var app = express();

//This responds with "Hello World" on the homepage
app.get('/', function (req, res){
    console.log("There is GET request for the homepage!")
    res.send('Here is the GET Method!')

})

//This responds a GET request for the /list_user page.
app.get('/list_user', function(req, res){
    console.log("Got a GET request for /list_user")
    res.send('This is Page Listing')
})

//This responds a GET request for abcd, ab123cd
app.get('/ab*cd', function(req, res){
    console.log("Got a GET request for /ab*cd")
    res.send('Pattern Match Page')
})

var server = app.listen(4000, function (){
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%$:%$", host, port)
})