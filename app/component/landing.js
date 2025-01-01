import React from 'react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useRef } from 'react'

const LANDING = ({openmenu}) => {
    const router = useRouter()
    const [activeimgno,setactiveimgno] = useState(1)
    const jojo1 = useRef()
    const jojo2 = useRef()
    const jojo3 = useRef()
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
  return (
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
  )
}

export default LANDING