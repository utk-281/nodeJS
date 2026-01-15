import asyncHandler from "express-async-handler";
import BlogModel from "../models/Blog.model.js";

export const addBlog = asyncHandler(async (req, res, next) => {
  console.log(req.file);

  const { title, description, category, tags } = req.body;

  let newBlog = await BlogModel.create({ title, description, category, tags });

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
