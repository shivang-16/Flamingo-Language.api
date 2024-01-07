import { Schema, model } from "mongoose";
const resultSchema = new Schema({
    overallScore: {
        type: Number,
        required: true,
    },
    scoreByCategory: [
        {
            category: String,
            score: Number,
        },
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});
export const Result = model("Result", resultSchema);
