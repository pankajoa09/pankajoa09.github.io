var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");



router.use(function (req,res,next) {
    console.log("/" + req.method);
    next();
});

router.get("/",function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
});



app.use("/",router);
app.use(express.static(__dirname));




app.listen(3000,function(){
    console.log("Live at Port 3000");
    console.log(__dirname);
    console.log(path.join(__dirname,'assets/'));
});
