var mysql= require("mysql");

var db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"testdb"
});

db.connect((err)=>{
    if(err)throw err;
    else{
        console.log("connected db...");
    }
});

module.exports=db