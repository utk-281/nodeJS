import jwt from "jsonwebtoken";
export const generateToken = (userId) => {
  return jwt.sign({ userId }, "scerte", {
    expiresIn: "1d",
  });
};
