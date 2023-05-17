import { response } from "express";
import mongoose from "mongoose";
import { productModel } from "./productController.js";
import cartItemSchema from "../models/cartItem.js";

const cartModel = mongoose.model("cart", cartItemSchema);

export function AddItem(req,res){
  cartModel.find({itemId: req.body.itemId}).then((response)=>{
    if(response.length <=0){
      const newCartItem = new cartModel(req.body);
      newCartItem.save().then((response)=>{
        res.status(200).json(response);
      })
    }else{
      if(response[0].quantity + req.body.quantity >= 0 ){
        cartModel.updateOne({itemId: req.body.itemId},{$inc: {quantity: req.body.quantity}}).then((response)=>{
          res.status(200).json(response);
        })
      }else{
        cartModel.deleteOne({itemId: req.body.itemId}).then((response)=>{
          res.status(200).json(response);
        }
        )        
      }     
      
    }
  })
}
export function getCart(req,res){
  cartModel.find({}).populate("itemId").then((response)=>{
    res.status(200).json(response);
  })
}
