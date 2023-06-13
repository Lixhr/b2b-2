import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useEffect } from "react";

export default function useLocoScroll(start){
 useEffect(()=>{
    if (!start) return;
    const scrollEl= document.querySelector('#main-container');
    const locoScroll= new LocomotiveScroll({
        el:scrollEl,
        lerp:0.02,
        multiplier:1.4,
        touchMultiplier:2,  
        smartphone:{
          smooth: !0,
        },
        smooth:true,
        class: 'is-reveal'
    }, [start])

    locoScroll.init()
 })
}


