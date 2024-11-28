import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/app/models/payment";
import Razorpay from "razorpay";
import connectDB from "@/app/db/connectdb";

export const POST = async (req)=>{
await connectDB()
let body = await req.formData()
body = Object.fromEntries(body.entries())
let p = Payment.findOne({oid:body.razorpay_order_id})
if(!p){
   return NextResponse.json({success:false,message:"Order id not found"})
}

let xy = validatePaymentVerification({"order_id":body.razorpay_order_id,"payment_id":body.razorpay_payment_id},body.razorpay_signature,process.env.NEXT_PUBLIC_KEY_SECRET)

if(xy){
    let paym = await Payment.findOneAndUpdate({oid:body.razorpay_order_id},{done:true},{new:true})
   return NextResponse.redirect("http://localhost:3000?paymentdone=true")
}
else{
    return NextResponse.json({success:false,message:"Payment Varification failed"})
}
}