import express from "express";
import {
    findAndUpdateUser, findUser, createUser, deleteUser, getAllUsersData
} from "../controllers/userController";
import { getHomeData, getAboutData, } from "../controllers/pageController";
const router = express.Router();
router.get("/home", getHomeData);
router.get("/about", getAboutData);
router.route("/user").get(getAllUsersData).post(createUser);
router.route("/`user/:/id").get(findUser).delete(deleteUser).patch(findAndUpdateUser);
export {
    router
}