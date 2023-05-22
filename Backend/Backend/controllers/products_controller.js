import  Products  from '../database/models/products.js'
import { deleteImage, uploadImage } from '../libs/cloudinary.js'
import fs from 'fs-extra'


// Obtener todos los productos
export const getProducts = async (req, res) => {
    try {
        const products = await Products.find()
        res.send(products)
    } catch(error){
        return res.status(404).send(error.message)
    }
}

export const getProductID = async (req, res) => {
    try {
        const products = await Products.findById(req.params.id)
        res.send(products)
    } catch (error) {
        return res.status(404).send(error.message)        
    }
}


// Registrar un producto
export const setProduct =  async(req, res) => {
    try {
        const {product_name, product_desc, product_price, product_stock, product_category, product_type, product_quantity,  } = req.body;
        let product_image;
        if ( req.files.product_image  ){
           const result =  await uploadImage(req.files.product_image.tempFilePath)
           /* await fs.remove(req.files.product_image.tempFilePath) */
           product_image = {
            url: result.secure_url,
            public_id: result.public_id
           }
           console.log(result)
           console.log(product_image)
        }
        const newProduct = new Products({product_name, product_desc, product_price, product_stock, product_category, product_type, product_quantity, product_image});
        newProduct.save();
        return res.send(newProduct);
    } catch (error) {
        console.log(error)
        return res.status(404).send(error.message) 
    }
}


export const updateProduct = async (req, res) => {
try {
    const updateProduct = await Products.findByIdAndUpdate(req.params.id, req.body)
    console.log('Actualizacion correcta \n',updateProduct)
    return res.send('recibido')
} catch (error) {
    return res.status(404).send(error.message) 
    }   
}
export const deleteProductID = async (req, res) => {
try {
    const deleteProduct = await Products.findByIdAndRemove(req.params.id)
    if(!deleteProduct) return res.sendStatus(404)
    if(deleteProduct.product_image.public_id){
        await deleteImage(deleteProduct.product_image.public_id)
    }
    return res.send('deleted')
} catch (error) {
    return res.status(404).send(error.message) 
    }
}

