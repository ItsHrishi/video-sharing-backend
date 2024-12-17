import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has been uploaded
    // console.log("The file has been uploaded on cloudinary : ", response.url);
    fs.unlinkSync(localFilePath);
    // console.log(response);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // removes the locally uploaded file as the operation got failed
    return null;
  }
};

export { uploadOnCloudinary };
