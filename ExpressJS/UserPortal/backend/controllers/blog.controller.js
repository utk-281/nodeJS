import asyncHandler from "express-async-handler";
import BlogModel from "../models/Blog.model.js";
import { uploadImage } from "../utils/cloudinary.util.js";

export const addBlog = asyncHandler(async (req, res, next) => {
  const { title, description, category, tags } = req.body;
  let secure_url = "";
  if (req.file) {
    let resp = await uploadImage(req?.file?.path);
    secure_url = resp?.secure_url;
  }

  let newBlog = await BlogModel.create({
    title,
    description,
    category,
    tags,
    image: secure_url || "",
  });

  //   let newBlog = new BlogModel({ title, description, category, tags });
  //   let savedBlog = await newBlog.save();
  //   console.log("savedBlog: ", savedBlog);

  res.status(201).json({
    success: true,
    message: "Blog created successfully",
    payload: newBlog,
  });
});

/* 
{
  fieldname: 'image',
  originalname: 'user-2.jpg',       
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: './public/temp',     
  filename: '1768463322202----user-2.jpg',
  path: 'public\\temp\\1768463322202----user-2.jpg',
  size: 5418
}

*/

export const getBlogs = asyncHandler(async (req, res, next) => {});

export const getBlog = asyncHandler(async (req, res, next) => {});

/* 

result:  {
  asset_id: 'efa5349c7b657a33e298e14d1c0ee272',     
  public_id: 'blogApp/zxnfjifjip7jgkq91saw',        
  version: 1768549333,    
  version_id: '66d9b44ebd3657f11c3fb66c989bdc4a',   
  signature: '35de883c6ebb6c7ff76ea9d39f2958101e563f74',
  width: 360,
  height: 360,
  format: 'jpg',
  resource_type: 'image', 
  created_at: '2026-01-16T07:42:13Z',
  tags: [],
  bytes: 5418,
  type: 'upload',
  etag: '17bb1eef9e93fe487dfab7520060d279',
  placeholder: false,     
  url: 'http://res.cloudinary.com/dynuatcqe/image/upload/v1768549333/blogApp/zxnfjifjip7jgkq91saw.jpg', 
  secure_url: 'https://res.cloudinary.com/dynuatcqe/image/upload/v1768549333/blogApp/zxnfjifjip7jgkq91saw.jpg',
  asset_folder: 'blogApp',
  display_name: 'zxnfjifjip7jgkq91saw',
  original_filename: '1768549331502----user-2',     
  api_key: '334918679458119'
}

*/
