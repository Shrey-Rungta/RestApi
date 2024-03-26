require('dotenv').config();
const http=require ('http');
const app=require('./app');

// let server =http.createServer((req,res)=>{
//     res.write("Server created successfully!!");
//     res.end();
// });
let port=process.env.PORT || 8888;
let host=process.env.HOST;

let server =http.createServer(app);


server.listen(9999,()=>{
    console.log(`My server get started on ${host}:${port}`);
})