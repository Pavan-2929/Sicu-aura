import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const hospitalSchema = new mongoose.Schema({
  hospitalName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  hospitalRegistrationNumber: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  registrationWardNumber: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  hospitalRegistrationDate: {
    type: Date,
    required: true,
  },
  numberOfAmbulanceAvailable: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

hospitalSchema.pre("save", async function () {
  const hospital = this;

  try {
    const hashedPassword = await bcrypt.hash(hospital.password, 10);
    hospital.password = hashedPassword;
  } catch (error) {
    console.log(error);
  }
});

hospitalSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        id: this._id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );
  } catch (error) {
    console.log(error);
  }
};

const Hospital = mongoose.model("Hospital", hospitalSchema);

export default Hospital;
