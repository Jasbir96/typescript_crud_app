import express, { Request, Response } from "express";
import connects from "../config/db";
import { router } from "./routes/userRoutes";
const app = express();
const PORT = process.env.PORT||3000;
connects();
app.use(express.json());
app.use("/", router);

app.use((req: Request, resp: Response):void=> {
    // console.log("fullPath", fullPath);
    resp.status(404).json({
        message: "page Not found"
    })
})
app.listen(PORT, (): void => {
    console.log(`server is running at port ${PORT}`)
})