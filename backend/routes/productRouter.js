import express from 'express';
import mongoose from 'mongoose';
import { createProduct, deleteProduct, editProduct, getAllProducts, getProductById, getProductsByCategory, searchProductsByName } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get('/', getAllProducts)
productRouter.get('/:id', getProductById)
productRouter.post('/', createProduct)
productRouter.put('/:id', editProduct)
productRouter.delete('/:id', deleteProduct)
productRouter.get('/category/:id', getProductsByCategory)
productRouter.get('/search/:id', searchProductsByName)

export default productRouter
