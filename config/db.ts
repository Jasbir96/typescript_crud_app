import { connect } from "mongoose";
import { secrets } from "../secret";
function connects() {
    return connect(`mongodb+srv://abc:${secrets.DB_PASSWORD}@cluster0.3gwfq.mongodb.net/?retryWrites=true&w=majority`)
        .then(() => {
            console.log("Db connected ");
        }).catch((error) => {
            console.log(error);
        })
}
export default connects;