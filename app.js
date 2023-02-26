const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res){
 var today = new Date();
 var currentday = today.getday();
 console.log(currentday);
})



app.listen(3000, function(){
    console.log("runnins!");
})
