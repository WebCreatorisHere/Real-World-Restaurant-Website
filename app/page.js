"use client"
import { Suspense } from "react";
import React from 'react'
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import List from "./component/list";
import Cartoo from "./component/cartoo"
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { initiate, dropcartcollection, savepayment, fetchcart } from "./actions/datasaver";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from 'uuid';
import Image from "next/image";
import Script from "next/script";

export default function HOME() {

    const [loading , setloading] = useState(true)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const searchparams = useSearchParams()
    const jojo1 = useRef(null)
    const jojo2 = useRef(null)
    const jojo3 = useRef(null)
    const router = useRouter()
    const [value, setvalue] = useState(false)
    const [flicker, setflicker] = useState(false)
    const [dataFromChild, setDataFromChild] = useState([]);
    const [otherFromChild, setotherFromChild] = useState({ typo: false })
    const [cash, setcash] = useState(true)
    const [disha, setdisha] = useState(false)
    const [pageparams, setpageparams] = useState({})
    const [reviews, setreviews] = useState([{name:"Yash Dwivedi",pra:"Extremely tasty chebureks, even in the famous Bryukhovychi are not as good as yours!<br/>Very tasty and filling, I will come with 10/10"},
        {name:"Akhil Dwivedi",pra:"Yesterday I tasted with my family chebureks with meat and cheese, well, what can I say))))) delicious and very filling. I recommend to everyone !!!! Special thanks to the staff at Levandivka, very nice staff."},
        {name:"Pratibha Dwivedi",pra:"Took chebureks in Burek on Levandivka. Delicious chebureks are large, hearty, well packaged, not too greasy, a lot of fillings. The restaurant itself is clean, cozy, has lots of space. prices are affordable."},
    {name:"Amit Dwivedi",pra:"Tried chebureks at Burek on Levandivka—absolutely delicious! Large, hearty, well-filled, not greasy, and perfectly packed. The place is clean, cozy, spacious, and very affordable. Highly recommend!"},
    {name:"Prakashit Bhava",pra:"Delicious burek! Flaky pastry with perfectly seasoned fillings—tried the meat and cheese, both were amazing. Cozy atmosphere and great service. Highly recommend!"}
])
const [activeimgno,setactiveimgno] = useState(1)

    useEffect(() => {
        const exo = async () => {
            let raspberry = await fetchcart()
            setDataFromChild(raspberry)
        }
        exo()
    }, [otherFromChild])
    useEffect(() => {

        setdisha(searchparams.get("paymentdone")?true:false)
        setparams()

    }, [searchparams])
    const setparams = (e) => {

        let proxyparam = {
            achievement: searchparams.get("achievement") ? searchparams.get("achievement") : false,
            condition: searchparams.get("condition") ? searchparams.get("condition") : false,
            home: !(searchparams.get("achievement") || searchparams.get("condition") || searchparams.get("about")),
            about: searchparams.get("about") ? searchparams.get("about") : false
        }
        setpageparams(proxyparam)
        let nava = document.querySelector(".navtha").children
        if (proxyparam.about || proxyparam.condition || proxyparam.achievement || searchparams.get("paymentdone")) {
            for (let index = 0; index < nava.length; index++) {
                const element = nava[index]
                element.classList.add("cchanger")
            }
        }
        else {
            for (let index = 0; index < nava.length; index++) {
                const element = nava[index]
                element.classList.remove("cchanger")
            }
        }
    }

    useEffect(() => {
      setTimeout(() => {
        setloading(false)
      }, 3000);
    }, [])
    
    const img1 = () => {
        jojo1.current.classList.add("active")
        jojo2.current.classList.remove("active")
        jojo3.current.classList.remove("active")

        let currimgs = document.body.querySelector(".clulu").children
        currimgs[2 + 1].classList.add("nanu")
        currimgs[3 + 1].classList.add("nanu")
        currimgs[1 + 1].classList.remove("nanu")

        let currtext = document.body.querySelector(".owner").children
        currtext[1].classList.add('opacity-0', 'hidden')
        currtext[2].classList.add('opacity-0', 'hidden')
        currtext[0].classList.remove('opacity-0', 'hidden')
        setactiveimgno(1)
    }
    const img2 = () => {
        jojo1.current.classList.remove("active")
        jojo2.current.classList.add("active")
        jojo3.current.classList.remove("active")
        let currimgs = document.body.querySelector(".clulu").children
        currimgs[1 + 1].classList.add("nanu")
        currimgs[3 + 1].classList.add("nanu")
        currimgs[2 + 1].classList.remove("nanu")


        let currtext = document.body.querySelector(".owner").children
        currtext[0].classList.add('opacity-0', 'hidden')
        currtext[2].classList.add('opacity-0', 'hidden')
        currtext[1].classList.remove('opacity-0', 'hidden')
        setactiveimgno(2)
    }
    const img3 = (e) => {
        jojo1.current.classList.remove("active")
        jojo2.current.classList.remove("active")
        jojo3.current.classList.add("active")
        let currimgs = document.body.querySelector(".clulu").children
        currimgs[1 + 1].classList.add("nanu")
        currimgs[2 + 1].classList.add("nanu")
        currimgs[3 + 1].classList.remove("nanu")


        let currtext = document.body.querySelector(".owner").children
    
        currtext[0].classList.add('opacity-0', 'hidden')
        currtext[1].classList.add('opacity-0', 'hidden')
        currtext[2].classList.remove('opacity-0', 'hidden')
        setactiveimgno(3)
    }
    const handleDataFromChild = (childDataArray) => {
        setDataFromChild(childDataArray);  // Set the state with the array received from child
    }
    const handleDataFromChild2 = (childDataArray2) => {
        setDataFromChild(childDataArray2);  // Set the state with the array received from child
    }
    const handleotherdata = (cd) => {
        setotherFromChild(cd);  // Set the state with the array received from child
    }

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
            document.querySelector(".ctn").style.display = "flex"
            document.querySelector(".ctn").click()
        }
        await dropcartcollection()
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
        let a = await initiate(amount, "Yash", data, dataFromChild)
        let order_id = a.id
        var options = {
            "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Burek",
            "description": "it is made by yash dwivedi",
            "image": "https://cdn.freelogovectors.net/wp-content/uploads/2023/04/venom-sticker-logo.png",
            "order_id": order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "http://localhost:3000/api/razorpay",
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

        var rzp1 = new Razorpay(options)
        rzp1.open()
    }
 const showanswers = (e)=>{
   
    let papabol
    if(e.target.classList.contains("simcity")){
papabol = e.target
    }
    else{
        papabol = e.target.parentElement
    }
    let headings = document.getElementsByClassName("simcity")
    for (let index = 0; index < headings.length; index++) {
        const element = headings[index];
        if(element == papabol){
            
            papabol.classList.add("actno1")
            papabol.children[0].style.transform = "rotate(-180deg)"
            papabol.nextElementSibling.classList.add("textshow")
            
        }
        else{
            element.classList.remove("actno1")
            element.children[0].style.transform = "rotate(0deg)"
            element.nextElementSibling.classList.remove("textshow")
            
        }
    }
    
 }
let functions = [img2,img3,img1]
// let activeimgno-1 = 0
useEffect(() => {
    // Set interval to cycle through functions
    const intervalId = setInterval(() => {
      functions[activeimgno-1](); // Call the current function
       // Move to the next function cyclically
    }, 6000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [functions]);
  const openmenu = (e) => {
    e.stopPropagation()
    setflicker(!flicker)
    if (flicker == true) {
        document.querySelector(".karla").classList.remove("increaser")
        setTimeout(() => {
            for (let index = 0; index < document.getElementsByClassName("sacc").length; index++) {
                const element = document.getElementsByClassName("sacc")[index];
                element.classList.remove("saccsaver")
            }
        }, 500);
        toast.dismiss()
    }
    else {
        document.querySelector(".karla").classList.add("increaser")
        setTimeout(() => {
            for (let index = 0; index < document.getElementsByClassName("sacc").length; index++) {
                const element = document.getElementsByClassName("sacc")[index];
                element.classList.add("saccsaver")
            }
        }, 500);
    }


}
    return (
        <>
            <main>
            <Script
        src="https://cdn.lordicon.com/lordicon.js"
        strategy="lazyOnload"
      /><Script
      src="https://checkout.razorpay.com/v1/checkout.js"
      strategy="lazyOnload"
    />
            <div style={{"opacity":loading?"1":"0","zIndex":loading?"":"-1000"}} className=" h-[100vh] loader absolute z-[3000] w-full bg-[#F4B42D] flex justify-center items-center">
                    <img loading="lazy" className="beeping" src="https://burek.intexagency.com/wp-content/themes/burek/assets/img/logo.svg" alt="" />
                </div>

               
                
               
                

                <div className="z-10 bg-[#eca845] flex h-[100vh] ">
                    <header onClick={() => {
                        setflicker(false)
                        if (flicker == true) {
                            document.querySelector(".karla").classList.remove("increaser")
                            toast.dismiss()
                        }
                    }} className="flex relative shadow-2xl h-[100vh] py-2 gap-4 flex-col items-center w-[6.5rem] z-[2001] bg-white">
                        <a href={"/"} aria-label="Home" className="p-3.5 holder"><img loading="lazy" className="logo" src="materials/logo.svg" alt="" /></a>
                        <Link href={"/"} className="call p-3.5 relative -mt-2.5 rounded-lg border border-[#e0e0e0] border-1"><img loading="lazy" className="icon1" src="materials/call.svg" alt="" />
                            <div className="number opacity-0 font-bold w-[140px] flex justify-center items-center absolute -top-[1px] left-5 bg-white border border-[#e0e0e0] border-1 h-[104%] rounded-lg text-xs text-[#065d63] border-l-0 rounded-tl-none rounded-bl-none -z-20">+91 9086053659</div>
                        </Link>

                        <div className="p-1 relative untouchable-text py-2 text-[0.80rem] gap-0.5 font-bold text-[#3c8085] flex-col rounded-lg items-center justify-center border flex border-[#e0e0e0] border-1">
                            <span>10:00</span>
                            <span className="text-[#605f5f]">to</span>
                            <span>20:30</span>
                            <img loading="lazy" className="absolute -bottom-2.5" src="materials/clock.svg" alt="" />
                        </div>
                        <div onClick={openmenu} className="menu flex justify-center items-center font-bold text-[1.2rem] text-center cursor-pointer text-[#3c8085] h-[26%] leading-6">
                            <h6>OUR MENU</h6>
                        </div>
                        <button className="langur p-3.5 -mt-2.5 rounded-lg border border-[#e0e0e0] border-1 text-xs absolute bottom-8 text-[#3c8085] font-bold"><span className="icon2">Eng</span>
                            <div className="lang opacity-0 font-bold w-[60px] flex justify-center items-center absolute -top-[1px] left-5 bg-white border border-[#e0e0e0] border-1 h-[104%] -z-10 rounded-lg text-xs text-[#065d63] border-l-0 rounded-tl-none rounded-bl-none">Hindi</div>
                        </button>
                    </header>
                    <List sendDataToParent={handleDataFromChild} luci={flicker} />
                    <div onClick={() => {

                        setflicker(false)

                        if (flicker == true) {
                            document.querySelector(".karla").classList.remove("increaser")
                            toast.dismiss()
                        }
                        setvalue(false)
                    }} className="clulu h-full w-full overflow-hidden relative">
                        <div onClick={() => { toast.dismiss() }} className='w-full h-full absolute top-0 right-0 trans2 opacity-0 z-[-10] bg-[#60606099] karla'></div>
                        <nav className="flex navtha font-bold justify-end items-center relative z-[200] space-x-8 p-5 pr-6">
                            <Link style={{ "color": pageparams.achievement ? "#f4b42d" : "" }} onClick={setparams} prefetch={true} href={"/?achievement=true"} className="text-white hover:text-[#065d63] transition-colors duration-3000 relative">
                                Achievements & Facilities
                                <span style={{ "width": pageparams.achievement ? "4%" : "0px" }} className="w-2 left-1/2 scale-x-[15] h-[2px] rounded-full bg-[#f4b42d] absolute bottom-[-1px] transition-all"></span>
                            </Link>
                            <Link style={{ "color": pageparams.condition ? "#f4b42d" : "" }} onClick={setparams} prefetch={true} href={"/?condition=true"} className="text-white hover:text-[#065d63] transition-colors duration-3000 relative" >
                                Terms & Conditions
                                <span style={{ "width": pageparams.condition ? "4%" : "0px" }} className="w-2 left-1/2 scale-x-[15] h-[2px] rounded-full bg-[#f4b42d] absolute bottom-[-1px] transition-all"></span>

                            </Link>
                            <Link style={{ "color": pageparams.home ? "transparent" : "" }} onClick={setparams} prefetch={true} href={"/"} className="text-white font-bold hover:text-[#065d63] bg-clip-text bg-[linear-gradient(90deg,_rgba(63,94,251,1)_0%,_rgba(252,70,107,1)_100%)] bg-[rgb(63,94,251)] transition-colors duration-3000 relative" >
                                Home
                                <span style={{ "width": pageparams.home ? "4%" : "0px" }} className="w-2 left-[45%] scale-x-[15] h-[2px] rounded-full bg-[rgb(63,94,251)] bg-[linear-gradient(90deg,_rgba(63,94,251,1)_0%,_rgba(252,70,107,1)_100%)] absolute bottom-[-1px] transition-all"></span>

                            </Link>

                            <Link style={{ "color": pageparams.about ? "#f4b42d" : "" }} onClick={setparams} prefetch={true} href={"/?about=true"} className="kalua text-white hover:text-[#065d63] transition-colors duration-3000 relative" >
                                About Us
                                <span style={{ "width": pageparams.about ? "4%" : "0px" }} className="w-2 left-[46%] scale-x-[15] h-[2px] rounded-full bg-[#f4b42d] absolute bottom-[-1px] transition-all"></span>

                            </Link>


                            <Link href={"https://www.instagram.com/enhancewithyash/"} className="fb text-white tt transition-colors duration-3000" aria-label="instagram">
                                <svg className="hover:fill-[#065d63] transition-colors" style={{ "fill": disha || pageparams.achievement || pageparams.about || pageparams.condition ? "#065D63" : "" }} id="fb" width="10" height="16" fill="white" viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg">
                                    <path className="icon-social" d="M10 6.15385H6.66667V3.69231C6.66667 3.01292 7.264 3.07692 8 3.07692H9.33333V0H6.66667C4.45733 0 2.66667 1.65292 2.66667 3.69231V6.15385H0V9.23077H2.66667V16H6.66667V9.23077H8.66667L10 6.15385Z"></path>
                                </svg>
                            </Link>
                            <Link href={"https://www.instagram.com/enhancewithyash/"} aria-label="instagram" className="it text-white tb  transition-colors duration-3000" to="#">
                                <svg className="hover:fill-[#065d63] transition-colors" style={{ "fill": disha || pageparams.achievement || pageparams.about || pageparams.condition ? "#065D63" : "" }} id="it" width="15" height="15" viewBox="0 0 15 15" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path className="icon-social" fillRule="evenodd" clipRule="evenodd" d="M4.2453 15C1.90063 15 0 13.0993 0 10.7547V4.24528C0 1.90067 1.90063 0 4.2453 0H10.7547C13.0994 0 15 1.90067 15 4.24528V10.7547C15 13.0993 13.0994 15 10.7547 15H4.2453ZM11.25 8.4375C11.25 10.6812 9.43115 12.5 7.1875 12.5C4.94385 12.5 3.125 10.6812 3.125 8.4375C3.125 6.19385 4.94385 4.375 7.1875 4.375C9.43115 4.375 11.25 6.19385 11.25 8.4375ZM11.25 5C11.9403 5 12.5 4.44036 12.5 3.75C12.5 3.05964 11.9403 2.5 11.25 2.5C10.5597 2.5 10 3.05964 10 3.75C10 4.44036 10.5597 5 11.25 5Z"></path>
                                </svg>
                            </Link>
                            <div onClick={(e) => {
                                e.stopPropagation()
                                setvalue(true)
                            }} className="flex font-light hover:bg-slate-200 shadow-xl cursor-pointer text-xs relative justify-center items-center flex-col bg-white rounded-2xl gap-3 pt-1 w-[95px] h-[95px] transition-all duration-3000">
                                <img loading="lazy" src="materials/basket.svg" alt="" />
                                <span>{!dataFromChild[0] && <span className="text-base font-light">₹0</span>}{dataFromChild[0] && <span className="text-base font-light">₹{dataFromChild.reduce((accu, item) => { return accu + item.price * item.no_of_item }, 0)}</span>}</span>
                                {!dataFromChild[0] && <div className="rounded-full w-[28px] h-[28px] border-2 border-white absolute top-0 right-0 bg-[#f4b42d] flex justify-center items-center font-medium">0</div>}
                                {dataFromChild[0] && <div className="rounded-full w-[28px] h-[28px] border-2 border-white absolute top-0 right-0 bg-[#f4b42d] flex justify-center items-center font-medium">{dataFromChild.reduce((accumulator, item) => {
                                    return accumulator + item.no_of_item;
                                }, 0)}</div>}
                            </div>



                        </nav>
                        <Image fill={true}  priority="high" className="z-2 transistionofimg absolute -top-1" src="/materials/burger.jpg" alt="home image" />
                        <Image fill={true} priority="high" className="z-2 nanu transistionofimg absolute -top-1" src="/materials/ice-cream.jpg" alt="home image" />
                        <Image fill={true} priority="high" className="z-2 nanu transistionofimg absolute  -top-1" src="/materials/burek.jpg" alt="home image" />
                        <Cartoo sendotherToParent={handleotherdata} sendDataToParent2={handleDataFromChild2} hint={value} />
                        <div className="text-white pt-16 relative z-50 h-fit px-[4.5rem]">
                            <div className="owner">

                                <div className="transistionofimg block opacity-100">
                                    <p className="text-xs font-extrabold tracking-widest untouchable-text unclicable-text">HOT SUMMER OFFER!</p>
                                    <h6 className="text-6xl my-2 font-bold untouchable-text unclicable-text">Try brand new</h6>
                                    <h6 className="text-6xl font-bold untouchable-text unclicable-text">BIG MAMMA BURGER!</h6>
                                    <button onClick={openmenu} className="px-14 mt-12 py-5 text-xs font-bold tracking-widest bg-[#065d63] text-[#FFC23D] rounded-[0.225rem] hover:bg-white hover:text-[#065d63] transition-colors">TRY NOW!</button>
                                </div>
                                <div className="transistionofimg -mt-[4.25rem] hidden opacity-0">
                                    <p className="text-xs font-extrabold tracking-widest untouchable-text unclicable-text">COOL DOWN IN SUMMER!</p>
                                    <h6 className="text-6xl my-2 font-bold untouchable-text unclicable-text">Nasty tasty!</h6>
                                    <h6 className="text-6xl font-bold w-[40rem] leading-[4rem] untouchable-text unclicable-text">MELTING SEASON STARTED</h6>
                                    <button onClick={openmenu} className="px-14 mt-12 py-5 text-xs font-bold tracking-widest bg-[#065d63] text-[#FFC23D] rounded-[0.225rem] hover:bg-white hover:text-[#065d63] transition-colors">TRY NOW!</button>
                                </div>
                                <div className="transistionofimg hidden opacity-0">
                                    <p className="text-xs font-extrabold tracking-widest untouchable-text unclicable-text">TUESDAY TURKISH WIBE!</p>
                                    <h6 className="text-6xl my-2 font-bold untouchable-text unclicable-text">Try brand new</h6>
                                    <h6 className="text-6xl font-bold untouchable-text unclicable-text">BEEF JIUCY BUREK</h6>
                                    <button onClick={openmenu} className="px-14 mt-12 py-5 text-xs font-bold tracking-widest bg-[#065d63] text-[#FFC23D] rounded-[0.225rem] hover:bg-white hover:text-[#065d63] transition-colors">TRY NOW!</button>
                                </div>
                            </div>
                            <div className="joe pt-32 flex gap-5 mt-2">
                                <div ref={jojo1} onClick={img1} className="dot active rounded-full w-4 bg-white h-4"></div>
                                <div ref={jojo2} onClick={img2} className="dot rounded-full w-4 bg-white h-4"></div>
                                <div ref={jojo3} onClick={img3} className="dot rounded-full w-4 bg-white h-4"></div>
                            </div>
                            <div onClick={()=>{router.push("/?about=true")}} className="cursor-pointer addres floating-box hover:bg-[#ecb12f] flex flex-col justify-center gap-3.5 pl-8 items-start absolute right-6 -bottom-2 w-[162px] h-[152px] rounded-lg">
                                <p className="font-semibold tracking-tight">Delivery areas</p>
                                <span className="icon transition-all mt-1">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="20" fill="#EFB84C"></circle>
                                        <g clipPath="url(#clip0)">
                                            <path d="M27.6636 10.8853C25.6733 8.96641 23.0322 7.91309 20.2201 7.91309C17.4079 7.91309 14.7668 8.96641 12.7765 10.8853C10.7909 12.7996 9.69357 15.3505 9.69357 18.0617C9.69357 23.5252 14.9996 28.0271 17.8544 30.4451C18.244 30.7749 18.5812 31.0634 18.8472 31.3015C19.2178 31.6359 19.7023 31.8191 20.2153 31.8191C20.7283 31.8191 21.2129 31.6359 21.5834 31.3015C21.8494 31.0634 22.1866 30.7795 22.5714 30.4497L22.5762 30.4451C25.4263 28.0271 30.737 23.5252 30.737 18.0617C30.7418 15.3505 29.6492 12.7996 27.6636 10.8853Z" fill="#065D63"></path>
                                            <circle cx="20.4783" cy="18.435" r="4.78261" fill="#EFB84C"></circle>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="22" height="25.8261" fill="white" transform="translate(9 6)"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>

                            </div>
                        </div>
                        <div style={{ "zIndex": disha ? 150 : -1, "opacity": disha ? 1 : 0 }} className="w-full trans flex flex-col justify-center opacity-0 items-center h-full bg-white absolute top-0 z-[-1]">
                            <img loading="lazy" className="w-40 my-6" src="materials/contact-lady.svg" alt="" />
                            <h6 className="text-4xl w-80 text-center text-[#065d63] underline underline-offset-4 decoration-[#f4b42d] font-bold">Thank you for your order!</h6>
                            <div className="text-center my-8"><p className="text-slate-600 ">Wait for the operator to call in a few minutes.</p>
                                <p className="font-bold mt-2 text-slate-800">Enjoy!!</p>
                            </div>
                            <button onClick={() => {
                                setdisha(false)
                                router.push("/")
                            }} className="px-20 py-4 text-base font-bold tracking-widest bg-[#f4b42d] text-[#065d63] hover:bg-[#065d63] transition-colors hover:text-[#f4b42d] rounded-[0.225rem]">HOME</button>
                            <div className='absolute foot flex bg-[#065d63] opacity-1 w-full bottom-0 justify-between items-center p-5'>
                                <div className='flex justify-center items-center text-[#4BA0A6] gap-6 text-sm font-bold'><p>© Burek 2021-2024</p>
                                    <img loading="lazy" className='w-[30px]' src="https://burek.intexagency.com/wp-content/themes/burek/assets/img/icon-mastercard.svg" alt="" />
                                    <img loading="lazy" className='w-[60px]' src="https://burek.intexagency.com/wp-content/themes/burek/assets/img/icon-visa.svg" alt="" />
                                </div>
                                <div className='flex gap-2 items-center text-[#4BA0A6]'><small>by</small> <svg width="56" height="24" viewBox="0 0 56 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="logo-path-1" d="M2.88449 1.03636L2.90076 1.07432C3.15567 1.98006 2.46688 2.86952 1.52318 2.86952H1.50691C0.720494 2.86952 0.0859375 2.23496 0.0859375 1.45397V1.41601C0.0859375 0.635015 0.704223 0.0167297 1.48522 0.000459053C2.11977 -0.0158116 2.70009 0.401802 2.88449 1.03636ZM3.38888 6.61177V18.0338C3.38888 18.8148 2.75433 19.4493 1.97334 19.4493H1.51776C0.736764 19.4493 0.102208 18.8148 0.102208 18.0338V6.61177C0.102208 5.83078 0.736764 5.19623 1.51776 5.19623H1.97334C2.75433 5.19623 3.38888 5.83078 3.38888 6.61177Z" fill="white"></path>
                                    <path className="logo-path-1" d="M6.00293 18.6306V5.99376C6.00293 5.53818 6.36631 5.1748 6.82189 5.1748H7.89575C8.2754 5.1748 8.62251 5.44598 8.69301 5.83105C8.80149 6.42765 9.51197 6.68255 10.0001 6.31918C10.998 5.55445 12.0882 5.1748 13.2868 5.1748C16.389 5.1748 17.951 6.93746 17.951 10.4411V18.609C17.951 19.0645 17.5876 19.4279 17.1321 19.4279H15.4616C15.006 19.4279 14.6427 19.0645 14.6427 18.609V10.4411C14.6427 8.86282 13.9159 8.08183 12.4841 8.08183C11.5241 8.08183 10.5587 8.46148 9.63129 9.2262C9.43062 9.38891 9.32215 9.60585 9.32215 9.86076V18.6306C9.32215 19.0862 8.95877 19.4496 8.50319 19.4496H6.83273C6.36631 19.4442 6.00293 19.0808 6.00293 18.6306Z" fill="white"></path>
                                    <path className="logo-path-1" d="M21.471 2.86914H21.8886C22.4147 2.86914 22.8703 3.23252 22.9787 3.7586L23.0872 4.30096C23.1957 4.81077 23.6513 5.19042 24.1774 5.19042H25.4465C26.0648 5.19042 26.5746 5.70024 26.5746 6.31852V6.91511C26.5746 7.5334 26.0648 8.04321 25.4465 8.04321H24.7577C24.1394 8.04321 23.6296 8.55303 23.6296 9.17132V14.6003C23.6296 15.9236 24.1557 16.5962 25.2078 16.5962H25.4248C26.0431 16.5962 26.5529 17.106 26.5529 17.7243V18.3209C26.5529 18.9391 26.0431 19.449 25.4248 19.449H23.6079C21.4113 19.449 20.3049 18.1582 20.3049 15.5982V3.99724C20.3483 3.37895 20.8581 2.86914 21.471 2.86914Z" fill="white"></path>
                                    <path className="logo-path-1" d="M36.0173 19.4116C36.2884 19.3954 36.5271 19.2652 36.706 19.0645L38.2517 17.1771C38.5229 16.83 38.2517 16.3256 37.8179 16.3961C36.9121 16.5209 36.0227 16.5751 35.1115 16.5751C33.1699 16.5751 31.9171 16.0653 31.3693 15.0294C31.0059 14.3569 31.532 13.5596 32.275 13.5596H38.8104C39.3527 13.5596 39.792 13.1257 39.8246 12.5997C39.8408 12.3285 39.8408 12.0736 39.8408 11.8024C39.8408 7.39304 37.845 5.1748 33.8695 5.1748C29.764 5.1748 27.7139 7.49609 27.7139 12.1441C27.7139 17.009 30.0948 19.4442 34.8512 19.4442C35.2525 19.4442 35.6376 19.4279 36.0173 19.4116ZM33.875 8.0059C35.7081 8.0059 36.6138 8.98757 36.6138 10.9672V11.0756H32.2371C31.5483 11.0756 31.0385 10.3868 31.2771 9.75229C31.6947 8.59165 32.5462 8.0059 33.875 8.0059Z" fill="white"></path>
                                    <path className="logo-path-1" d="M44.2229 11.8182L40.1552 6.38919C39.7918 5.90107 40.1389 5.19058 40.7518 5.19058H41.9341C42.7531 5.19058 43.5124 5.57023 44.0059 6.22648L45.9313 8.80267C46.2404 9.20402 46.837 9.20402 47.1299 8.80267L50.9427 3.69911C51.7237 2.66321 52.9602 2.04492 54.2456 2.04492H54.609C55.2273 2.04492 55.569 2.75541 55.2056 3.24353L48.8329 11.8127C48.6322 12.0839 48.6322 12.4473 48.8329 12.7022L52.8843 18.1312C53.2477 18.6193 52.9006 19.3298 52.2877 19.3298H52.1792C50.6878 19.3298 49.2722 18.6193 48.3827 17.4261L47.1082 15.7231C46.7991 15.3218 46.2025 15.3218 45.9096 15.7231L43.2032 19.3352L40.9145 22.2043C40.025 23.2944 38.718 23.9452 37.3187 23.9995C36.6841 24.0158 36.3208 23.3107 36.7004 22.8009L44.2337 12.7239C44.4235 12.4582 44.4235 12.0731 44.2229 11.8182Z" fill="white"></path>
                                    <path className="logo-path-2" d="M54.6416 2.05078H54.2782C52.9712 2.05078 51.7563 2.66907 50.9753 3.70497L47.1625 8.80853C46.6202 9.42682 46.0344 8.87904 46.0344 8.87904L49.2126 13.1474L48.8872 12.7135C48.6865 12.4423 48.6865 12.0789 48.8872 11.824L55.2599 3.25481C55.607 2.76127 55.2599 2.05078 54.6416 2.05078Z" fill="#1FB2BC"></path>
                                </svg></div>
                            </div>
                        </div>
                        <div style={{ "zIndex": pageparams.achievement ? 150 : -1, "opacity": pageparams.achievement ? 1 : 0 }} className="w-full trans flex overflow-hidden flex-col pt-[125px] justify-center opacity-0 items-center h-full bg-white absolute top-0 z-[-1]">
                            <div className="w-full bg-[#fafafa] trans flex flex-col overflow-y-scroll pay h-full">
                                <div className="benefits my-6">
                                    <h6 className="text-4xl text-[#065d63] font-bold my-6 mb-12 mx-8">Key benefits</h6>
                                    <div className="bene flex flex-wrap justify-center items-center ">
                                        {[{ photo: "www", heading: "Modern website", para: "We launch a fully working site, constantly maintain and update it" },
                                        { photo: "order", heading: "Order with smartphone", para: "70% of customers order from mobile devices, so we took care of the convenience of ordering from phones." },
                                        { photo: "brand", heading: "Brand advertising", para: "Everything has already been tested and configured. We launch the most effective promotion models" },
                                        { photo: "train", heading: "Personnel training", para: "During 3 years thousands of people came to us for various vacancies. We have experience to share with" },
                                        { photo: "center", heading: "Call-center", para: "Professional operators quickly serve a large number of customers from all cities and industries" },
                                        { photo: "system", heading: "Working system", para: "All orders are placed through the CRM-system and in a convenient format are transferred to the administrator of the institution" },
                                        ].map((obja) => {
                                            return <div key={obja.photo} className=" w-[400px] h-[350px] flex justify-start flex-col items-center">
                                                <div className="h-[160px] w-[160px] flex justify-center items-center"><img loading="lazy" src={`pagesmaterial/${obja.photo}.svg`} alt="" /></div>
                                                <h6 className="text-[#065d63] text-[28px] ">{obja.heading}</h6>
                                                <p className="text-sm text-center mt-2 w-[80%] font-light text-slate-500">{obja.para}</p>
                                            </div>
                                        })}
                                    </div>
                                </div>
                                <div className="collage w-full my-20">
                                    <div className="paji w-full flex">
                                        <div className="w-[45%] flex justify-end items-center naag relative">
                                            <div className="flex flex-col gap-10 justify-center items-center">
                                                <div className="w-2/3"><img loading="lazy" src="pagesmaterial/3-years.svg" alt="" /></div>
                                                <h6 className="text-[#686868] w-56 text-center font-semibold tracking-wide text-3xl">of successfull business</h6>
                                            </div>
                                        </div>

                                        <div className="w-[55%] bg-slate-600">
                                            <img loading="lazy" className="w-full" src="pagesmaterial/sybway.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="aaoji flex">
                                        <div className="w-[45%]">
                                            <img loading="lazy" src="pagesmaterial/bold.jpg" alt="" />
                                        </div>
                                        <div className="w-[55%]">
                                            <div className="flex justify-center items-center">
                                                <div className="w-5/12 flex items-center mt-8 flex-col gap-8"><img loading="lazy" src="pagesmaterial/one00.svg" alt="" />
                                                    <h6 className="text-[#686868] w-80 text-center font-semibold tracking-wide text-3xl">satisfied customers</h6>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className="w-1/2 jamal"></div>
                                                <div className="w-1/2"><img loading="lazy" src="pagesmaterial/need.jpg" alt="" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="info mx-[8%] my-16">
                                    <h6 className="text-[#065d63] font-bold text-lg">ІNFORMATION</h6>
                                    <div className="my-4 font-light text-slate-600 text-sm space-y-4">
                                        <p>Our service of delivery of chebureks and yantiks “Burek” has an accessible and convenient process of delivery and payment of our dishes. We have built all our mechanisms so that it was as easy and simple for our guests to place an order and get their dishes.</p>
                                        <p>We deliver all over Lviv. For convenience, we have divided the delivery into 3 zones: green, yellow and red.</p>
                                        <p>We appriciate your time and understand the importance of every minute. So in case of late order, we will give you an apology card, which will contain a pleasant surprise for the next order.</p>
                                        <p>If you drive tired from work and on the way home you come across Burek – be sure to visit! Call 15 minutes before your visit, make a self-pickup of chebureks or yantiks and your dishes will be waiting for you hot!</p>
                                    </div>
                                </div>
                                <div className="meth mx-[8%] space-y-14">
                                    <h6 className="text-[#065d63] text-4xl font-bold">Payment methods</h6>
                                    <div className="flex justify-around ">
                                        <div className="flex gap-12">
                                            <img loading="lazy" src="pagesmaterial/payment-1.svg" alt="" />
                                            <div className="flex flex-col gap-5">
                                                <h6 className="text-[#065d63] text-3xl">Cash</h6>
                                                <p className="text-[#2a2929b3] w-[240px] font-normal text-sm">Pay for your favorite meal by cash when it delivered</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-12">
                                            <img loading="lazy" src="pagesmaterial/payment-2.svg" alt="" />
                                            <div className="flex flex-col gap-5">
                                                <h6 className="text-[#065d63] text-3xl">Card</h6>
                                                <p className="text-[#2a2929b3] w-[240px] font-normal text-sm">Pay for your favorite meals online through the LiqPay service or by card via terminal.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="deli mx-[8%] mt-24">
                                    <h6 className="text-[#065d63] font-bold text-lg">BUREK FOOD DELIVERY IN LVIV</h6>
                                    <div className="my-4 text-base font-light text-[#2a2929b3]">
                                        <p>Our menu is a combination of the crispy golden crust of dough with classic and non-standard fillings. If you like classics – then cheburek or yantik with pork and cheese or chili chicken will definitely satisfy your hunger. And to get a gastronomic delight, we recommend trying cheburek or yantik with tuna, which will definitely not leave you indifferent. And those who can not live without sweet – we offer sweet chebureks or yantiks with banana and chocolate or spicy cherries with home delivery.</p>
                                        <p>We use only fresh ingredients, work with certified Ukrainian suppliers, combine professionalism and unique dough recipes and fillings to surprise you with the most delicious cheburek and yantik in your life.</p>
                                        <p>The most important component in the preparation of chebureks is oil. Burek uses only special oil for deep frying. We have an oil audit every week – so you can be sure of the quality of our oil.</p>
                                    </div>
                                </div>
                                <div className="contacts flex justify-center gap-[6.5%] flex-wrap my-16">
                                    <Link href={"/"} className="flex items-center gap-2 hover:underline decoration-[#065d63]">
                                        <img loading="lazy" src="pagesmaterial/call.svg" alt="" />
                                        <p className="text-[#065d63]">+91 9086053659</p>
                                    </Link>
                                    <Link href={"mailto:pratibhad.amit@gmail.com"} className="flex items-center gap-2 hover:underline decoration-[#065d63]">
                                        <img loading="lazy" src="pagesmaterial/chatting.svg" alt="" />
                                        <p className="text-[#065d63]">pratibhad.amit@gmail.com</p>
                                    </Link>
                                    <Link href={"https://www.instagram.com/enhancewithyash/"} aria-label="instagram" className="flex items-center gap-2 hover:underline decoration-[#065d63]">
                                        <img loading="lazy" src="pagesmaterial/insta.svg" alt="" />
                                        <p className="text-[#065d63]">Instagram</p>
                                    </Link>
                                    <Link href={"https://www.instagram.com/enhancewithyash/"} aria-label="instagram" className="flex items-center gap-2 hover:underline decoration-[#065d63]">
                                        <img loading="lazy" src="pagesmaterial/facebook.svg" alt="" />
                                        <p className="text-[#065d63]">Facebook</p>
                                    </Link>
                                </div>
                                <div className='relative footam flex bg-[#065d63] opacity-1 w-full bottom-0 justify-between items-center p-5'>
                                    <div className='flex justify-center items-center text-[#4BA0A6] gap-6 text-sm font-bold'><p>© Burek 2021-2024</p>
                                        <img loading="lazy" className='w-[30px]' src="https://burek.intexagency.com/wp-content/themes/burek/assets/img/icon-mastercard.svg" alt="" />
                                        <img loading="lazy" className='w-[60px]' src="https://burek.intexagency.com/wp-content/themes/burek/assets/img/icon-visa.svg" alt="" />
                                    </div>
                                    <div className='flex gap-2 items-center text-[#4BA0A6]'><small>by</small> <svg width="56" height="24" viewBox="0 0 56 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="logo-path-1" d="M2.88449 1.03636L2.90076 1.07432C3.15567 1.98006 2.46688 2.86952 1.52318 2.86952H1.50691C0.720494 2.86952 0.0859375 2.23496 0.0859375 1.45397V1.41601C0.0859375 0.635015 0.704223 0.0167297 1.48522 0.000459053C2.11977 -0.0158116 2.70009 0.401802 2.88449 1.03636ZM3.38888 6.61177V18.0338C3.38888 18.8148 2.75433 19.4493 1.97334 19.4493H1.51776C0.736764 19.4493 0.102208 18.8148 0.102208 18.0338V6.61177C0.102208 5.83078 0.736764 5.19623 1.51776 5.19623H1.97334C2.75433 5.19623 3.38888 5.83078 3.38888 6.61177Z" fill="white"></path>
                                        <path className="logo-path-1" d="M6.00293 18.6306V5.99376C6.00293 5.53818 6.36631 5.1748 6.82189 5.1748H7.89575C8.2754 5.1748 8.62251 5.44598 8.69301 5.83105C8.80149 6.42765 9.51197 6.68255 10.0001 6.31918C10.998 5.55445 12.0882 5.1748 13.2868 5.1748C16.389 5.1748 17.951 6.93746 17.951 10.4411V18.609C17.951 19.0645 17.5876 19.4279 17.1321 19.4279H15.4616C15.006 19.4279 14.6427 19.0645 14.6427 18.609V10.4411C14.6427 8.86282 13.9159 8.08183 12.4841 8.08183C11.5241 8.08183 10.5587 8.46148 9.63129 9.2262C9.43062 9.38891 9.32215 9.60585 9.32215 9.86076V18.6306C9.32215 19.0862 8.95877 19.4496 8.50319 19.4496H6.83273C6.36631 19.4442 6.00293 19.0808 6.00293 18.6306Z" fill="white"></path>
                                        <path className="logo-path-1" d="M21.471 2.86914H21.8886C22.4147 2.86914 22.8703 3.23252 22.9787 3.7586L23.0872 4.30096C23.1957 4.81077 23.6513 5.19042 24.1774 5.19042H25.4465C26.0648 5.19042 26.5746 5.70024 26.5746 6.31852V6.91511C26.5746 7.5334 26.0648 8.04321 25.4465 8.04321H24.7577C24.1394 8.04321 23.6296 8.55303 23.6296 9.17132V14.6003C23.6296 15.9236 24.1557 16.5962 25.2078 16.5962H25.4248C26.0431 16.5962 26.5529 17.106 26.5529 17.7243V18.3209C26.5529 18.9391 26.0431 19.449 25.4248 19.449H23.6079C21.4113 19.449 20.3049 18.1582 20.3049 15.5982V3.99724C20.3483 3.37895 20.8581 2.86914 21.471 2.86914Z" fill="white"></path>
                                        <path className="logo-path-1" d="M36.0173 19.4116C36.2884 19.3954 36.5271 19.2652 36.706 19.0645L38.2517 17.1771C38.5229 16.83 38.2517 16.3256 37.8179 16.3961C36.9121 16.5209 36.0227 16.5751 35.1115 16.5751C33.1699 16.5751 31.9171 16.0653 31.3693 15.0294C31.0059 14.3569 31.532 13.5596 32.275 13.5596H38.8104C39.3527 13.5596 39.792 13.1257 39.8246 12.5997C39.8408 12.3285 39.8408 12.0736 39.8408 11.8024C39.8408 7.39304 37.845 5.1748 33.8695 5.1748C29.764 5.1748 27.7139 7.49609 27.7139 12.1441C27.7139 17.009 30.0948 19.4442 34.8512 19.4442C35.2525 19.4442 35.6376 19.4279 36.0173 19.4116ZM33.875 8.0059C35.7081 8.0059 36.6138 8.98757 36.6138 10.9672V11.0756H32.2371C31.5483 11.0756 31.0385 10.3868 31.2771 9.75229C31.6947 8.59165 32.5462 8.0059 33.875 8.0059Z" fill="white"></path>
                                        <path className="logo-path-1" d="M44.2229 11.8182L40.1552 6.38919C39.7918 5.90107 40.1389 5.19058 40.7518 5.19058H41.9341C42.7531 5.19058 43.5124 5.57023 44.0059 6.22648L45.9313 8.80267C46.2404 9.20402 46.837 9.20402 47.1299 8.80267L50.9427 3.69911C51.7237 2.66321 52.9602 2.04492 54.2456 2.04492H54.609C55.2273 2.04492 55.569 2.75541 55.2056 3.24353L48.8329 11.8127C48.6322 12.0839 48.6322 12.4473 48.8329 12.7022L52.8843 18.1312C53.2477 18.6193 52.9006 19.3298 52.2877 19.3298H52.1792C50.6878 19.3298 49.2722 18.6193 48.3827 17.4261L47.1082 15.7231C46.7991 15.3218 46.2025 15.3218 45.9096 15.7231L43.2032 19.3352L40.9145 22.2043C40.025 23.2944 38.718 23.9452 37.3187 23.9995C36.6841 24.0158 36.3208 23.3107 36.7004 22.8009L44.2337 12.7239C44.4235 12.4582 44.4235 12.0731 44.2229 11.8182Z" fill="white"></path>
                                        <path className="logo-path-2" d="M54.6416 2.05078H54.2782C52.9712 2.05078 51.7563 2.66907 50.9753 3.70497L47.1625 8.80853C46.6202 9.42682 46.0344 8.87904 46.0344 8.87904L49.2126 13.1474L48.8872 12.7135C48.6865 12.4423 48.6865 12.0789 48.8872 11.824L55.2599 3.25481C55.607 2.76127 55.2599 2.05078 54.6416 2.05078Z" fill="#1FB2BC"></path>
                                    </svg></div>
                                </div>
                            </div>
                        </div>

                        <div style={{ "zIndex": pageparams.condition ? 150 : -1, "opacity": pageparams.condition ? 1 : 0 }} className="w-full trans flex flex-col justify-center opacity-0 pt-[125px] overflow-hidden items-center h-full bg-white absolute top-0 z-[-1]">

                            <div className="w-full trans flex flex-col overflow-y-scroll pay h-full bg-[#fafafa]">
                                <h6 className="text-4xl text-[#065d63] font-bold p-10">Terms And Conditions</h6>
                                <div className="text-[#2a2929b3] space-y-6 w-[78%] font-light px-[8%] -mt-1">
                                    <p>These Terms and Conditions apply when ordering online from:</p>
                                    <p>Menu Currency: ₹</p>
                                    <p>(hereinafter referred to as the “Restaurant” or “We” or “Us”)
                                        These Terms and Conditions apply to you as a client for online ordering (hereinafter referred to as “you” or the“user” or the “client”)</p>
                                    <p>PLEASE READ THIS TERMS AND CONDITIONS CAREFULLY. IF YOU DO NOT WISH TO BE BOUND BY THESE TERMS AND CONDITIONS THEN YOU SHOULD NOT ACCESS AND/OR USE THE ONLINE ORDERING (HEREINAFTER NAMED “ONLINE ORDERING APPLICATION”). ACCESS AND/OR USE OF THE ONLINE ORDERING BY YOU SHALL BE DEEMED TO BE YOUR ACCEPTANCE OF THESE TERMS AND CONDITIONS.</p>
                                    <p>Subject to applicable legal regulations in force, We may, in our discretion, from time to time amend or otherwise modify the Terms and Conditions of Use. We recommend that You carefully read, each time you order online, the Terms and Conditions as they may affect your rights.</p>
                                    <p>These Terms and Conditions describe the general online ordering terms and conditions between Us and You and different rights and obligations of the Parties.</p>
                                    <p>For the sake of clarity, these Terms and Conditions apply (also) in case of online ordering through the application (hereinafter referred to as the “online ordering application” or the “application“; the applications is the online ordering application used by the Client to place its order for different products and/or services (hereinafter referred to as the “products” and/or “services”).</p>
                                    <p>The online ordering application is owned and operated by the licensor of the license agreement regarding the use of the application in order to order online.
                                        Without affecting the generality of the present Terms and Conditions and for the sake of clarity You must also respect the license agreement regarding the use of the application in order to order online.</p>
                                    <p>The Restaurant shall make all the necessary diligences to ensure that the information in relation with the online ordering is accurate and reliable. However, this cannot be infallible and errors may sometimes occur. You should take appropriate steps to verify all information in relation with the online ordering before using it. To the maximum extent permitted according to the applicable law, the Restaurant disclaims any warranty or representation of any kind, whether express or implied, as to any matter whatsoever relating to the online ordering, including without limitation the availability of the online ordering application.</p>
                                    <p>The Restaurant may from time to time revise the information in relation with the online ordering application and/or process and reserves the right to make such changes without any obligation to notify any past, current or prospective clients. In no event shall the Restaurant be liable for any indirect, special, incidental or consequential damages arising out of any use of the information contained herein and/or in relation with the online ordering process.</p>
                                    <p>By ordering online, you acknowledge and agree that the use of the online ordering application and/or processes at your own risk and the maximum extent permitted according to the applicable law, in no circumstances, shall We be liable for any direct, indirect, incidental, special, consequential, or punitive damages, losses, costs or expenses nor for any loss of profit that results from the use of, or inability to use this online ordering and/or any application and/or material on any site linked to this online ordering application (including but not limited to any viruses or any other errors or defects or failures in computer transmissions or network communications) even if We have been advised of the possibility of such damage. In addition, no liability can be accepted by Us in respect of any changes made to the content of the online ordering application and/or process by unauthorized third parties. All express or implied warranties or representations are excluded to the maximum extent permitted according to the applicable law.</p>
                                    <p>The online ordering application and/or process may include content, information or links to third parties or third party sites. The Restaurant is not responsible for the content of any such sites or neither for the content of any third party advertising or sponsorship nor for compliance of such with any regulations. The links may be accessed at the user’s own risk and the Restaurant makes no representations or warranties about the content, completeness, or accuracy of these links or the sites hyperlinked to this ordering online application. You agree to hold harmless and relieve the Restaurant from any liability whatsoever arising from your use of information from a third party or your use of any third-party website.</p>
                                    <p>Except otherwise expressly mentioned, all the information in relation with the online ordering application (including without limitation the images, buttons and text) are property and/or available with the permission of the licensor of the license agreement regarding the use of the application in order to order online and holds usage rights over them and, may not be copied, distributed, or reproduced or transmitted in any form or by any mean, electronic, mechanical, photocopying, recording or otherwise, without its prior written permission.</p>
                                    <p>The content referring to specific products (e.g. food items), arrangement and texts layout of the online ordering application and/or process, the trademarks, and any other content, are proprietary and are protected according with the legal regulations in force and cannot be used in any way without the express written permission of the Restaurant.
                                        The Client does not obtain any license or right regarding the information in relation with the online ordering and/or application.</p>
                                    <p>If you decide to order online using the online ordering application, you may be asked to provide full contact details and/or to create an account and you may need to accept cookies. You must keep your data confidential and must not disclose it to anyone. The Restaurant reserves the right to suspend the use of the online ordering application and/or process if you breach the Terms and Conditions.</p>
                                    <p>You acknowledge and agree that all orders are treated as an express intention to purchase the nominated products and/or services for the agreed online prices and We treat this as an binding offer from you to purchase such products and services. Any variations must be in writing, otherwise they will not be binding on either party.</p>
                                    <p>The acceptance of any order for any of the products and/or services shall be at the entire discretion of the Restaurant. Our acceptance of an order may occur when you receive an on-screen message and/or email notification and/or an SMS, confirming your order.</p>
                                    <p>The Restaurant reserves the right to refuse any service, terminate your access to the online ordering application and/or process, remove or edit any content or accept your order/s in its sole discretion and without prior notice to you.
                                        The Restaurant’s online ordering application must only be used by persons over the age of eighteen (18) years, or the minimum legal age as permitted by the law or otherwise under the supervision of an adult or guardian.</p>
                                    <p>Any products and/or services provided through the online ordering application are done so on an “as is” and “if available” basis and the Restaurant expressly excludes any warranties, conditions, representations or other terms with respect to the online ordering or the content or products displayed on it, whether express or implied, unless expressly stated to the contrary.</p>
                                    <p>The pictures of the products are for presentation only. The ordered products may have differences (e.g. color, form, etc.) towards the photos existing on the site. The Restaurant is not liable in any way if the description of products is not complete.</p>
                                    <p>Delivery orders are also subject to: i)Your address falling in the defined delivery area of the Restaurant; ii)Availability of the restaurant being online for accepting online orders; iii) Your Order may be subject to a minimum amount per order;
                                        You can pay by any of the methods listed in our checkout screen. Please make sure that if your order is placed using a credit or debit card, the card is valid on the date of your order placement. The Restaurant may provide no refunds to the orders paid online. Contact Us directly to settle any payment dispute or refund claim.</p>
                                    <p>You may be automatically directed to an online listing referring to Your nearby Restaurant service location. Please note that prices, minimum spend restrictions and maximum cash spend restrictions vary from location to location. In addition, if you order on-line, the price charged may be different to the price for the Products had they been ordered in-store or by telephone.</p>
                                    <p>The online order once placed cannot be modified or cancelled either through the website or offline by calling the restaurant. Anyhow, if you wish to cancel or complain about your order, please call your local restaurant service location, details of which will be included in the confirmatory e-mail sent to you upon placing your order and We can see how we can help you.</p>
                                    <p>We will aim to provide you with your ordered products as close as possible to your requested delivery/collection time but we cannot guarantee the delivery time in all the cases. Delivery time may be affected due to bad weather or traffic conditions. This is to ensure the safety of our riders. Delivery service may be temporarily unavailable in selected areas due to bad weather or unforeseen circumstances.</p>
                                    <p>The Client agrees to accept delivery of the Products at the agreed time and place of delivery. If you have chosen for the Products to be delivered, the Restaurant will deliver the order to the main entrance of the delivery address but any deliveries carried into the delivery address will only be made if the driver and you consent to this. If you are not present to take delivery of the goods at the address given in your order, then We will not refund you the price for your order and will charge you for the full amount of your order.</p>
                                    <p>Risk in the Products shall pass to the Client on delivery. Any software service/software is used and/or downloaded at your own risk. If you are in any doubt as to the suitability of the software service/software to be used and/or downloaded for your computer it is recommended that you obtain specialist advice before using and/or downloading it.</p>
                                    <p>You are responsible for maintaining the confidentiality of your personal details, password and payment details. You agree to accept full responsibility for all your activities in relation with the online ordering (application).</p>
                                    <p>You may not assign, sub-license or otherwise transfer any of your rights under these terms and conditions. In case any provision of this agreement is and/or becomes void, illegal, invalid or inapplicable, it shall not affect the validity or the applicability of the other contractual clauses, which shall continue to be in force and to produce legal effects as if the void, illegal, invalid or inapplicable clause was not part of this agreement.</p>
                                    <p>This Terms and Conditions do not affect your statutory rights.</p>
                                    <p>The Restaurant trademarks, as well as the related trademarks of others and related proprietary property are protected from copying and simulation under national and international laws and are not to be reproduced or copied without the express written permission of the Restaurant.</p>
                                    <p>To the fullest extent permitted by law, the Restaurant excludes all liability arising out of its supply of the Products and in particular shall not be responsible for any loss or damage, arising directly or indirectly out of or in connection with delay beyond the estimated delivery or pickup time; any circumstances over which the Restaurant had no control of the consequences and which the Restaurant could not avoid by the exercise of reasonable care, or any indirect or unforeseeable loss suffered or incurred by the Client or others. In any event, the Restaurant’s liability to the Client shall not exceed the total price charged for the relevant products/and or services.</p>
                                    <p>This terms and Conditions shall be governed by and construed in accordance with the laws of the country in which the Restaurant is headquartered and the Restaurant and any dispute arising out of or in connection with these shall be settled by the competent courts from the headquarter of the Restaurant, excluding the possibility of reference to conflict of laws.</p>
                                </div>
                                <div className='relative footam flex bg-[#065d63] mt-16 opacity-1 w-full bottom-0 justify-between items-center p-5'>
                                    <div className='flex justify-center items-center text-[#4BA0A6] gap-6 text-sm font-bold'><p>© Burek 2021-2024</p>
                                        <img loading="lazy" className='w-[30px]' src="https://burek.intexagency.com/wp-content/themes/burek/assets/img/icon-mastercard.svg" alt="" />
                                        <img loading="lazy" className='w-[60px]' src="https://burek.intexagency.com/wp-content/themes/burek/assets/img/icon-visa.svg" alt="" />
                                    </div>
                                    <div className='flex gap-2 items-center text-[#4BA0A6]'><small>by</small> <svg width="56" height="24" viewBox="0 0 56 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="logo-path-1" d="M2.88449 1.03636L2.90076 1.07432C3.15567 1.98006 2.46688 2.86952 1.52318 2.86952H1.50691C0.720494 2.86952 0.0859375 2.23496 0.0859375 1.45397V1.41601C0.0859375 0.635015 0.704223 0.0167297 1.48522 0.000459053C2.11977 -0.0158116 2.70009 0.401802 2.88449 1.03636ZM3.38888 6.61177V18.0338C3.38888 18.8148 2.75433 19.4493 1.97334 19.4493H1.51776C0.736764 19.4493 0.102208 18.8148 0.102208 18.0338V6.61177C0.102208 5.83078 0.736764 5.19623 1.51776 5.19623H1.97334C2.75433 5.19623 3.38888 5.83078 3.38888 6.61177Z" fill="white"></path>
                                        <path className="logo-path-1" d="M6.00293 18.6306V5.99376C6.00293 5.53818 6.36631 5.1748 6.82189 5.1748H7.89575C8.2754 5.1748 8.62251 5.44598 8.69301 5.83105C8.80149 6.42765 9.51197 6.68255 10.0001 6.31918C10.998 5.55445 12.0882 5.1748 13.2868 5.1748C16.389 5.1748 17.951 6.93746 17.951 10.4411V18.609C17.951 19.0645 17.5876 19.4279 17.1321 19.4279H15.4616C15.006 19.4279 14.6427 19.0645 14.6427 18.609V10.4411C14.6427 8.86282 13.9159 8.08183 12.4841 8.08183C11.5241 8.08183 10.5587 8.46148 9.63129 9.2262C9.43062 9.38891 9.32215 9.60585 9.32215 9.86076V18.6306C9.32215 19.0862 8.95877 19.4496 8.50319 19.4496H6.83273C6.36631 19.4442 6.00293 19.0808 6.00293 18.6306Z" fill="white"></path>
                                        <path className="logo-path-1" d="M21.471 2.86914H21.8886C22.4147 2.86914 22.8703 3.23252 22.9787 3.7586L23.0872 4.30096C23.1957 4.81077 23.6513 5.19042 24.1774 5.19042H25.4465C26.0648 5.19042 26.5746 5.70024 26.5746 6.31852V6.91511C26.5746 7.5334 26.0648 8.04321 25.4465 8.04321H24.7577C24.1394 8.04321 23.6296 8.55303 23.6296 9.17132V14.6003C23.6296 15.9236 24.1557 16.5962 25.2078 16.5962H25.4248C26.0431 16.5962 26.5529 17.106 26.5529 17.7243V18.3209C26.5529 18.9391 26.0431 19.449 25.4248 19.449H23.6079C21.4113 19.449 20.3049 18.1582 20.3049 15.5982V3.99724C20.3483 3.37895 20.8581 2.86914 21.471 2.86914Z" fill="white"></path>
                                        <path className="logo-path-1" d="M36.0173 19.4116C36.2884 19.3954 36.5271 19.2652 36.706 19.0645L38.2517 17.1771C38.5229 16.83 38.2517 16.3256 37.8179 16.3961C36.9121 16.5209 36.0227 16.5751 35.1115 16.5751C33.1699 16.5751 31.9171 16.0653 31.3693 15.0294C31.0059 14.3569 31.532 13.5596 32.275 13.5596H38.8104C39.3527 13.5596 39.792 13.1257 39.8246 12.5997C39.8408 12.3285 39.8408 12.0736 39.8408 11.8024C39.8408 7.39304 37.845 5.1748 33.8695 5.1748C29.764 5.1748 27.7139 7.49609 27.7139 12.1441C27.7139 17.009 30.0948 19.4442 34.8512 19.4442C35.2525 19.4442 35.6376 19.4279 36.0173 19.4116ZM33.875 8.0059C35.7081 8.0059 36.6138 8.98757 36.6138 10.9672V11.0756H32.2371C31.5483 11.0756 31.0385 10.3868 31.2771 9.75229C31.6947 8.59165 32.5462 8.0059 33.875 8.0059Z" fill="white"></path>
                                        <path className="logo-path-1" d="M44.2229 11.8182L40.1552 6.38919C39.7918 5.90107 40.1389 5.19058 40.7518 5.19058H41.9341C42.7531 5.19058 43.5124 5.57023 44.0059 6.22648L45.9313 8.80267C46.2404 9.20402 46.837 9.20402 47.1299 8.80267L50.9427 3.69911C51.7237 2.66321 52.9602 2.04492 54.2456 2.04492H54.609C55.2273 2.04492 55.569 2.75541 55.2056 3.24353L48.8329 11.8127C48.6322 12.0839 48.6322 12.4473 48.8329 12.7022L52.8843 18.1312C53.2477 18.6193 52.9006 19.3298 52.2877 19.3298H52.1792C50.6878 19.3298 49.2722 18.6193 48.3827 17.4261L47.1082 15.7231C46.7991 15.3218 46.2025 15.3218 45.9096 15.7231L43.2032 19.3352L40.9145 22.2043C40.025 23.2944 38.718 23.9452 37.3187 23.9995C36.6841 24.0158 36.3208 23.3107 36.7004 22.8009L44.2337 12.7239C44.4235 12.4582 44.4235 12.0731 44.2229 11.8182Z" fill="white"></path>
                                        <path className="logo-path-2" d="M54.6416 2.05078H54.2782C52.9712 2.05078 51.7563 2.66907 50.9753 3.70497L47.1625 8.80853C46.6202 9.42682 46.0344 8.87904 46.0344 8.87904L49.2126 13.1474L48.8872 12.7135C48.6865 12.4423 48.6865 12.0789 48.8872 11.824L55.2599 3.25481C55.607 2.76127 55.2599 2.05078 54.6416 2.05078Z" fill="#1FB2BC"></path>
                                    </svg></div>
                                </div>

                            </div>

                        </div>
                        
                        <div style={{ "zIndex": pageparams.about ? 150 : -1, "opacity": pageparams.about ? 1 : 0 }} className="w-full trans flex flex-col justify-center opacity-0 overflow-hidden pt-[125px] items-center h-full bg-white absolute top-0 z-[-1]">
                            <div className="w-full trans flex flex-col  overflow-y-scroll overflow-x-hidden pay h-full bg-[#fafafa]">
                                <div className="opening pl-8 flex">
                                    <div className="flex flex-col w-[44%]">
                                        <h6 className="text-[#065d63] text-[40px] py-7 font-bold">About Us</h6>
                                        <div className="text-[#2a2929b3] font-light space-y-8 pl-16 pr-6">
                                            <p>Our journey began in 2018 with the opening of our first café in Lviv, aiming to change people’s perceptions of chebureks. Traditionally, chebureks are associated with dingy eateries, leading many to prefer making them at home. Burek is here to break those stereotypes!</p>
                                            <p>Today, we have expanded to <b className="font-bold">27 cozy locations</b> across the city, from the modern Pidholosko neighborhoods to the historic center of ancient Lviv.</p>
                                            <p>We value transparency. Our chefs work in open kitchens, allowing you to watch the preparation of your meal.</p>

                                        </div>
                                    </div>
                                    <div className="flex w-[56%] relative ">
                                        <img loading="lazy" className="h-full max-w-max" src="pagesmaterial/bgopened.jpg" alt="" />
                                        <div className="absolute bottom-8 olama left-2 px-[14%] text-white font-semibold text-xl">Our journey began in 2018 with the opening of our first café in Lviv, aiming to transform people's perceptions of craft streetfood.</div>
                                    </div>
                                </div>
                                <div className="pro my-8 pl-8 text-[#2a2929b3] font-light ">
                                    <h6 className="text-[#065d63] text-[40px] py-7 font-bold ">Our Product</h6>
                                    <div className="flex">
                                        <div className="w-[45%] pl-[6%] pr-12 space-y-8 ">
                                        <p>Burek is a delivery of burgers, rolls, chebureks and yantiks. We care for you to receive your order of chebureks and yantiks as quick as possible.</p>
                                        <p className="pl-8 py-4 nanai relative flex items-center pr-8">Chebureks “Burek” are prepared specifically for each order, so you can be sure in quality of the cooked dish.</p>
                                    </div>
                                    <div className="w-[55%] space-y-6">
                                        <p className="relative pl-4 lalau">Burek is just that one cheburek, back in fashion!</p>
                                        <p className="relative pl-4 lalau w-[74%]">If you want to stay at home – order fast and tasty delivery of chebureks and yantiks from Burek in Lviv. We will make sure that you are full and satisfied, as well as we will save your time and money.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="questions pl-8 flex my-6">
                                    <div className="w-[45%] ">
                                        <h6 className="text-4xl py-10 text-[#065d63] font-bold">Frequently asked questions</h6>
                                        <div className="flex flex-col px-8 -mt-2">
                                        <div className="relative">
                                                <h6 onClick={showanswers} className="text-[#2a2929b3] simcity flex gap-[14px] my-2 items-center font-semibold text-[17px] leading-6 cursor-pointer"><svg className="svgtrans" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L9 8.75488L17 1" stroke="#065D63"></path></svg>How to order from Burek?</h6>
                                                <p className="text-[17px] relative hidden -z-50  opacity-0 transition-all pl-8 py-2 text-[#2a2929b3] leading-6 font-light">You can order delivery of chebureks and yantiks from Burek on our website or via telephone.</p>
                                        </div>
                                        <div className="relative">
                                            <h6 onClick={showanswers} className="text-[#2a2929b3] simcity flex gap-[14px] my-2 items-center font-semibold text-[17px] leading-6 cursor-pointer"><svg className="svgtrans" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L9 8.75488L17 1" stroke="#065D63"></path></svg>How to order from Burek?</h6>
                                            <p className="text-[17px] relative hidden -z-50 opacity-0 transition-all pl-8 py-2 text-[#2a2929b3] leading-6 font-light">For your convenience we devided Lviv city into 3 delivery zones: green, yellow and red. Details of each one you can find here: https://burek.intexagency.com/payment-delivery/</p>
                                        </div>
                                        <div className="relative">
                                            <h6 onClick={showanswers} className="text-[#2a2929b3] simcity flex gap-[14px] my-2 items-center font-semibold text-[17px] leading-6 cursor-pointer"><svg className="svgtrans" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L9 8.75488L17 1" stroke="#065D63"></path></svg>How to order from Burek?</h6>
                                            <p className="text-[17px] relative hidden -z-50  opacity-0 transition-all pl-8 py-2 text-[#2a2929b3] leading-6 font-light">Yes, you can pay with cash as well with card</p>
                                        </div>
                                        <div className="relative">
                                                <h6 onClick={showanswers} className="text-[#2a2929b3] simcity flex gap-[14px] my-2 items-center font-semibold text-[17px] leading-6 cursor-pointer"><svg className="svgtrans" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L9 8.75488L17 1" stroke="#065D63"></path></svg>How to order from Burek?</h6>
                                                <div className="text-[17px] relative hidden -z-50 space-y-4  opacity-0 transition-all pl-8 py-2 text-[#2a2929b3] leading-6 font-light">
                                                    <p>Delivery time depends on your address:</p>
                                                    <p>Green zone – up to 29 minutes;</p>
                                                    <p>Yellow zone – up to 39 minutes;</p>
                                                    <p>Red zone – up to 59 minutes;</p>
                                               </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="w-[55%] ">
                                        <img loading="lazy" className="rounded-xl" src="pagesmaterial/cup.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="reviews py-16  flex flex-col gap-7">
                                    <h6 className="text-4xl text-center text-[#065d63] font-bold">Burek Reviews</h6>
                                    <div className="flex pb-4 pt-3.5 justify-center overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,#fafafa_20%,#fafafa_80%,transparent)]">
                                        <motion.div
                                        initial={{
                                            translateX:"-10%"
                                        }}
                                        animate={{
                                            translateX:"40%"
                                        }}
                                        transition={{
                                            repeat:Infinity,
                                            ease:"linear",
                                            duration:60
                                        }}
                                         className=" flex  gap-6 flex-none pr-6">
                                        {[...reviews,...reviews].map((review)=>{
                                            return  <div key={uuidv4()} className="bg-white p-6 min-w-[550px] max-w-[550px] rounded-xl flex flex-col gap-5 revive">
                                            <div className="space-y-2.5">
                                                <h6 className="text-[#2a2929b3] font-bold text-[23px] leading-6">{review.name}</h6>
                                            <div className="flex">
                                               <img loading="lazy" className="w-5" src="pagesmaterial/star.svg" alt="" />
                                               <img loading="lazy" className="w-5" src="pagesmaterial/star.svg" alt="" />
                                               <img loading="lazy" className="w-5" src="pagesmaterial/star.svg" alt="" />
                                               <img loading="lazy" className="w-5" src="pagesmaterial/star.svg" alt="" />
                                               <img loading="lazy" className="w-5" src="pagesmaterial/star.svg" alt="" />
                                            </div>
                                            </div>
                                            <p className="text-[#2a2929b3] text-[17px] leading-6">{review.pra}</p>
                                        </div>
                                        })}
                                        </motion.div>
                                        
                                    </div>
                                </div>
                                <div className="become_part w-full bg-[#F4B42E] text-white goof">
<div className="contemprary tracking-wide py-[6rem] w-[383px] relative left-[20%] flex flex-col gap-8">
    <div>
        <p className="text-sm font-light">WELCOME TO BUREK!</p>
        <h6 className="text-5xl mt-1 font-bold">Become part of Burek Family</h6>
    </div>
    <p className="text-2xl font-medium">Start working in our friendly team of professionals</p>
    <button className="px-14 py-5 text-xs font-bold tracking-widest bg-[#065d63] text-[#ecb12f] rounded-[0.225rem] hover:bg-white hover:text-[#065d63] transition-colors">TRY NOW!</button>
</div>
                                </div>
                                <div className='relative footam flex bg-[#065d63] opacity-1 w-full bottom-0 justify-between items-center p-5'>
                                    <div className='flex justify-center items-center text-[#4BA0A6] gap-6 text-sm font-bold'><p>© Burek 2021-2024</p>
                                        <img loading="lazy" className='w-[30px]' src="https://burek.intexagency.com/wp-content/themes/burek/assets/img/icon-mastercard.svg" alt="" />
                                        <img loading="lazy" className='w-[60px]' src="https://burek.intexagency.com/wp-content/themes/burek/assets/img/icon-visa.svg" alt="" />
                                    </div>
                                    <div className='flex gap-2 items-center text-[#4BA0A6]'><small>by</small> <svg width="56" height="24" viewBox="0 0 56 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="logo-path-1" d="M2.88449 1.03636L2.90076 1.07432C3.15567 1.98006 2.46688 2.86952 1.52318 2.86952H1.50691C0.720494 2.86952 0.0859375 2.23496 0.0859375 1.45397V1.41601C0.0859375 0.635015 0.704223 0.0167297 1.48522 0.000459053C2.11977 -0.0158116 2.70009 0.401802 2.88449 1.03636ZM3.38888 6.61177V18.0338C3.38888 18.8148 2.75433 19.4493 1.97334 19.4493H1.51776C0.736764 19.4493 0.102208 18.8148 0.102208 18.0338V6.61177C0.102208 5.83078 0.736764 5.19623 1.51776 5.19623H1.97334C2.75433 5.19623 3.38888 5.83078 3.38888 6.61177Z" fill="white"></path>
                                        <path className="logo-path-1" d="M6.00293 18.6306V5.99376C6.00293 5.53818 6.36631 5.1748 6.82189 5.1748H7.89575C8.2754 5.1748 8.62251 5.44598 8.69301 5.83105C8.80149 6.42765 9.51197 6.68255 10.0001 6.31918C10.998 5.55445 12.0882 5.1748 13.2868 5.1748C16.389 5.1748 17.951 6.93746 17.951 10.4411V18.609C17.951 19.0645 17.5876 19.4279 17.1321 19.4279H15.4616C15.006 19.4279 14.6427 19.0645 14.6427 18.609V10.4411C14.6427 8.86282 13.9159 8.08183 12.4841 8.08183C11.5241 8.08183 10.5587 8.46148 9.63129 9.2262C9.43062 9.38891 9.32215 9.60585 9.32215 9.86076V18.6306C9.32215 19.0862 8.95877 19.4496 8.50319 19.4496H6.83273C6.36631 19.4442 6.00293 19.0808 6.00293 18.6306Z" fill="white"></path>
                                        <path className="logo-path-1" d="M21.471 2.86914H21.8886C22.4147 2.86914 22.8703 3.23252 22.9787 3.7586L23.0872 4.30096C23.1957 4.81077 23.6513 5.19042 24.1774 5.19042H25.4465C26.0648 5.19042 26.5746 5.70024 26.5746 6.31852V6.91511C26.5746 7.5334 26.0648 8.04321 25.4465 8.04321H24.7577C24.1394 8.04321 23.6296 8.55303 23.6296 9.17132V14.6003C23.6296 15.9236 24.1557 16.5962 25.2078 16.5962H25.4248C26.0431 16.5962 26.5529 17.106 26.5529 17.7243V18.3209C26.5529 18.9391 26.0431 19.449 25.4248 19.449H23.6079C21.4113 19.449 20.3049 18.1582 20.3049 15.5982V3.99724C20.3483 3.37895 20.8581 2.86914 21.471 2.86914Z" fill="white"></path>
                                        <path className="logo-path-1" d="M36.0173 19.4116C36.2884 19.3954 36.5271 19.2652 36.706 19.0645L38.2517 17.1771C38.5229 16.83 38.2517 16.3256 37.8179 16.3961C36.9121 16.5209 36.0227 16.5751 35.1115 16.5751C33.1699 16.5751 31.9171 16.0653 31.3693 15.0294C31.0059 14.3569 31.532 13.5596 32.275 13.5596H38.8104C39.3527 13.5596 39.792 13.1257 39.8246 12.5997C39.8408 12.3285 39.8408 12.0736 39.8408 11.8024C39.8408 7.39304 37.845 5.1748 33.8695 5.1748C29.764 5.1748 27.7139 7.49609 27.7139 12.1441C27.7139 17.009 30.0948 19.4442 34.8512 19.4442C35.2525 19.4442 35.6376 19.4279 36.0173 19.4116ZM33.875 8.0059C35.7081 8.0059 36.6138 8.98757 36.6138 10.9672V11.0756H32.2371C31.5483 11.0756 31.0385 10.3868 31.2771 9.75229C31.6947 8.59165 32.5462 8.0059 33.875 8.0059Z" fill="white"></path>
                                        <path className="logo-path-1" d="M44.2229 11.8182L40.1552 6.38919C39.7918 5.90107 40.1389 5.19058 40.7518 5.19058H41.9341C42.7531 5.19058 43.5124 5.57023 44.0059 6.22648L45.9313 8.80267C46.2404 9.20402 46.837 9.20402 47.1299 8.80267L50.9427 3.69911C51.7237 2.66321 52.9602 2.04492 54.2456 2.04492H54.609C55.2273 2.04492 55.569 2.75541 55.2056 3.24353L48.8329 11.8127C48.6322 12.0839 48.6322 12.4473 48.8329 12.7022L52.8843 18.1312C53.2477 18.6193 52.9006 19.3298 52.2877 19.3298H52.1792C50.6878 19.3298 49.2722 18.6193 48.3827 17.4261L47.1082 15.7231C46.7991 15.3218 46.2025 15.3218 45.9096 15.7231L43.2032 19.3352L40.9145 22.2043C40.025 23.2944 38.718 23.9452 37.3187 23.9995C36.6841 24.0158 36.3208 23.3107 36.7004 22.8009L44.2337 12.7239C44.4235 12.4582 44.4235 12.0731 44.2229 11.8182Z" fill="white"></path>
                                        <path className="logo-path-2" d="M54.6416 2.05078H54.2782C52.9712 2.05078 51.7563 2.66907 50.9753 3.70497L47.1625 8.80853C46.6202 9.42682 46.0344 8.87904 46.0344 8.87904L49.2126 13.1474L48.8872 12.7135C48.6865 12.4423 48.6865 12.0789 48.8872 11.824L55.2599 3.25481C55.607 2.76127 55.2599 2.05078 54.6416 2.05078Z" fill="#1FB2BC"></path>
                                    </svg></div>
                                </div>

                            </div>
                        </div>
                     
                        <div style={{ "left": otherFromChild.typo ? "0px" : "100%" }} className='h-full w-[55%] bg-white absolute left-[100%] tradder z-[2000] top-0 '>
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

                    </div>
                </div>
            </main>
        </>
    )
}

