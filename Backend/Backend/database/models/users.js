import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    user_name:{
        type: String,
        required: true
    },
    user_lastname:{
        type: String,
        required: true
    },
    user_email:{
        type: String,
        required: true
    },
    user_remail:{
        type: String,
        required: true,
        trim: true
    },
    user_tel:{
        type: String,
        required: true,
    },
    user_dir:{
        type: String,
        required: true,
        trim: true
    },
    user_city:{
        type: String,
        required: true,
        trim: true
    },
    user_country:{
        type: String,
        required: true
    },
    user_password:{
        type: String,
        required: true
    },
    user_rpassword:{
        type: String,
        required: true
    },
    user_img:{
        url: String,
        public_id: String
    },
})


export default mongoose.model('Users', userSchema)