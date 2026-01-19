import fs from "node:fs";
import v2 from "../config/cloudinary.config.js";

export const uploadImage = async (filePath) => {
  if (!filePath) return null;
  let result = await v2.uploader.upload(filePath, {
    folder: "blogApp",
    resource_type: "image",
    // transformation: { width: 360, height: 360, crop: "limit" },
  });
  if (result) {
    fs.unlinkSync(filePath);
  }
  return result;
};
