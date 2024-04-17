import Hospital from "../models/hospital.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createHospital = async (req, res) => {
  try {
    const data = req.body;
    await Hospital.create(data);
    res.status(201).json({
      message: "Hospital created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const loginHospital = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hospital = await Hospital.findOne({ email });

    if (!hospital) {
      return res.status(404).json({ message: "Hospital not found" });
    }

    const isValidPassword = await bcrypt.compare(password, hospital.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { email: hospital.email },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1y",
      }
    );

    const expiryTime = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);

    res.cookie("token", token, {
      expires: expiryTime,
      sameSite: "None",
      secure: true,
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getHospital = async (req, res) => {
  try {

    const hospital1 = await req.user
    console.log(hospital1);
    return res.status(200).json(hospital1);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const getAllHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    return res.status(200).json(hospitals);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

export const logout = async (req, res, next) => {
  try {
    await res.clearCookie("token");
    res.status(200).json("Logout successfully");
  } catch (error) {
    next(error);
  }
};