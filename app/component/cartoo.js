import React, { useEffect, useRef ,useState} from 'react'
import { fetchcart } from '../actions/datasaver'
import { ToastContainer ,toast} from "react-toastify";
import { Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

const CARTOO = ({sendotherToParent,sendDataToParent2,hint}) => {
  const basket = useRef()
  const closingbtn = useRef()
  const [Cartitems, setCartitems] = useState([])
  const [count,setcount] = useState(0)
  useEffect(() => {
  cartgetter()
  }, [hint])
  const cartgetter = async()=>{
let dummy = await fetchcart()
setCartitems(dummy)
}
  
  useEffect(() => {
    
    hint?basket.current.classList.add("gettingoverit"):basket.current.classList.remove("gettingoverit")
    hint?document.querySelector(".karla").classList.add("increaser"):document.querySelector(".karla").classList.remove("increaser")
  }, [hint])
  const transferData = async (item) => {
    let raspberry = await fetchcart()
    sendDataToParent2(raspberry);  // Pass the array to the parent function
    let aaa = await raspberry.filter((obj) => { return obj.name == item.name })[0]
    aaa ? setcount({ ...count, [item.name]: aaa.no_of_item }) : console.log('deke')
  cartgetter()
  }
  const increase = async (item,e) => {
    e.stopPropagation()
   let malabar
    item.addions? malabar = {
      weight:item.weight,
      name:item.name,
      price:item.price,
      type:item.type,
      imgname:item.imgname,
      extra:item.extra,
      additions:item.addions
    }:malabar ={
      weight:item.weight,
      name:item.name,
      price:item.price,
      type:item.type,
      imgname:item.imgname,
      extra:item.extra,
    }
    let a = await fetch("/dpi", {

      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify(malabar),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    transferData(item)

  }
  const decrease = async (item, e) => {
    e.stopPropagation()
    let malabar
    item.addions? malabar = {
      weight:item.weight,
      name:item.name,
      price:item.price,
      type:item.type,
      imgname:item.imgname,
      extra:item.extra,
      additions:item.addions
    }:malabar ={
      weight:item.weight,
      name:item.name,
      price:item.price,
      type:item.type,
      imgname:item.imgname,
      extra:item.extra,
    }
    let a = await fetch("/dpi", {

      // Adding method type
      method: "DELETE",

      // Adding body or contents to send
      body: JSON.stringify(malabar),

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
    
  }

  const deletebhava =async (item)=>{
    let malabar
    item.addions? malabar = {
      weight:item.weight,
      name:item.name,
      price:item.price,
      type:item.type,
      imgname:item.imgname,
      extra:item.extra,
      additions:item.addions
    }:malabar ={
      weight:item.weight,
      name:item.name,
      price:item.price,
      type:item.type,
      imgname:item.imgname,
      extra:item.extra,
    }
    let a = await fetch("/dpi", {

      // Adding method type
      method: "PUT",

      // Adding body or contents to send
      body: JSON.stringify(malabar),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    transferData(item)
    toast.success('Item Deleted from Cart!', {
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
  return (
    <div onClick={(e)=>{e.stopPropagation()}} ref={basket} className='absolute z-[2025] right-[-40rem] opacity-0 h-[100vh] top-0 transitor w-[45%] bg-[#fafafa]'>
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
     <button ref={closingbtn} onClick={()=>{basket.current.classList.remove("gettingoverit")
              document.querySelector(".karla").classList.remove("increaser")
              toast.dismiss()
            }} aria-label="search" className="bg-[#f4b42d] z-50 hover:bg-[#065d63] transition w-[3.65rem] rounded-full absolute top-[10%] -left-8 rotate-90 flex justify-center py-3.5 ctn"><img loading="lazy" src="materials/arrow-top.svg" alt="" /></button>
<div className="flex bbbbb items-center overflow-y-scroll h-[85%] flex-col colaberry">
<h6 className='text-[#065d63] text-4xl px-[4.5rem] pt-[3.5rem]'>Basket</h6>

  {Cartitems[0] && Cartitems.map((box)=>{
    return <div key={box.price+box.name} className="carti relative border-b flex py-6 items-center w-full h-fit px-6">
    <div onClick={()=>deletebhava(box)} className='absolute right-4 top-6 '><lord-icon
     src="https://cdn.lordicon.com/hwjcdycb.json"
     trigger="hover"
     stroke="bold"
     colors="primary:#347b80,secondary:#347b80"
     style={{"width":"30px","height":"30px"}}>
 </lord-icon></div>
     <div className="img w-60"><img loading="eager" src={`materials/${box.type}/${box.imgname}.jpg`} alt="" /></div>
     <div className="content w-4/5">
       <small className='text-[#c3c3c3]'>{box.weight} G</small>
       <h6 className='text-[#878787] font-semibold text-[16.5px]'>{box.name}</h6>
       {box.addions && <p className='text-[#878787] py-1 leading-5 font-light text-[15px]'>Additions: <span className='font-medium'>{box.addions}</span></p>}
 
       <div className='flex justify-between mt-2 flex-row-reverse w-full items-center'>
                   <h6 style={{
                     "paddingLeft": "0px",
                     "paddingRight": "0px",
                     "opacity": 1,
                     "zIndex": 50
                   }} className='text-[33px] text-[#065d63] font-extrabold'>₹{box.price*box.no_of_item}</h6>
                   <div className='font-semibold relative  trans'>
                     <button onClick={(e)=>{decrease(box,e)}} className='bg-[#f4b42d] px-2.5 py-1.5 rounded-s-md hover:bg-[#065d63] text-white'>-</button>
                     <span className='bg-[#f2f2f2] inline-block w-10 text-center p-1.5 '>{box.no_of_item}</span>
                     <button onClick={(e)=>{increase(box,e)}} className='bg-[#f4b42d] px-2.5 py-1.5 rounded-e-md hover:bg-[#065d63] text-white'>+</button>
                   </div>
                 </div>
     </div>
   </div>
  })}
  {!Cartitems[0] && <div onLoad={()=>{sendotherToParent({typo:false})
    closingbtn.current.style.display = "flex"
    }} className='flex justify-center items-center flex-col gap-5 relative top-[20%]'><div className="img"><img loading="lazy" src="https://burek.intexagency.com/wp-content/themes/burek/assets/img/icon-empty-cart.svg" alt="" /></div>
  <p className='shade'>Oops ... no items have been added to the cart yet</p>
  <style jsx>{`
  .shade{
  color:rgba(42, 41, 41, 0.7);
  }
  `}</style>
  </div>}
  
</div>
{(Cartitems.reduce((accu, item) => { return accu + item.price * item.no_of_item }, 0) != 0) && <div className='p-4 malapur trans'>
  <button onClick={()=>{sendotherToParent({typo:true})
    closingbtn.current.style.display = "none"
    document.querySelector(".malapur").style.display = "none"
    document.querySelector(".colaberry").style.height = "100%"
  }} className='bg-[#f4b42d] py-4 justify-around px-10 flex items-center text-xl rounded-2xl w-full hover:bg-[#065d63] meena'>
    <span className='text-white'>In general: <span className='text-4xl font-bold text-[#065d63]'>₹{Cartitems.reduce((accu, item) => { return accu + item.price * item.no_of_item }, 0)}</span></span>
    <span className='text-[#065d63] font-semibold text-base'>TO ORDER --&gt;</span></button>
</div>}
    </div>
  )
}

export default CARTOO