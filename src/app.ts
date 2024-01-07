import express, {Request, Response} from "express";
import { config } from "dotenv";
import userRouter from './routers/userRouter.js'
import resultRouter from "./routers/resultRouter.js";
import cors from 'cors'
import cookieParser from "cookie-parser";

export const app = express()

config({path: './config.env'})
app.use(express.json())
app.use(cors());
app.use(cookieParser())

app.use('/api/user', userRouter)
app.use('/api/result', resultRouter)

app.get('/', (req: Request, res:Response) => {
    res.status(200).json({
       success: true,
       message: "Hello the app is working fine"
    })
})
