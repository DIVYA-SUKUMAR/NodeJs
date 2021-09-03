// var express = require('express');
// var app = express();
// var students=[]
// app.use(express.urlencoded({extended:true}))
// app.use(express.json());
// app.set('view engine','pug')
// app.set('views','./views');

// app.get('/', function (req, res) {
//     res.render('students', {
//       allstudents:students
//     })
//  })

// app.get('/reg', function (req, res) {
//     res.sendFile(__dirname+"/reg.html");
//  })
//  app.get('/register', function (req, res) {
//     console.log("Request Message Request:",req.query)
//     students.push(req.query);
//     res.render("students" , {
//        allstudents:students
//     })   
// })

//  app.listen(8090,function() {
//      console.log("Listening to port 8090")
//  })

var express=require("express");
var app=express();
var students=[]
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.set('view engine', 'pug');
app.set('views','./views');
 
app.get("/",function(req,res){
    res.render("students",{
        allstudents:students
    })
})
 
app.get("/reg",function(req,res){
    res.sendFile(__dirname+"/reg.html");
})
 
app.get("/register",function(req,res){
    console.log("req query param::",req.query)
    students.push(req.query);
    res.render("students",{
        allstudents:students
    })
})
app.use("/")
app.listen(8090,function(){
    console.log("listening on 8090")
})