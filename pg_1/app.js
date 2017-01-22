var express = require("express");

var app=express();


app.get("/",function(req,res){
	
res.send("I am comming!!")


});

app.listen(3001, function () {

  var host = this.address().address
  var port = this.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
