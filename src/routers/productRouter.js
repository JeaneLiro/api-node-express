import express from 'express'
import getProduct from '../controllers/Product/getProduct.js';
import insertProduct from '../controllers/Product/insertProduct.js';
import updateProduct from '../controllers/Product/updateProduct.js';
import deleteProduct from '../controllers/Product/deleteProduct.js';



const productRouter = express.Router();

productRouter.get('/', getProduct) //ler

productRouter.post('/', insertProduct) //

productRouter.put('/', updateProduct)

productRouter.delete('/', deleteProduct)

export default productRouter;