import jwt from "jsonwebtoken";
export const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(400).json({
            success: false,
            message: "Login to your account first",
        });
    }
    const decoded = jwt.verify(token, "flksadfhlkadsh");
    if (decoded && decoded._id) {
        req.userId = decoded._id;
        next();
    }
};
