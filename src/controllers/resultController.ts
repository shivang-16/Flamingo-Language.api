import { Request, Response } from "express";
import { Types } from "mongoose";
import { Result } from "../models/resultModel.js";

interface CustomError {
  message: string;
}

export const setResult = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const userObjectId = new Types.ObjectId(req.userId);

    let result: Result = await Result.findOneAndUpdate(
      { user: userObjectId },
      {
        $set: {
          overallScore: data.overallScore,
          scoreByCategory: data.scoreByCategory,
          user: req.userId,
        },
      },
      { upsert: true, new: true },
    );

    res
      .status(201)
      .json({ success: true, message: "Result Saved", Result: result });
  } catch (error) {
    const customError = error as CustomError;
    return res.status(500).json({
      success: false,
      message: customError.message,
    });
  }
};

export const getUserResult = async (req: Request, res: Response) => {
  try {
    const userObjectId = new Types.ObjectId(req.userId);

    const UserResult = await Result.findOne({ user: userObjectId });

    res.status(200).json({
      success: true,
      result: UserResult,
    });
  } catch (error) {
    const customError = error as CustomError;
    return res.status(500).json({
      success: false,
      message: customError.message,
    });
  }
};
