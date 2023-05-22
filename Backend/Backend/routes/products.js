import { Router } from 'express'
import { setProduct, getProducts, updateProduct, deleteProductID, getProductID } from '../controllers/products_controller.js';
export const routes_products = Router();


routes_products.post('/products',  setProduct)
routes_products.get('/products', getProducts)
routes_products.get('/products/:id', getProductID)
routes_products.put('/products/:id',  updateProduct)
routes_products.delete('/products/:id',  deleteProductID)
