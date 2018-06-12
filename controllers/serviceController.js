const fs = require('fs');
 var results;
 fs.readFile('json/services.json', 'utf8',(err,data)=>{
     if (err){
         throw err;
         
     }else{
         results=JSON.parse(data)
     }
 })

 exports.Servicepage=(req,res)=>{
     res.render('service',{title:'Service', Services:results})
 }