"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'

const NAVBAR = ({setpageparams,pageparams,disha,setdisha,dataFromChild , setvalue}) => {
    const searchparams = useSearchParams()
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
  return (
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
  )
}

export default NAVBAR