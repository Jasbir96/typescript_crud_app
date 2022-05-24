import { Request, Response } from "express";

const getHomeData = async (req: Request, resp: Response) => {
    resp.json({
        message: "Home Page",
    })
}
const getAboutData = (req: Request, resp: Response) => {
    resp.json({
        message: "About Page"
    })
}
export {
    getHomeData,
    getAboutData
}