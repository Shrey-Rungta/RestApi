require('dotenv').config();
const express=require ('express');
const app=express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes= require('./api/routes/products');
const orderRoutes= require('./api/routes/orders');
const userRoutes = require('./api/routes/users');

// app.use((req,res,next)=>{
//     res.status(200).json({
//         msg:"This is simple request"
//     });
// });
app.use(morgan("dev"));

mongoose.connect("mongodb+srv://rungtashrey6:"+process.env.MONGO_ATLAS_PW+"@cluster0.g3zq0hw.mongodb.net/",{
    useNewUrlParser:true
}).then(() => console.log('Connected successfully with MongoDB Atlas!'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Header","Origin,X-Requested-Width,Content-Type,Accept,Authorization");
    res.header("Access-Control-Allow-Crendentails",true);
    if(res.header==="OPTIONS"){
        res.header("Access-Control-Allow-Method","PUT","POST","DELETE","GET");
        return res.status(200).json();
    }
    next();
})

app.use("/products",productRoutes);
app.use("/orders",orderRoutes);
app.use("/users",userRoutes);

app.use((req,res,next)=>{
    const error = new Error("Route not Found");
    next(error);
})
app.use((error,req,res,next)=>{
    res.status(500).json({
        error:error.message
    })
})
module.exports=app;