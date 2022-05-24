import {
    DocumentDefinition, FilterQuery,
    UpdateQuery, QueryOptions
} from "mongoose";
import UserModel, { UserDocument } from "../models/userModel";
export function createEntity(input: DocumentDefinition<UserDocument>) {
    return UserModel.create(input);
}
export function findEntity(query: FilterQuery<UserDocument>, options: QueryOptions = { lean: true }) {

    return UserModel.find(query, {}, options);
}
export function findAndUpdate(
    query: FilterQuery<UserDocument>,
    update: UpdateQuery<UserDocument>,
    options: QueryOptions
) {
    return UserModel.findOneAndUpdate(query, update, options);
}
export function deleteEntity(query: FilterQuery<UserDocument>) {
    return UserModel.deleteOne(query)
}