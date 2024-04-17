import jwt from "jsonwebtoken";
import Hospital from "../models/hospital.model.js";

export const verifyToken = async (req, res, next) => {
  const cookies = req.headers.cookie;

  if (!cookies) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const token = cookies.split("=")[1];

  if (!token) {
    return res.status(404).json({
      message: "Token not found",
    });
  }

  try {
    const isVerfied = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = await Hospital.findOne({ email: isVerfied.email }).select(
      "-password"
    );

    if (user) {
      req.user = user;
      console.log(user);
      next()
    } else {
      return res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
