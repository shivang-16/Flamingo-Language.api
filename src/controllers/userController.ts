import { Request, Response } from "express";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import sendCookie from "../utils/feature.js";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user)
      return res
        .status(400)
        .json({ success: false, message: "User already exist" });

    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    sendCookie(user, res, "Registered Succesfully", 201);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: " error.message",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email }).select("+password");
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "User not found" });

    const isMatched = await bcrypt.compare(password, user.password);

    if (isMatched) sendCookie(user, res, "Welcome Back", 200);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const logout = async (req: Request, res: Response) => {
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Logout success",
    });
};
