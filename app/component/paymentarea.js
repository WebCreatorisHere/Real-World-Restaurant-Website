"use client"
import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useRouter } from "next/navigation";
import { initiate, dropcartcollection, savepayment, fetchcart } from '../actions/datasaver';
import Script from 'next/script';

const PAYMENTAREA = ({ otherFromChild,setdataFromChild, setotherFromChild, dataFromChild, setdisha }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const router = useRouter()
    const [cash, setcash] = useState(true)

    const setmethod = (selector) => {
        let ele = document.querySelector(`.${selector}`)
        if (ele.classList.contains("cash")) {
            ele.style.borderColor = "#f4b42d"
            ele.children[2].style.backgroundColor = "#f4b42d"
            ele.nextElementSibling.style.borderColor = "#e0e0e0"
            ele.nextElementSibling.children[2].style.backgroundColor = "#e0e0e0"
            setcash(true)
        }
        else {
            ele.style.borderColor = "#f4b42d"
            ele.children[2].style.backgroundColor = "#f4b42d"
            ele.previousElementSibling.style.borderColor = "#e0e0e0"
            ele.previousElementSibling.children[2].style.backgroundColor = "#e0e0e0"
            setcash(false)
        }
    }

    const onSubmit = async (data) => {
        let totalprice = dataFromChild.reduce((accu, item) => { return accu + item.price * item.no_of_item }, 0)
        if (cash != true) {
            await pay(totalprice * 100, data)
            document.querySelector(".ctn").style.display = "flex"
        }
        else {
            savepayment(totalprice, data, dataFromChild)
            router.push("/?paymentdone=true")
            setdisha(true)
            setotherFromChild({ typo: false })
            document.querySelector(".malapur").style.display = "flex"
            document.querySelector(".colaberry").style.height = "85%"
            document.querySelector(".ctn").style.display = "flex"
            document.querySelector(".ctn").style.display = "flex"
            document.querySelector(".ctn").click()
        }
        await dropcartcollection()
        let abc = await fetchcart()
        setdataFromChild(abc)
        let form = document.querySelector(".myforma")
        form.querySelectorAll("input, textarea").forEach(input => {
            if (input.type === "checkbox" || input.type === "radio") {
                input.checked = false; // Uncheck checkboxes and radio buttons
            } else {
                input.value = "";      // Clear other inputs
            }
        })
    }

    const pay = async (amount, data) => {
        try {
            let a = await initiate(amount, "Yash", data, dataFromChild)
            console.log(a)
            let order_id = a.id
            var options = {
                "key_id": process.env.NEXT_PUBLIC_KEY_ID,
                "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "Burek",
                "description": "it is made by yash dwivedi",
                "image": "https://cdn.freelogovectors.net/wp-content/uploads/2023/04/venom-sticker-logo.png",
                "order_id": order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
                "prefill": {
                    "name": "Yash Dwivedi",
                    "email": "yashthecool2000@gmail.com",
                    "contact": "9000090000"
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            }

            var rzp1 = new window.Razorpay(options)
            rzp1.open()
        } catch (error) {
            console.error('Error during Razorpay initialization:', error);
        }
    }
    return (
        <div style={{ "left": otherFromChild.typo ? "0px" : "100%" }} className='h-full w-[55%] bg-white absolute left-[100%] tradder z-[2000] top-0 '>
            <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
            <div onClick={(e) => { e.stopPropagation() }} className="w-full flex gap-10 flex-col h-full pl-[10%] py-14 pr-[4%] pay overflow-y-scroll">
                <div className="flex justify-start items-center gap-2">
                    <button onClick={(e) => {
                        e.stopPropagation()
                        setotherFromChild({ typo: false })
                        document.querySelector(".malapur").style.display = "flex"
                        document.querySelector(".colaberry").style.height = "85%"
                        document.querySelector(".ctn").style.display = "flex"

                    }} aria-label="arrowbtn" className="bg-[#f4b42d] z-50 hover:bg-[#065d63] transition w-[3.65rem] rounded-full rotate-90 flex justify-center py-3.5"><img loading="lazy" src="materials/arrow-top.svg" alt="" /></button>
                    <h6 className="text-4xl text-[#065D63]">Making an order</h6>
                </div>
                <div className="flex flex-col gap-5 w-[88%]">
                    <label className="text-[#065d63] text-lg font-bold" htmlFor="">CHOOSE A PAYMENT METHOD</label>
                    <div onClick={() => setmethod("cash")} className="p-7 trans3 cursor-pointer flex gap-3 items-center relative py-4 border border-[#f4b42d] rounded-xl cash">
                        <img loading="lazy" src="materials/icon-cash.svg" alt="" /><span className="text-[#065d63] text-base font-[540]">Cash On Delivery</span>
                        <div className="absolute top-[28%] trans3 left-[-14px] bg-[#f4b42d] p-2 rounded-full"><img loading="lazy" src="materials/tick.svg" alt="" /></div>
                    </div>
                    <div onClick={() => setmethod("online")} className="p-7 trans3 cursor-pointer flex gap-3 items-center relative py-4 border border-[#e0e0e0] rounded-xl online">
                        <img loading="lazy" className="ml-1.5" src="materials/credit-card.png" alt="" /><span className="text-[#065d63] text-base font-[540]">Online Payment!</span>
                        <div className="absolute trans3 top-[28%] left-[-14px] bg-[#e0e0e0] p-2 rounded-full"><img loading="lazy" src="materials/tick.svg" alt="" /></div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 ">
                    <h6 className="text-[#065d63] text-lg font-bold" >YOUR DATA</h6>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 myforma">
                        <div className="flex flex-col gap-1.5 w-[88%]">
                            <label className="text-[#065d63] text-sm" htmlFor="firstname">First name</label>
                            <input {...register("name", { required: true })} className="border text-[#065d63] focus:outline-0 focus:border-[#e0e0e0] border-[#e0e0e0] p-4 py-3 rounded-lg placeholder:text-[#bdbdc3] placeholder:font-medium active:outline-[#e0e0e0] " placeholder="Enter your name" id="firstname" type="text" />
                            {errors.name && <span className="text-[#ff5555] font-semibold text-sm">This field is required</span>}
                        </div>
                        <div className="flex flex-col gap-1.5 w-[88%]">
                            <label className="text-[#065d63] text-sm" htmlFor="ph">Phone</label>
                            <input {...register("number", { required: true })} type="number" className="border text-[#065d63] focus:outline-0 border-[#e0e0e0] p-4 py-3 rounded-lg placeholder:text-[#bdbdc3] placeholder:font-medium active:outline-[#e0e0e0] " placeholder="Enter your number" id="ph" />
                            {errors.number && <span className="text-[#ff5555] font-semibold text-sm">This field is required</span>}
                        </div>
                        <div className="flex flex-col gap-1.5 w-[88%]">
                            <label className="text-[#065d63] text-sm" htmlFor="comm">Comment</label>
                            <textarea {...register("comment", { required: true })} className="border text-[#065d63] focus:outline-0 border-[#e0e0e0] p-4 py-3 rounded-lg placeholder:text-[#bdbdc3] placeholder:font-medium active:outline-[#e0e0e0] resize-none" placeholder="For example: entrance from the yard / green gate" id="comm" rows={5} cols={5} />
                            {errors.comment && <span className="text-[#ff5555] font-semibold text-sm">This field is required</span>}
                        </div>
                        <div className="flex flex-row gap-6 w-[88%]">
                            <div className="flex flex-col gap-1.5 w-[75%]">
                                <label className="text-[#065d63] text-sm" htmlFor="addr">Address</label>
                                <input {...register("address", { required: true })} type="text" className="border text-[#065d63] focus:outline-0 border-[#e0e0e0] p-4 py-3 rounded-lg placeholder:text-[#bdbdc3] placeholder:font-medium active:outline-[#e0e0e0] " placeholder="Enter your address" id="addr" />
                                {errors.address && <span className="text-[#ff5555] font-semibold text-sm">This field is required</span>}
                            </div>
                            <div className="flex flex-col gap-1.5 w-[25%]">
                                <label className="text-[#065d63] text-sm" htmlFor="house">House</label>
                                <input {...register("house", { required: true })} type="text" className="border text-[#065d63] focus:outline-0 border-[#e0e0e0] p-4 py-3 rounded-lg placeholder:text-[#bdbdc3] placeholder:font-medium active:outline-[#e0e0e0] " placeholder="House" id="house" />
                                {errors.house && <span className="text-[#ff5555] font-semibold text-sm">This field is required</span>}
                            </div>

                        </div>
                        <div className="flex flex-col gap-1.5">
                            <h6 className="text-[#065d63] text-lg font-bold" >RESTAURANT ADDRESS</h6>
                            <p className="text-xs my-2 font-light">Your address must be in <span className="text-[#008000]">Meerut</span>!!</p>
                            <iframe title="hi dosto" className="w-full" height={450} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1455352.71805595!2d-101.84949401553378!3d44.56662839297618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x877d432d85e938a5%3A0x7f0d6293186a4b7!2sSouth%20Dakota%2C%20USA!5e0!3m2!1sen!2sin!4v1731589067054!5m2!1sen!2sin" style={{ "border": 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>

                        <button type="submit" className='bg-[#f4b42d] py-4 mt-4 justify-around px-10 flex items-center text-xl rounded-2xl w-full hover:bg-[#065d63] meena'>
                            <span className='text-white'>In general: <span className='text-4xl font-bold text-[#065d63]'>₹{dataFromChild.reduce((accu, item) => { return accu + item.price * item.no_of_item }, 0)}</span></span>
                            <span className='text-[#065d63] font-semibold text-base'>TO ORDER --&gt;</span></button>
                        <div className="flex flex-col gap-3.5 justify-center px-[5%]">
                            <div className="flex gap-[9px] ">
                                <input type="checkbox" id="useragreement" />
                                <label className="text-[#065d63]" htmlFor="useragreement">By confirming the order, I accept the terms of the <a className="underline" href="/terms&conditions">user agreement</a></label>
                            </div>

                            <div className="flex gap-[9px]">
                                <input type="checkbox" id="yearold" />
                                <label className="text-[#065d63]" htmlFor="yearold">I confirm that I was 18 years old at the time of purchase</label>
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default PAYMENTAREA