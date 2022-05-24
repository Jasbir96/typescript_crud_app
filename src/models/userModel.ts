import { Schema, model, Document } from "mongoose";

interface User {
    name: string,
    dept: string
}
const userSchema = new Schema<User>({
    name: {
        type: String,
        required: true
    },
    dept :{
        type:String ,
        required :true
    }
})
const UserModel =model<User>("User",userSchema);
export interface UserDocument extends Document{
    name:string,
    dept:string
}
export default UserModel;