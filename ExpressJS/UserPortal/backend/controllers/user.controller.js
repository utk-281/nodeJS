import UserModel from "../models/user.model.js";

export const register = async (req, res, next) => {
  const { name, age, email, isMarried, password } = req.body;
  let newUser = await UserModel.create({
    name,
    age,
    email,
    isMarried,
    password,
  });
  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: newUser,
  });
};

export const getUsers = async (req, res, next) => {};

export const getUser = async (req, res, next) => {};

export const updateUser = async (req, res, next) => {};

export const deleteUser = async (req, res, next) => {};
