const express = require("express");

const app = express();
const port = 3000;

app.get("/success", function(req,res){
  res.sendFile(__dirname + "/contact-me.html");
})

app.post("/success", function(req,res){
  res.send("succesful");
})





app.listen(port, function(){
  console.log(`Code running on ${port}`)
})
