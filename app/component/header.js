import React from 'react'
import { toast } from "react-toastify";
import Link from 'next/link';

const HEADER = ({flicker, setfakeflicker , openmenu}) => {
   
  return (
    <header onClick={() => {
        setfakeflicker(false)
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
  )
}

export default HEADER