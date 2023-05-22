import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: "dyf5l1sxf",
    api_key: "248749223285532",
    api_secret: "IfEcAf_nnRqB36fWcmEhvsh-y9g"
})

export const uploadImage =  async filePath =>{
    return await cloudinary.uploader.upload(filePath, {
        folder: 'products',
        filePath: './upload'
    })
}

export const deleteImage = async id =>{
    return await cloudinary.uploader.destroy(id)
}