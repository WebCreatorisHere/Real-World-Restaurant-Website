"use client"
import React from 'react'
import { useState, useEffect } from "react";
import { Suspense } from 'react';
import { toast } from "react-toastify";
import Image from "next/image";
import Script from "next/script";
import List from "./component/list";
import Cartoo from "./component/cartoo"
import Headercomponent from './component/header';
import Navbar from './component/navbar';
import Landing from './component/landing';
import Achievement from './component/achievement';
import Conditions from './component/conditions';
import About from './component/about';
import Operator from './component/operator';
import Paymentarea from './component/paymentarea';


export default function HOME() {

    const [loading, setloading] = useState(true)
    const [value, setvalue] = useState(false)
    const [flicker, setflicker] = useState(false)
    const [dataFromChild, setDataFromChild] = useState([]);
    const [otherFromChild, setotherFromChild] = useState({ typo: false })

    const [disha, setdisha] = useState(false)
    const [pageparams, setpageparams] = useState({})


    useEffect(() => {
        setTimeout(() => {
            setloading(false)
        }, 3000);
    }, [])



    const handlesetpageparams = (childDataArray) => {
        setpageparams(childDataArray);  // Set the state with the array received from child
    }
    const handlesetdisha = (childDataArray) => {
        setdisha(childDataArray);  // Set the state with the array received from child
    }
    const handleDataFromChild = (childDataArray) => {
        setDataFromChild(childDataArray);  // Set the state with the array received from child
    }
    const handlesetflicker = (childDataArray) => {
        setflicker(childDataArray);  // Set the state with the array received from child
    }
    const handleDataFromChild2 = (childDataArray2) => {
        setDataFromChild(childDataArray2);  // Set the state with the array received from child
    }
    const handleotherdata = (cd) => {
        setotherFromChild(cd);  // Set the state with the array received from child
    }
    const handlesetvalue = (cd) => {
        setvalue(cd);  // Set the state with the array received from child
    }



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
                />


                <div style={{ "opacity": loading ? "1" : "0", "zIndex": loading ? "" : "-1000" }} className=" h-[100vh] loader absolute z-[3000] w-full bg-[#F4B42D] flex justify-center items-center">
                    <img loading="lazy" className="beeping" src="https://burek.intexagency.com/wp-content/themes/burek/assets/img/logo.svg" alt="" />
                </div>

                <div className="z-10 bg-[#eca845] flex h-[100vh] ">
                    <Headercomponent flicker={flicker} openmenu={openmenu} setfakeflicker={handlesetflicker} />

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
                        <Suspense fallback={<div className="w-full h-full flex justify-center items-center"><Image className="w-1/4" src="/materials/loader.gif" alt="loading" /></div>}>
                            <Navbar setpageparams={handlesetpageparams} setvalue={handlesetvalue} dataFromChild={dataFromChild} pageparams={pageparams} setdisha={handlesetdisha} disha={disha} />
                        </Suspense>
                        <Image fill={true} priority="high" className="z-2 transistionofimg absolute -top-1" src="/materials/burger.jpg" alt="home image" />
                        <Image fill={true} priority="high" className="z-2 nanu transistionofimg absolute -top-1" src="/materials/ice-cream.jpg" alt="home image" />
                        <Image fill={true} priority="high" className="z-2 nanu transistionofimg absolute  -top-1" src="/materials/burek.jpg" alt="home image" />
                        <Cartoo sendotherToParent={handleotherdata} dataFromChild={dataFromChild} sendDataToParent2={handleDataFromChild2} setvalue={handlesetvalue} hint={value} />

                        <Landing openmenu={openmenu} />

                        <Operator disha={disha} setdisha={handlesetdisha} />

                        <Achievement pageparams={pageparams} />
                        <Conditions pageparams={pageparams} />
                        <About pageparams={pageparams} />

                        <Paymentarea otherFromChild={otherFromChild} dataFromChild={dataFromChild} setdataFromChild={handleDataFromChild} setotherFromChild={handleotherdata} setdisha={handlesetdisha} />

                    </div>
                </div>
            </main>
        </>
    )
}

