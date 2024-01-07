import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(400).json({
      success: false,
      message: "Login to your account first",
    });
  }

  const decoded: any = jwt.verify(token, "flksadfhlkadsh");
  if (decoded && decoded._id) {
    req.userId = decoded._id;
    next();
  }
};
