var express = require("express");
var mysql = require("mysql");
var cors = require("cors");
var bodyparser = require("body-parser");
var app=express();

const db =require('./db/conn');

app.use(cors());
app.use(bodyparser.json());


app.post("/api/register",  (req,res)  => {
    console.log(req.body);
    const today = new Date();
    const birthDate = new Date(req.body.DOB);
    const age = today.getFullYear() - birthDate.getFullYear();
    console.log("today",today );
    console.log("birthDate",birthDate);
    console.log("age",age);
    if(age<=14)
    {res.send("Age should be above 14 years" )}
    else{   
         const sql= `INSERT INTO regdetail(name,email,password,city,DOB)
    VALUES('${req.body.name}','${req.body.email}','${req.body.password}','${req.body.city}','${req.body.DOB}')
`;

db.query(sql,(err,result)=>{
 if(err) throw err;
res.send("data registerd")
})
    }
      
});

app.get('/api/read',(req,res)=>{
    let sql=`SELECT * FROM regdetail `;
    db.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
})


app.get('/api',(req,res)=>{
    res.send('api created');
});






app.listen("8080",()=>{
    console.log("server is running on 8080..");
})