import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

const ABOUT = ({pageparams}) => {
    const [reviews, setreviews] = useState([{ name: "Yash Dwivedi", pra: "Extremely tasty chebureks, even in the famous Bryukhovychi are not as good as yours!<br/>Very tasty and filling, I will come with 10/10" },
        { name: "Akhil Dwivedi", pra: "Yesterday I tasted with my family chebureks with meat and cheese, well, what can I say))))) delicious and very filling. I recommend to everyone !!!! Special thanks to the staff at Levandivka, very nice staff." },
        { name: "Pratibha Dwivedi", pra: "Took chebureks in Burek on Levandivka. Delicious chebureks are large, hearty, well packaged, not too greasy, a lot of fillings. The restaurant itself is clean, cozy, has lots of space. prices are affordable." },
        { name: "Amit Dwivedi", pra: "Tried chebureks at Burek on Levandivka—absolutely delicious! Large, hearty, well-filled, not greasy, and perfectly packed. The place is clean, cozy, spacious, and very affordable. Highly recommend!" },
        { name: "Prakashit Bhava", pra: "Delicious burek! Flaky pastry with perfectly seasoned fillings—tried the meat and cheese, both were amazing. Cozy atmosphere and great service. Highly recommend!" }
        ])
     const showanswers = (e) => {
    
            let papabol
            if (e.target.classList.contains("simcity")) {
                papabol = e.target
            }
            else {
                papabol = e.target.parentElement
            }
            let headings = document.getElementsByClassName("simcity")
            for (let index = 0; index < headings.length; index++) {
                const element = headings[index];
                if (element == papabol) {
    
                    papabol.classList.add("actno1")
                    papabol.children[0].style.transform = "rotate(-180deg)"
                    papabol.nextElementSibling.classList.add("textshow")
    
                }
                else {
                    element.classList.remove("actno1")
                    element.children[0].style.transform = "rotate(0deg)"
                    element.nextElementSibling.classList.remove("textshow")
    
                }
            }
    
        }
  return (
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
                        translateX: "-10%"
                    }}
                    animate={{
                        translateX: "40%"
                    }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 60
                    }}
                    className=" flex  gap-6 flex-none pr-6">
                    {[...reviews, ...reviews].map((review,index) => {
                        return <div key={index} className="bg-white p-6 min-w-[550px] max-w-[550px] rounded-xl flex flex-col gap-5 revive">
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
  )
}

export default ABOUT