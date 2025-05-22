import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'


const uploadOnCloudinary = async (localFilePath) => {
    try {
        // Configuration
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_SECRET_KEY
        });
        if (!localFilePath) return null

        // upload the files to cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            folder : 'image'
        })
        // file uploaded successfully 
        fs.unlinkSync(localFilePath)   // remove the locally saved temporary file
        return response;
    } catch (error) {
        console.log("unexpected error occured while uploading to cloudinary", error)
        fs.unlinkSync(localFilePath)   // remove the locally saved temporary file
        return null
    }
}

export { uploadOnCloudinary }