import User from "../Models/UserSchema.js";
import Doctor from "../Models/DoctorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
};

export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;

  try {
    // Validate inputs
    if (!email || !password || !name || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (role !== "patient" && role !== "doctor") {
      return res.status(400).json({ message: "Invalid role specified" });
    }

    // Check if user exists
    const userExists =
      role === "patient"
        ? await User.findOne({ email })
        : await Doctor.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const newUser =
      role === "patient"
        ? new User({
            name,
            email,
            password: hashedPassword,
            photo,
            gender,
            role,
          })
        : new Doctor({
            name,
            email,
            password: hashedPassword,
            photo,
            gender,
            role,
          });

    await newUser.save();

    res
      .status(201)
      .json({ success: true, message: "User successfully created" });
  } catch (err) {
    console.error("Error in register:", err);
    res
      .status(500)
      .json({ success: false, message: "Internal server error, try again" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate inputs
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Find user
    const user =
      (await User.findOne({ email })) || (await Doctor.findOne({ email }));

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid credentials" });
    }

    // Generate token
    const token = generateToken(user);
    const { password: hashedPassword, role, appointment, ...rest } = user._doc;

    res.status(200).json({
      status: true,
      message: "Successfully logged in",
      token,
      data: { ...rest },
      role,
    });
  } catch (err) {
    console.error("Error in login:", err);
    res.status(500).json({ status: false, message: "Failed to login" });
  }
};
