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
  if (!user) return next(new ErrorResponse("Invalid credentials", 404));

  let isMatch = await user.comparePassword(password);
  if (!isMatch) return next(new ErrorResponse("Invalid credentials", 401));

  let token = generateToken(user._id);
  console.log("token: ", token);

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    success: true,
    message: "User logged in successfully",
    payload: user,
  });
});

export const logout = asyncHandler(async (req, res, next) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    success: true,
    message: "User logged out successfully",
  });
});

export const getCurrentUser = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "User profile fetched successfully",
    payload: req.user,
  });
});

export const profileUpdate = asyncHandler(async (req, res, next) => {});

export const addImage = asyncHandler(async (req, res, next) => {});

export const deleteImage = asyncHandler(async (req, res, next) => {});
