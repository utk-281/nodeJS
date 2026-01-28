import asyncHandler from "express-async-handler";
import UserModel from "../models/user.model.js";
import ErrorResponse from "../utils/ErrorResponse.util.js";
import { generateJwtToken } from "../utils/jwt.util.js";

export const register = asyncHandler(async (req, res, next) => {
  // console.log(resp);
  // return res.status(200).json(resp);

  const { name, age, email, isMarried, password } = req.body;

  // let salt = await bcryptjs.genSalt(10);
  // let hashedPassword = await bcryptjs.hash(password, salt);
  // //? this is a one way hashing

  let newUser = await UserModel.create({
    name,
    age,
    email,
    isMarried,
    password /* : hashedPassword, */,
  });
  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: newUser,
  });
});

export const getUser = async (req, res, next) => {
  try {
    let userId = req.params.id;
    // let user = await UserModel.findOne({ _id: userId });
    let user = await UserModel.findById(userId).populate({
      path: "blogs.blogId",
      select: "title description createdAt -_id",
    });

    if (!user)
      return res.status(404).json({
        success: false,
        message: "User not found",
      });

    // let formattedResp = user.blogs.map((blog) => {
    //   return {
    //     title: blog.blogId.title,
    //     description: blog.blogId.description,
    //     createdAt: blog.blogId.createdAt,
    //   };
    // });

    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      payload: user,
    });
  } catch (error) {
    next(error);
  }
};

export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser = await UserModel.findOne({ email });
  if (!existingUser) throw new ErrorResponse("Invalid Credentials", 404);

  // let isMatched = await bcryptjs.compare(password, existingUser.password);
  let isMatched = await existingUser.comparePassword(password);
  if (!isMatched) return next(new ErrorResponse("Invalid credentials", 400));

  let token = generateJwtToken(existingUser.name);
  console.log("token: ", token);

  res.cookie("token", token, {
    maxAge: 10 * 60 * 1000, // 10 mins (in ms) , this sets an expiry for the token on the browser
    secure: true, // if set to true, this cannot be accessed in the browser (using js)
    httpOnly: true,
    sameSite: "none",
    path: "/",
  });
  //? res.cookie("tokenName", "value", {options}); this will send cookies to the client's browser

  res.status(200).json({
    success: true,
    message: "User logged in",
    token,
  });

  //? sign(payload, secret_key, options)
});

export const logout = asyncHandler(async (req, res, next) => {
  res.clearCookie("token", {
    maxAge: 1,
    httpOnly: true,
    sameSite: "none",
    path: "/",
  });

  res.status(200).json({
    success: true,
    message: "User logged out",
  });
});

export const getProfile = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Profile fetched successfully",
    data: req.myUser,
  });
});

export const updateProfile = asyncHandler(async (req, res, next) => {
  // req.myUser
});

export const deleteProfile = asyncHandler(async (req, res, next) => {
  // req.myUser
});

//! http://localhost:9000
//! http://localhost:5173

// /api.av1/usrs/get
// /api.av1/blogs/get
