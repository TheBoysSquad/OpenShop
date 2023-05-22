import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
    },
    product_desc: {
        type: String,
        required: true,
    },
    product_price: {
        type: Number,
        required: true,
    },
    product_stock: {
        type: String,
        required: true,
    },
    product_category: {
        type: String,
        required: true,
    },
    product_type: {
        type: String,
        required: true,
    },
    product_quantity: {
        type: Number,
        required: true,
    },
    product_image: {
        url: String,
        public_id: String
    }
})


export default mongoose.model('Products', productSchema)