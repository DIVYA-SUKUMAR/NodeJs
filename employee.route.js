var express=require('express')
var router=express.Router();
var employees=[];

router.get("/regemployee",function(req,res){
    res.sendFile(__dirname+"/emp.html");
})
router.get("/emplist",function(req,res){
    res.render("employees",{
        allemployees:employees
    })
})
router.post("/empregister",function(req,res){
    employees.push(req.body);
    res.send("Employee Registration Sucessfull")
})


module.exports=router;