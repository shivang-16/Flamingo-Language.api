import jwt from "jsonwebtoken";
const sendCookie = async (user, res, message, statusCode) => {
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
