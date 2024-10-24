const  serer1=require('http');// IT IS A IN-BUILT MODULE
const dt= require('./myfirstmodule');
const webserver=serer1.createServer((req,res)=>{
    const add=dt.add(3,2);
    const sub=dt.sub(3,2);
   res.write("Current time is "+dt.myDateTime());
   res.write(`The add is ${add} and the sub is ${sub}`);
    res.end("Hello REC");
});
webserver.listen(3500,()=>{
console.log("server is  running in http://localhost:3500");
});
