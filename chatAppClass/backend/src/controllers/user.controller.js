//? custom error class
//? joi

import asyncHandler from "express-async-handler";
import UserModel from "../models/User.model.js";
import ErrorResponse from "../utils/ErrorResponse.util.js";
import { generateToken } from "../utils/jwt.util.js";

export const register = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const newUser = await UserModel.create({ email, password });

  res.status(201).json({
    success: true,
    message: "User created successfully",
    payload: newUser,
  });
});

export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });
  if (!user) return next(new ErrorResponse("No user found", 404));

  let isMatch = await user.comparePassword(password);
  if (!isMatch) return next(new ErrorResponse("Password is incorrect", 401));

  let token = generateToken(user._id);
  console.log("token: ", token);

  res.cookie("token", token, {
    httpOnly: true, // this will send cookies only in https requests
    maxAge: 5 * 10 * 60 * 1000, // ms
    secure: true, // using this, cookies cannot be modified or accessed in frontend
    sameSite: "none", // cookies can be sent from any origin
    path: "/", // "/" allow cookies to each part of your website
  });

  res.status(200).json({
    success: true,
    message: "User logged in successfully",
    payload: user,
  });
});

export const logout = asyncHandler(async (req, res, next) => {});

export const profileUpdate = asyncHandler(async (req, res, next) => {});

export const addImage = asyncHandler(async (req, res, next) => {});

export const deleteImage = asyncHandler(async (req, res, next) => {});
