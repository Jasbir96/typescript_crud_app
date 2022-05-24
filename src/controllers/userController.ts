import { Request, Response } from "express";
import UserModel from "../models/userModel";
import {
    createEntity, findAndUpdate,
    findEntity, deleteEntity
} from "../services/users.services";


const getAllUsersData = async (req: Request, resp: Response) => {
    const user = await UserModel.find();
    resp.json({
        message: "successful",
        user
    })
}
const createUser = async (req: Request, resp: Response) => {
    let userObj = req.body;
    const user = await createEntity(userObj)

    resp.json({
        message: "user created successful",
        user
    })
}
const findUser = async (req: Request, resp: Response) => {
    let id = req.params.id
    const user = await findEntity({ _id: id });
    resp.json({
        message: "user created successful",
        user
    })
}
const findAndUpdateUser = async (req: Request, resp: Response) => {
    let updateObj = req.body;
    let id = req.params.id

    const user = await findAndUpdate({ _id: id },
        updateObj,
        { new: true }
    );
    resp.json({
        message: "user updated  successful",
        user
    })
}
const deleteUser = async (req: Request, resp: Response) => {
    let id = req.params.id

    const user = await deleteEntity({ _id:id });
    resp.json({
        message: "user deleted  successful",
        user
    })
}
export {
   
    getAllUsersData,
    findUser, createUser,
    findAndUpdateUser, deleteUser
}