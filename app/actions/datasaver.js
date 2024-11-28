"use server"
import connectDB from "../db/connectdb";
import Item from "../models/item";
import Combo from "../models/combo";
import wraps from "../models/wrap";
import snack from "../models/snack";
import sauce from "../models/sauce";
import salad from "../models/salad";
import dessert from "../models/dessert";
import drink from "../models/drink";
import Cart from "../models/cart";
import Razorpay from "razorpay";
import Payment from "../models/payment";
import Cashpayment from "../models/cashpayment";



export const fetchdata = async (identity)=>{
    await connectDB()
if(identity == "COMBO"){
    const fetcheddata=await Combo.find({type:"combo"})
    const arr = []
   for (let index = 0; index < fetcheddata.length; index++) {
    let element = fetcheddata[index].toObject({ flattenObjectIds: true })
   arr.push(element)
}
   return arr
}
else if(identity == "BURGERS"){
   const fetcheddata= await Item.find({type:"burger"})
   const arr = []
   for (let index = 0; index < fetcheddata.length; index++) {
    let element = fetcheddata[index].toObject({ flattenObjectIds: true })
   arr.push(element)
}
   return arr
}
else if(identity == "WRAPS"){
   const fetcheddata= await wraps.find({type:"wrap"})
   const arr = []
   for (let index = 0; index < fetcheddata.length; index++) {
    let element = fetcheddata[index].toObject({ flattenObjectIds: true })
   arr.push(element)
}
   return arr
}
else if(identity == "SNACKS"){
   const fetcheddata= await snack.find({type:"snack"})
   const arr = []
   for (let index = 0; index < fetcheddata.length; index++) {
    let element = fetcheddata[index].toObject({ flattenObjectIds: true })
   arr.push(element)
}
   return arr
}
else if(identity == "SAUCES"){
   const fetcheddata= await sauce.find({type:"sauce"})
   const arr = []
   for (let index = 0; index < fetcheddata.length; index++) {
    let element = fetcheddata[index].toObject({ flattenObjectIds: true })
   arr.push(element)
}
   return arr
}
else if(identity == "SALADS & SOUPS"){
   const fetcheddata= await salad.find({type:"salad"})
   const arr = []
   for (let index = 0; index < fetcheddata.length; index++) {
    let element = fetcheddata[index].toObject({ flattenObjectIds: true })
   arr.push(element)
}
   return arr
}
else if(identity == "DESSERTS"){
   const fetcheddata= await dessert.find({type:"dessert"})
   const arr = []
   for (let index = 0; index < fetcheddata.length; index++) {
    let element = fetcheddata[index].toObject({ flattenObjectIds: true })
   arr.push(element)
}
   return arr
}
else if(identity == "DRINKS"){
   const fetcheddata= await drink.find({type:"drink"})
   const arr = []
   for (let index = 0; index < fetcheddata.length; index++) {
    let element = fetcheddata[index].toObject({ flattenObjectIds: true })
   arr.push(element)
}
   return arr
}
else{
    return "nothing is there"
}
}
export const fetchcart = async ()=>{
    let respo = await fetch("http://localhost:3000/dpi")
    let c = await respo.json()
    return c
}

export const initiate = async (amount,to_user,payment_form,itemarray)=>{
await connectDB()
var instance = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_KEY_ID,
    key_secret: process.env.NEXT_PUBLIC_KEY_SECRET,
  })

  var options = {
    amount: Number.parseInt(amount),  // amount in the smallest currency unit
    currency: "INR"
  };
 let x =await instance.orders.create(options)

  await Payment.create({oid:x.id,amount:amount/100,to_user:to_user,name:payment_form.name,message:payment_form.comment,items:JSON.stringify(itemarray),number:payment_form.number,address:payment_form.address,house_no:payment_form.house})
  return x
}

export const dropcartcollection = async()=>{
await connectDB()
Cart.collection.drop()
}

export const savepayment = async (price,payment_form,itemarray)=>{
await connectDB()
await Cashpayment.create({amount:price,to_user:"Yash Dwivedi",name:payment_form.name,message:payment_form.comment,items:JSON.stringify(itemarray),number:payment_form.number,address:payment_form.address,house_no:payment_form.house})

}