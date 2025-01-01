import React from 'react'

const BIGBROTHER = ({singularity,scroller,ingprice,total,ingrecount,ingredients,setIngrecount,setingprice,setaddition,settotal}) => {
    const saveedits = async () => {
        //Resetting
        setaddition([])
        setingprice(0)
        setIngrecount({})
        document.querySelector(".bigbrother").classList.remove("visibility")
        settotal(1)
        let douma = document.querySelectorAll(".ingre")
        for (let i = 0; i < douma.length; i++) {
          let cd = douma[i]
        cd.classList.remove("ingreaddon")
        cd.children[0].children[3].style.backgroundColor = "#065D63"
        // cd.children[0].children[3].style.left = "0%"
        cd.children[0].children[0].style.display = "none"
        cd.children[0].children[0].nextElementSibling.style.display = "none"
        cd.children[0].children[0].nextElementSibling.nextElementSibling.style.display = "none"
        }
        
        toast.success('Item Added to Cart!', {
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
        let additionstring = ""
        addition.forEach((rcucbai) => {
          additionstring = additionstring + rcucbai.name + " x" + rcucbai.quantity + ", "
        })
        let item
        addition[0] ? item = {
          weight: singularity.weight,
          name: singularity.name,
          price: singularity.price + ingprice,
          type: singularity.type,
          extra: singularity.extra,
          additions: additionstring,
          imgname: singularity.imgname,
          no_of_item: total
        } : item = {
          weight: singularity.weight,
          name: singularity.name,
          price: singularity.price,
          type: singularity.type,
          imgname: singularity.imgname,
          extra: singularity.extra,
          no_of_item: total
        }
        
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
        let raspberry = await fetchcart()
        sendDataToParent(raspberry)
      }

      const addio = async (item, e) => {
        e.stopPropagation()
        let mania = []
        let cd
        
        if (e.target.classList.contains("ingre")) {
          cd = e.target
        }
        else if (e.target.classList.contains("malphuka")) {
          cd = e.target.parentElement.parentElement
        }
        else if (e.target.parentElement.classList.contains("ingre")) {
          cd = e.target.parentElement
        }
        else {
          cd = e.target.parentElement.parentElement
        }
        cd.classList.add("ingreaddon")
        cd.children[0].children[3].style.backgroundColor = "#f4b42d"
        // cd.children[0].children[3].style.left = "0px"
        cd.children[0].children[0].style.display = "block"
        cd.children[0].children[0].nextElementSibling.style.display = "block"
        cd.children[0].children[0].nextElementSibling.nextElementSibling.style.display = "block"
        setTimeout(() => {
          let guma = addition.filter((lap) => { return lap.name == item.identity })
          if (guma[0]) {
            let future = addition
            future.forEach(user => {
              if (user.name === item.identity) {
                user.quantity = user.quantity + 1;  // Change the value of the key 'age'
              }
            })
            mania = future
          }
          else {
            mania = [...addition, { name: item.identity, price: item.price, quantity: 1 }]
    
          }
          setaddition(mania)
          let a = mania.reduce((sum, item) => { return sum + (item.quantity * item.price) }, 0)
          setingprice(a)
          let malabarcoast = mania.filter((bax) => bax.name == item.identity)[0]
          setIngrecount({ ...ingrecount, [item.identity]: malabarcoast.quantity })
        }, 200)
      }
      const ladio = (item,e)=>{
        let guma = addition.filter((lap) => { return lap.name == item.identity })
        if(!guma[0]){
          let mania = []
          let cd
          
          if (e.target.classList.contains("ingre")) {
            cd = e.target
          }
          else if (e.target.classList.contains("malphuka")) {
            cd = e.target.parentElement.parentElement
          }
          else if (e.target.parentElement.classList.contains("ingre")) {
            cd = e.target.parentElement
          }
          else {
            cd = e.target.parentElement.parentElement
          }
          cd.classList.add("ingreaddon")
          cd.children[0].children[3].style.backgroundColor = "#f4b42d"
          // cd.children[0].children[3].style.left = "0px"
          cd.children[0].children[0].style.display = "block"
          cd.children[0].children[0].nextElementSibling.style.display = "block"
          cd.children[0].children[0].nextElementSibling.nextElementSibling.style.display = "block"
          setTimeout(() => {
            let guma = addition.filter((lap) => { return lap.name == item.identity })
            if (guma[0]) {
              let future = addition
              future.forEach(user => {
                if (user.name === item.identity) {
                  user.quantity = user.quantity + 1;  // Change the value of the key 'age'
                }
              })
              mania = future
            }
            else {
              mania = [...addition, { name: item.identity, price: item.price, quantity: 1 }]
      
            }
            setaddition(mania)
            let a = mania.reduce((sum, item) => { return sum + (item.quantity * item.price) }, 0)
            setingprice(a)
            let malabarcoast = mania.filter((bax) => bax.name == item.identity)[0]
            setIngrecount({ ...ingrecount, [item.identity]: malabarcoast.quantity })
          }, 200)
        }
        else{
        }
      }
      const pitradev = (item,e)=>{
        e.stopPropagation()
      let mania = []
          let guma = addition.filter((lap) => { return lap.name == item.identity })
          if (guma[0]) {
            let future = addition
            future.forEach(user => {
              if (user.name === item.identity) {
                if(user.quantity != 1 || user.quantity != 0){
                user.quantity = user.quantity - 1;  // Change the value of the key 'age'
              }
              }
            })
            mania = future
          }
          else {
            mania = [...addition, { name: item.identity, price: item.price, quantity: 1 }]
    
          }
          if(guma[0].quantity == 0){
            let indexam = mania.findIndex(item => item.name === guma[0].name)
            mania.splice(indexam,1)
          }
          setaddition(mania)
          if(guma[0].quantity != 0){
            let a = mania.reduce((sum, item) => { return sum + (item.quantity * item.price) }, 0)
          setingprice(a)
          let malabarcoast = mania.filter((bax) => bax.name == item.identity)[0]
          setIngrecount({ ...ingrecount, [item.identity]: malabarcoast.quantity })
    
    }
    else{
      let a = mania.reduce((sum, item) => { return sum + item?(item.quantity * item.price):0 }, 0)
      setingprice(a)
      setIngrecount({ ...ingrecount, [item.identity]: 0 })
      
      let cd
        
      if (e.target.classList.contains("ingre")) {
        cd = e.target
      }
      else if (e.target.classList.contains("malphuka")) {
        cd = e.target.parentElement.parentElement
      }
      else if (e.target.parentElement.classList.contains("ingre")) {
        cd = e.target.parentElement
      }
      else {
        cd = e.target.parentElement.parentElement
      }
      cd.classList.add("ingreaddon")
      cd.children[0].children[3].style.backgroundColor = "#065D63"
      // cd.children[0].children[3].style.left = "0%"
      cd.children[0].children[0].style.display = "none"
      cd.children[0].children[0].nextElementSibling.style.display = "none"
      cd.children[0].children[0].nextElementSibling.nextElementSibling.style.display = "none"
    }
       }
  return (
    <div className="bigbrother h-full absolute bg-white opacity-0 top-0 z-[-100] -right-[0%] tradder">
    {singularity.type != "promo" && <div className="bbbbb relative w-[51.5vw] overflow-y-scroll h-full flex flex-col">
      <div className='flex gap-7 sapna justify-between w-full opacity-0 relative top-10'>
        <div className='w-[55%] flex items-center justify-center'>
          <img loading="lazy" className='w-full relative' src={`materials/${singularity.type?singularity.type:"combo"}/${singularity.imgname?singularity.imgname:"hit"}.jpg`} alt="" />
        </div>
        <div className="content-part2 w-[80%] flex flex-col gap-4 py-8 px-8">
          <h6 className='text-[#065d63] font-medium text-3xl w-3/4'>{singularity.name}</h6>
          <p className='text-[#787977] text-sm font-medium'>Weight: {singularity.weight}<strong className='font-extrabold '> g</strong></p>
          {singularity.type == "combo" && <p className='border-b text-xs font-semibold text-[#b1b3b1] pb-7 leading-5'>Maxiburger, wings (3 pcs.), french fries (small), drink 0.3.A favorable offer for who`s hungry.</p>}
          <p className='border-b text-xs font-semibold text-[#b1b3b1] pb-7 leading-5'>{singularity.description}</p>
         {singularity.extra && <div onClick={() => scroller(0)} className='lulu border-b flex pb-4 gap-2 justify-start items-center cursor-pointer'>
            <button id='pulse' className='rounded-full border border-[#f4b42d] p-1 py-1.5 text-[#f4b42d] leading-[0.6rem] flex justify-center text-xl items-center'>+</button>
            <p className='text-[13px] font-semibold text-[#065d63]'>Add ingredients</p>
          </div>}
          <h6 className='text-[#9c9c9c] font-medium text-2xl'>In general:</h6>
          <div className='flex justify-between w-full items-center -mt-4'>
            <h6 style={{
              "paddingLeft": "0px",
              "paddingRight": "0px",
              "opacity": 1,
              "zIndex": 50
            }} className='text-[35px] text-[#065d63] font-extrabold'>₹{(singularity.price + ingprice) * total}</h6>
            <div className='font-semibold relative  trans'>
              <button onClick={() => { if (total != 1) settotal(total - 1) }} className='bg-[#f4b42d] px-3 py-2.5 rounded-s-md hover:bg-[#065d63] text-white'>-</button>
              <span className='bg-[#f2f2f2] inline-block w-10 text-center p-2.5 champu'>{total}</span>
              <button onClick={() => { settotal(total + 1) }} className='bg-[#f4b42d] px-3 py-2.5 rounded-e-md hover:bg-[#065d63] text-white'>+</button>
            </div>
          </div>

          <button onClick={saveedits} className="px-14 py-4 text-xs font-bold hover:text-[#065d63] hover:bg-[#ecb12f] transition-all tracking-widest bg-[#065d63] text-[#ecb12f] rounded-[0.225rem]">ADD TO CART</button>

        </div>
      </div>
      {singularity.extra && <div className='sapna pb-10 px-8 py-2 flex flex-col gap-6 opacity-0 top-10 relative'>
        <div className='flex gap-4 items-center'>
          <button onClick={() => {
            if (document.querySelector(".ingredients").style.display != "none") {
              document.querySelector(".ingredients").style.display = "none"
            }
            else {
              document.querySelector(".ingredients").style.display = "flex"
              document.querySelector(".foot").style.position = "relative"

            }
          }} aria-label="search" className="bg-[#f4b42d] z-50 hover:bg-[#065d63] transition w-[3.65rem] rounded-full relative flex justify-center py-3.5"><img loading="lazy" src="materials/arrow-top.svg" alt="" /></button>
          <h6 className='text-[#065d63] font-medium text-3xl w-1/2'>Additions</h6>
        </div>
        <div className="ingredients flex flex-wrap gap-3 justify-center">
          {ingredients.map((item) => {
            return <div key={item.identity} onClick={(e) => ladio(item, e)} className="ingre cursor-pointer w-[30%] relative flex flex-col items-center p-4 pt-9 rounded-2xl">
              <div className="collection items-center absolute top-2 flex justify-around w-[85%] right-3">
                <small className="text-[#f4b42d] hidden mr-2 malphuka">Added</small>
                <button onClick={(e) => pitradev(item, e)} id='minus' className='rounded-full hidden malphuka p-3 py-3 text-white bg-[#f4b42d] leading-[0.6rem] text-xl items-center'>-</button>
                {ingrecount[item.identity] > 0 && <span className='malphuka'>{ingrecount[item.identity]}</span>}
                {ingrecount[item.identity] == 0 && <span className='malphuka hidden'></span>}
                {ingrecount[item.identity] == undefined &&<span className='malphuka hidden'></span>}
                <button onClick={(e) => addio(item, e)} id='pulse' className='rounded-full relative malphuka p-2.5 py-3 text-white bg-[#065d63] leading-[0.6rem] flex justify-center text-xl items-center'>+</button>
              </div>
              <img loading="lazy" className='w-[60%] m-3' src={`materials/ingredients/${item.imgname}.jpg`} alt="" />
              <h6 className='text-[#065d63] font-bold'>{item.identity}</h6>
              <div className='flex w-full justify-between'><p className='text-[#787977]'>{item.weight}g</p><strong className='text-[#6a6969]'>₹{item.price}</strong></div>

            </div>
          })}
        </div>
      </div>}
      {!singularity.extra && <div className='absolute foot flex bg-[#065d63] opacity-1 w-full bottom-0 justify-between items-center p-5'>
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
      </div>}
      {singularity.extra && <div className='relative footam flex bg-[#065d63] opacity-1 w-full bottom-0 justify-between items-center p-5'>
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
      </div>}
    </div>}
    {singularity.type == "promo" && <div className="bbbbb relative items-center w-[51.5vw] overflow-y-scroll h-full flex flex-col">

      <div className='flex gap-7 flex-col sapna justify-between px-[7%] items-start w-full opacity-0 relative top-10'>
        <div className="tell mt-5 flex gap-2 justify-center items-center self-start">
          <button aria-label="arrowbtn" className="bg-[#f4b42d] z-50 hover:bg-[#065d63] transition w-[3.65rem] rounded-full -rotate-90 flex justify-center py-3.5"><img loading="lazy" src="materials/arrow-top.svg" alt="" /></button>
          <h6 className='text-[#065d63] font-bold text-[42px]'>Promotional offers            </h6>

        </div>
        <div className='w-full flex items-center justify-center'>
          <img loading="lazy" className='w-full relative rounded-xl' src={`https://burek.intexagency.com/wp-content/uploads/2021/04/calorie-hamburger-fonzieburgers-roma.webp`} alt="" />
        </div>
        <div className="content-part2 flex flex-col self-start gap-4">
          <h6 className='text-[#065d63] font-medium text-3xl w-3/4'>{singularity.name}</h6>
          <p className='text-xs font-semibold text-[#b1b3b1] pb-7 leading-5'>Maxiburger, wings (3 pcs.), french fries (small), drink 0.3.A favorable offer for who`s hungry.</p>
        </div>
      </div>

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

    </div>}
  </div>
  )
}

export default BIGBROTHER