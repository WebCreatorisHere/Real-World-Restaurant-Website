import React from 'react'
import Link from 'next/link'

const ACHIEVEMENT = ({pageparams}) => {
  return (
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
  )
}

export default ACHIEVEMENT