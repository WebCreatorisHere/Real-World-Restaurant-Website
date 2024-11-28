import mongoose from "mongoose";
const {Schema,model}= mongoose

const saladschema = new Schema({
    weight:{type:Number,required:true},
    name:{type:String,required:true},
    price:{type:Number,required:true},
    type:{type:String,required:true},
    imgname:{type:String},
    extra:{type:Boolean}
})
export default mongoose.models.Salad || model("Salad",saladschema)