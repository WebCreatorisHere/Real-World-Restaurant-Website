import mongoose from "mongoose";
const {Schema,model}= mongoose

const paymentschema = new Schema({
    name: { type: String, required: true },
    to_user: { type: String, required: true },
    comment: { type: String },
    amount: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    done: { type: Boolean, default: false },
    items:{type:String},
    number:{type:Number},
    address:{type:String},
    house_no:{type:String}
})
export default mongoose.models.Cashpayment || model("Cashpayment", paymentschema);
