///////////////////////////////////////////
// Activity Name: firstExpress.js        //
// Author Name : Magbanua Karl Caniel D. //
// Section and Code : WD-202 / 2083      //
///////////////////////////////////////////

var express = require("Express");

var app = express();

app.get("/", function(request, response){
    response.send("Hello World");
});

app.listen(3000, function(){
    console.log('Server Runnin at http://localhost:3000');
});