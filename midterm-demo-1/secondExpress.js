///////////////////////////////////////////
// Activity Name: secondExpress.js       //
// Author Name : Magbanua Karl Caniel D. //
// Section and Code : WD-202 / 2083      //
///////////////////////////////////////////

var express = require('express');
var app = express();

app.get("/", function (req, res) {
    res.send('You have succesfully created your second app!')
})

var server = app.listen(2001, function (){
    var host = server.address().address
    var port = server.address().port
    
    console.log("Exampole app listening at http://%$%$", host, port)
})
