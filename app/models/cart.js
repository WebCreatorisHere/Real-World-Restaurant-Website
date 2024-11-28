import mongoose from "mongoose";
const {Schema,model}= mongoose

const cartschema = new Schema({
    weight:{type:Number,required:true},
    addions: { type: String },
    name:{type:String,required:true},
    description:{type:String},
    price:{type:Number,required:true},
    type:{type:String,required:true},
    imgname:{type:String},
    extra:{type:Boolean,required:true},
    no_of_item:{type:Number,required:true},
})
export default mongoose.models.Cart || model("Cart", cartschema);
