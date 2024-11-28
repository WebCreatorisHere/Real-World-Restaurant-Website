import mongoose from "mongoose";
const {Schema,model}= mongoose

const drinkschema = new Schema({
    weight:{type:Number,required:true},
    name:{type:String,required:true},
    price:{type:Number,required:true},
    type:{type:String,required:true},
    imgname:{type:String},
    extra:{type:Boolean}
})
export default mongoose.models.Drink || model("Drink",drinkschema)