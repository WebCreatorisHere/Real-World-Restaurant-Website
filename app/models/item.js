import mongoose from "mongoose";
const {Schema,model}= mongoose

const dataschema = new Schema({
    weight:{type:Number,required:true},
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    type:{type:String,required:true},
    imgname:{type:String},
    extra:{type:Boolean,required:true},
    full_description:{type:String}
})
export default mongoose.models.Item || model("Item",dataschema)