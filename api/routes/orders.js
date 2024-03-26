const express=require ('express');
const router=express.Router();
const orderModelRequest=require('../controller/order.model');


router.get("/",orderModelRequest.get_orders);
// (req,res,next)=>{
//     res.status(200).json({
//         msg:"This is simple get request for order"
//     });
// });

router.post("/",orderModelRequest.create_order);
// (req,res,next)=>{
//     const orderObj={
//         name:req.body.name,
//         price:req.body.price
//     }
//         res.status(200).json({
//             msg:"This is simple post request for order",
//             createdOrder:orderObj
//         });
// });

router.get("/:orderId",orderModelRequest.get_order_ById);
// (req,res,next)=>{
//     res.status(200).json({
//         msg:"This is simple get request for single order"
//     });
// });

// router.put("/:orderId",(req,res,next)=>{
//     res.status(200).json({
//         msg:"This is simple put request for single order"
//     });
// });

router.delete("/:orderId",orderModelRequest.delete_order);
// (req,res,next)=>{
//     res.status(200).json({
//         msg:"This is simple delete request for single order"
//     });
// });

module.exports = router;