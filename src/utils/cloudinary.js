import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { ApiError } from "./ApiErros.js";

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

const deleteOnCloudinary = async (fileUrl) => {
  try {
    if (fileUrl) {
      const parts = fileUrl.split("/");
      const publicIdWithExtension = parts[parts.length - 1]; // Get the last part of the URL
      const publicId = publicIdWithExtension.split(".")[0]; // Remove the file extension

      const result = await cloudinary.uploader.destroy(publicId);
      if (!result) {
        console.log("Cloudinary image delete failed");
      }
    } else {
      return;
    }
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while deleting the cloudinary image"
    );
  }
};

export { uploadOnCloudinary, deleteOnCloudinary };
