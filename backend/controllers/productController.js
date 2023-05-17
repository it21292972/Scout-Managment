import productSchema from "../models/SKproduct.js";
import express from "express";
import mongoose from "mongoose";

export const productModel = mongoose.model("SKproduct", productSchema);

export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await productModel.find({});
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

export const getProductById = async (req, res) => {
  try {
    const SKproduct = await productModel.findById(req.params.id);
    res.status(200).json(SKproduct);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

export const createProduct = async (req, res) => {
  try {
    const newProduct = new productModel(req.body);
    await newProduct.save();
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

export const editProduct = async (req, res) => {
  productModel.updateOne( {_id: req.params.id}, {$set : req.body}).then( (SKproduct) => {
    if (SKproduct) {
      res.status(200).json(SKproduct);
    }
  })
}

export const deleteProduct = async (req, res) => {
  try {
    const SKproduct = await productModel.findByIdAndDelete(req.params.id);
    res.status(200).json(SKproduct);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

//get products by category
export const getProductsByCategory = async (req, res) => {
  productModel.find({ category: req.params.id }, (error, products) => {
    if (error) {
      res.status(500).json({ error: error });
    } else {
      res.status(200).json(products);
    }
  })
}

//search products by name
export const searchProductsByName = async (req, res) => {
  productModel.find({ name: req.params.id }).then((response) => {
    res.status(200).json(response);
  })
}
