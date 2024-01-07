import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const sendCookie = async (
  user: User,
  res: Response,
  message: string,
  statusCode: number,
): Promise<void> => {
  const token = jwt.sign({ _id: user._id }, "flksadfhlkadsh");

  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 60,
    })
    .json({
      success: true,
      message,
      user,
    });
};

export default sendCookie;
