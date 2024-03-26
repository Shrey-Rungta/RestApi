const mongoose = require('mongoose');
const Product=require('../model/productModel');


    exports.create_product= async (req,res,next)=>{

        try{
            const productObj=new Product({
                _id:new mongoose.Types.ObjectId(),
                name:req.body.name,
                price:req.body.price
            });
               const data= await productObj.save()
            //    .then((result)=>{
            //         console.log(result)
            //     }).catch((error)=>{
            //         console.log(error)
            //     });
            
                res.status(200).json({
                    code:1,
                    msg:"This is simple post request for product",
                    createdProduct:data,
                    error:null
                });

        }catch(err){
            res.status(200).json({
                code:0,
                msg:"Something went wrong",
                createdProduct:null,
                error:err
            });

        }
    }

    exports.get_products=async (req,res,next)=>{
        try{
              const data= await Product.find();
              if(data){
                res.status(200).json({
                    code:1,
                    msg:"This is simple post request for product",
                    data:data,
                    error:null
                })
              }else{
                res.status(200).json({
                    code:1,
                    msg:"No data available",
                    data:null,
                    error:null
              })
            }
        }catch(error){
            res.status(500).json({
                code:0,
                msg:"Something went Wrong",
                data:null,
                error:error
          })
        }
    }

    exports.get_product_ById = async (req,res,next)=>{
        try{
                    const data = await Product.findById(req.params.productId);
                    if(data){
                    res.status(200).json({
                        code:1,
                        message:"This is simple get request for single product",
                        data:data,
                        error:null
                    });
                    }else{
                        res.status(200).json({
                            code:1,
                            message:"no product is available with given id",
                            data:null,
                            error:null
                        });
                    }
        }catch(error){
            res.status(500).json({
                code:0,
                message:"Somthing went wrong",
                data:null,
                error:error
            })
        }
    }

    exports.update_product = async (req,res,next)=>{
        try{
                const data = await Product.findByIdAndUpdate(req.params.productId,req.body,{new:true,runValidator:true});
                res.status(200).json({
                    code:1,
                    message:"This is simple put request for single product",
                    data:data,
                    error:null
                });
        }catch(error){
            res.status(500).json({
                code:0,
                message:"somthing went wrong",
                data:null,
                error:error
            })
        }
    }

    exports.delete_product = async (req,res,next)=>{
        try{
            const data  = await Product.findByIdAndDelete(req.params.productId);
            if(!data){
               res.status(404).json({
                code:1,
                message:"No Product Found",
                data:data,
                error:null
               })
            }else{
                res.status(404).json({
                    code:1,
                    message:"delete request perform successfully",
                    data:data,
                    error:null
                   })
            }
        }catch(error){
            res.status(500).json({
                code:0,
                message:"Somthing went wrong",
                data:null,
                error:error
               })
        }
    }