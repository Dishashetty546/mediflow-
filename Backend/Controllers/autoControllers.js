import User from "../Models/UserSchema.js";
import Doctor from "../Models/DoctorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Generate JWT Token
const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
};

// User Registration
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

    // Normalize email
    const normalizedEmail = email.trim().toLowerCase();

    // Check if user exists
    const userExists =
      role === "patient"
        ? await User.findOne({ email: normalizedEmail })
        : await Doctor.findOne({ email: normalizedEmail });

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
            email: normalizedEmail,
            password: hashedPassword,
            photo,
            gender,
            role,
          })
        : new Doctor({
            name,
            email: normalizedEmail,
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

// User Login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate inputs
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Normalize email
    const normalizedEmail = email.trim().toLowerCase();

    console.log("Received email:", email);
    console.log("Normalized email:", normalizedEmail);

    // Find user in the respective collections
    const user =
      (await User.findOne({ email: normalizedEmail })) ||
      (await Doctor.findOne({ email: normalizedEmail }));

    console.log("Fetched user:", user);

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("Password valid:", isPasswordValid);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = generateToken(user);

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Error in login:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
