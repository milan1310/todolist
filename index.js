//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");
const app = express();


let addItems= [];
let workItem = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get("/", function(req, res){
    let day = date.getDate();
    res.render('list', {listTitle : day,addListItem : addItems});
});

app.post("/",function(req, res){
    let addItem = req.body.addNewItem;
    console.log(req.body);
    
    if(req.body.button === "Work"){
        workItem.push(addItem);
        res.redirect("/work");
    }else{
        addItems.push(addItem);
        res.redirect("/");
    } 
});

app.get("/work",function(req,res){
    res.render('list', {listTitle : "Work list",addListItem : workItem});
});

app.get("/about",function(req,res){
    res.render('about');
})


var port = process.env.PORT;
if ( port =="") {
  port=3000;
}


app.listen(port, function() {
  console.log("Server started  success fully");
});


