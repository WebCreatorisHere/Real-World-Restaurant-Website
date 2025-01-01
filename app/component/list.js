import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { fetchcart, fetchdata } from '../actions/datasaver';
import { ToastContainer ,toast} from "react-toastify";
import { Bounce } from "react-toastify";
import Image from 'next/image';
import Bigbrother from './bigbrother';
import 'react-toastify/dist/ReactToastify.css';

const LIST = ({ sendDataToParent, luci }) => {

  const [data, setdata] = useState([{ imgname: "multiple", title: "COMBO" }, { imgname: "burg", title: "BURGERS" }, { imgname: "wraps", title: "WRAPS" }, { imgname: "snacks", title: "SNACKS" }, { imgname: "sauce", title: "SAUCES" }, { imgname: "saladnsoup", title: "SALADS & SOUPS" }, { imgname: "dessert", title: "DESSERTS" }, { imgname: "colddrink", title: "DRINKS" }])
  const items = useRef()
  const [itemdata, setitemdata] = useState([])
  const [count, setcount] = useState({})
  const [cart, setcart] = useState([])
  const [singularity, setsingularity] = useState({})
  const [total, settotal] = useState(1)
  const [ingredients, setingredients] = useState([{ identity: "Rukola", imgname: "ruke", weight: 5, price: 10 }, { identity: "Chilly pepper", imgname: "chilli", weight: 2, price: 10 }, { identity: "Mushrooms", imgname: "mushroom", weight: 30, price: 14 }, { identity: "Tomatoes", imgname: "tomo", weight: 30, price: 14 }, { identity: "Feta", imgname: "feta", weight: 30, price: 24 }, { identity: "BBQ Sauce", imgname: "bbq", weight: 40, price: 28 }, { identity: "Cheese Sauce", imgname: "cheese", weight: 40, price: 28 }, { identity: "Firm Sauce", imgname: "firm", weight: 40, price: 28 }, { identity: "Garlic Sauce", imgname: "garlic", weight: 40, price: 28 }])
  const [addition, setaddition] = useState([])
  const [ingprice, setingprice] = useState(0)
  const [ingrecount, setIngrecount] = useState({})
  useEffect(() => {
    
    exaa()
  }, [])
 
  const exaa = async () => {
    try {
      let raspberry = await fetchcart();  // Fetch latest data from the cart

      // Build the new count state from the raspberry array
      let newCount = {};
      for (let index = 0; index < raspberry.length; index++) {
        if(!raspberry[index].addions){
        newCount[raspberry[index].name] = raspberry[index].no_of_item;
      }
      }

      // Set the new state in one go
      setcount(newCount);
      sendDataToParent(raspberry)
      setcart(raspberry)

      // Log the new count (this will show the correct state object)

    } catch (error) {
      console.error('Error updating count:', error);
    }
  };
  useEffect(() => {
  }, [ingrecount])

  const pushdown = () => {
    items.current.scrollTo({ top: items.current.scrollTop + 190, behavior: 'smooth' })
  }
  const pushup = () => {
    items.current.scrollTo({ top: items.current.scrollTop - 190, behavior: 'smooth' })
  }
  const fetcher = async (locatora) => {
    document.querySelector(".bigbrother").classList.remove("visibility")
    let givendata = await fetchdata(locatora)
    setitemdata(givendata)
    document.querySelector(".types").classList.add("afterlife")
    setTimeout(() => {
      for (let index = 0; index < document.getElementsByClassName("box").length; index++) {
        document.querySelectorAll(".box")[index].classList.add('afterworld')

      }
    }, 1000);
    for (let index = 0; index < document.querySelectorAll(".sacc").length; index++) {
      const element = document.querySelectorAll(".sacc")[index]
      if (locatora == element.children[0].children[1].innerHTML) {
        setTimeout(() => {

          document.querySelectorAll(".sacc")[index].children[1].classList.add("upper")

        }, 500);
      }
      else if (locatora == element.children[0].children[1].innerHTML.replace("&amp;", "&")) {
        setTimeout(() => {

          document.querySelectorAll(".sacc")[index].children[1].classList.add("upper")
        }, 500);
      }

      for (let index = 0; index < document.querySelectorAll(".upper").length; index++) {
        const bar = document.querySelectorAll(".upper")[index]
        if (document.querySelectorAll(".upper").length >= 1) {
          if (bar.parentElement != element) {
            bar.classList.remove("upper")
          }
        }

      }

    }

  }
  const promoshow = (locatora) => {
    setitemdata([{ name: "Every 5th burger is free", discount: -40, description: 'When ordering five chebureks from "Burek", get the 6th as a gift.', imgname: "promo", type: "promo" }])
    setTimeout(() => {
      for (let index = 0; index < document.getElementsByClassName("box").length; index++) {
        document.querySelectorAll(".box")[index].classList.add('afterworld')

      }
    }, 1000);
    document.querySelector(".bigbrother").classList.remove("visibility")
    document.querySelector(".types").classList.add("afterlife")
    setTimeout(() => {
      for (let index = 0; index < document.getElementsByClassName("box").length; index++) {
        document.querySelectorAll(".box")[index].classList.add('afterworld')

      }
    }, 1000);
    for (let index = 0; index < document.querySelectorAll(".sacc").length; index++) {
      const element = document.querySelectorAll(".sacc")[index]
      if (locatora == element.children[0].children[1].innerHTML) {
        setTimeout(() => {

          document.querySelectorAll(".sacc")[index].children[1].classList.add("upper")

        }, 500);
      }
      else if (locatora == element.children[0].children[1].innerHTML.replace("&amp;", "&")) {
        setTimeout(() => {

          document.querySelectorAll(".sacc")[index].children[1].classList.add("upper")
        }, 500);
      }

      for (let index = 0; index < document.querySelectorAll(".upper").length; index++) {
        const bar = document.querySelectorAll(".upper")[index]
        if (document.querySelectorAll(".upper").length >= 1) {
          if (bar.parentElement != element) {
            bar.classList.remove("upper")
          }
        }

      }

    }
  }
  useEffect(() => {
    luci ? console.log("nothing") : document.querySelector(".types").classList.remove("afterlife")
    luci ? console.log("nothing") : document.querySelector(".bigbrother").classList.remove("visibility")


  }, [luci])


  const additem = async (e) => {
    e.stopPropagation()
    e.target.src ? e.target.parentElement.classList.add("padding-increaser") : e.target.classList.add("padding-increaser")
    e.target.src ? e.target.parentElement.nextElementSibling.classList.add("increaser") : e.target.nextSibling.classList.add("increaser")

  }

  const increase = async (item, e) => {
    e.stopPropagation()
    let a = await fetch("/dpi", {

      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify(item),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    transferData(item)
    toast.success('Item Added to Cart', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      })
  }
  const decrease = async (item, e) => {
    e.stopPropagation()
    let a = await fetch("/dpi", {

      // Adding method type
      method: "DELETE",

      // Adding body or contents to send
      body: JSON.stringify(item),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

    let res = await a.json()
    if (res.success == true) {
      e.target.parentElement.previousElementSibling.classList.remove("padding-increaser")
      e.target.parentElement.classList.remove("increaser")
    }
    transferData(item)
    toast.success('Item Removed from Cart!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      })
  }
  const transferData = async (item) => {
    let raspberry = await fetchcart()
    sendDataToParent(raspberry);  // Pass the array to the parent function
    setcart(raspberry)
    
    let aaa = await raspberry.filter((obj) => { return obj.name == item.name})[0]
    aaa ? setcount({ ...count, [item.name]: aaa.no_of_item }) : console.log('deke')

  };

  const changer = () => {
    setTimeout(() => {

      let selected = document.getElementsByClassName("lamput")

      for (let index = 0; index < selected.length; index++) {
        const element = selected[index];
        if (element.innerHTML != "") {
          element.parentElement.classList.add("increaser")
          element.parentElement.previousSibling.classList.add("padding-increaser")
        }
      }
    }, 500);
  }
  const wholedetails = async (item) => {
    let brother = document.querySelector(".bigbrother")
    {
      singularity.type != "promo" && brother.children[0].children[0].classList.remove("tapna")
      brother.children[0].children[0].nextElementSibling.classList.remove("tapna")
      setTimeout(() => {

        setsingularity(item)
      }, 0);

      setTimeout(() => {
        brother.children[0].children[0].classList.add("tapna")
      }, 1000)

      setTimeout(() => {
        item.extra ? brother.children[0].children[0].nextElementSibling.classList.add("tapna") : "noo"
      }, 2000)
    }
    brother.classList.add("visibility")
    document.querySelector(".bbbbb").scrollTop = 0

  }
  

  
  const scroller = (delay) => {
    setTimeout(() => {

      document.querySelector(".bbbbb").scrollTo({ top: document.querySelector(".bbbbb").scrollHeight - 750, behavior: 'smooth' })

    }, 500);

  }

  const handlesetaddition = (dataFromChild)=>{
    setaddition(dataFromChild)
  }
  const handlesetingprice = (dataFromChild)=>{
    setingprice(dataFromChild)
  }
  const handlesetingrecount = (dataFromChild)=>{
    setIngrecount(dataFromChild)
  }
  const handlesettotal = (dataFromChild)=>{
    settotal(dataFromChild)
  }
  return (
    <div style={{ left: luci ? "6rem" : "-9rem", opacity: luci ? 1 : 0 }} className={`menua before:border-b after:border-t justify-center bg-[#f7f6fb] flex flex-col absolute top-0  z-[2000] h-full`}>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
      <button aria-label="search" onClick={pushup} className="bg-[#f4b42d] z-50 hover:bg-[#065d63] transition w-[3.65rem] rounded-full absolute top-3 left-[36%] flex justify-center py-3.5"><img loading="lazy" src="materials/arrow-top.svg" alt="" /></button>

      <div ref={items} className='nnnnn py-8 overflow-y-scroll bg-[#f7f6fb] relative z-20'>
        {data.map((item) => {
          return <div onClick={() => {
            fetcher(item.title)
            changer()
          }} key={item.imgname} className="px-6  relative cursor-pointer hover:bg-[#efefef] sacc">
            <div className="text-center py-6 text-[#676668] font-medium border-b">
              <div className="w-40"><img loading="lazy" src={`materials/${item.imgname}.png`} alt="" /></div>
              <h6 className="mt-2">{item.title}</h6>
            </div>
            <div className='sider'></div>
          </div>
        })}
        <div onClick={() => { promoshow("PROMO") }
        } className="px-6  relative cursor-pointer hover:bg-[#efefef] sacc">
          <div className="text-center py-6 text-[#676668] font-medium border-b">
            <div className="w-40"><img loading="lazy" src={`materials/codes.png`} alt="" /></div>
            <h6 className="mt-2">PROMO</h6>
          </div>
          <div className='sider'></div>

        </div>

      </div>

      <div className='types h-full absolute z-10 bg-white'>
        <div className='ayo flex flex-col bg-white overflow-y-scroll h-full'>
          {itemdata.map((item) => {
            return <div onClick={() => wholedetails(item)} key={item.imgname} className='box flex gap-3.5 px-5 py-[19.5px] justify-center cursor-pointer'>
              <div className='w-28 flex items-center'><img loading="lazy" className='rounded-[10px]' src={`materials/${item.type}/${item.imgname}.jpg`} alt="" /></div>
              <div className='content w-48 flex flex-col gap-1.5'>
                {item.weight && <small className='text-[#bdbdbd] -mb-1'>{item.weight} G</small>}
                {item.discount && <div className='bg-[#f4b42d] text-white text-xs flex justify-center items-center w-[55px] py-1 font-semibold rounded-full'>{item.discount}%</div>}
                <h6 className='text-[#696969] font-semibold text-[15px]'>{item.name}</h6>
                {item.description && <p className='text-[#2a2929b3] text-xs font-light w-[170px]'>{item.description.split(' ').slice(0, 15).join(' ')}..</p>}
                {item.price && <div className='flex justify-between items-center w-[200px]'>
                  <h6 className='text-[26px] text-[#065d63] font-extrabold'>₹{item.price}</h6>
                  <button onClick={async (e) => {
                    await additem(e)
                    await increase(item, e)
                  }} className='p-2 py-2.5 z-20 hover:bg-[#065d63] rounded-md bg-[#efb84c] trans meenu'><img loading="lazy" src="materials/item-add.svg" alt="" /></button>
                  <div className='font-semibold absolute right-3 trans decreaser'>
                    <button onClick={(e) => { decrease(item, e) }} className='bg-[#f4b42d] px-2 py-1.5 rounded-s-md hover:bg-[#065d63] text-white'>-</button>
                    {cart[0] && <span className='bg-[#f2f2f2] inline-block w-10 text-center p-1.5 lamput'>{count[item.name]}</span>}
                    <button onClick={(e) => { increase(item, e) }} className='bg-[#f4b42d] px-2 py-1.5 rounded-e-md hover:bg-[#065d63] text-white'>+</button>
                  </div>
                </div>}
                {item.extra && <div onClick={() => scroller(500)} className='lulu flex gap-2 justify-start items-center cursor-pointer'>
                  <button id='pulse' className='rounded-full border border-[#f4b42d] p-2 text-[#f4b42d] leading-[0.6rem] flex justify-center items-center'>+</button>
                  <p className='text-[13px] font-semibold text-[#898989]'>Order with additionals</p>
                </div>}
              </div>
            </div>
          })}
        </div>
        <Bigbrother setaddition={handlesetaddition} setingprice={handlesetingprice} setIngrecount={handlesetingrecount} settotal={handlesettotal} ingredients={ingredients} ingrecount={ingrecount} imgprice={ingprice} total={total} scroller={scroller} singularity={singularity}/>
      </div>



      <button aria-label="search" onClick={pushdown} className="bg-[#f4b42d] z-50 hover:bg-[#065d63] transition w-[3.65rem] rounded-full absolute bottom-3 left-[36%] flex justify-center py-3.5"><img loading="lazy" src="materials/arrow-bottom.svg" alt="" /></button>
    </div>
  )
}

export default LIST