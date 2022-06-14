import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import Button from '../../atom/Button';
import { useInView } from 'react-intersection-observer';
import { gsap, Power3,  } from 'gsap';

gsap.registerPlugin()

const JoinInvestors = () => {
    const control = useAnimation()
const [ref, inView] = useInView({
  threshold:1
})


  useEffect(()=>{
  //   const jointInvestors = gsap.timeline()
  //  jointInvestors.fromTo('.jointInvestor', {yPercent:0, opacity:0, stagger:2},{yPercent:0, opacity:1, delay:5 })
      gsap.from('.title', { duration:5, y:1500, opacity:0, ease:Power3.easeInOut,stagger:0.3, scrollTrigger:{
      trigger:'.title',
      start:'top 90%',
      end:'bottom 100%',
      markers:true,
      toggleActions:'restart complete reverse, reset'
    } })
  gsap.from('.join', {
     y:1500, duration:5, opacity: 0, scrollTrigger:{
       trigger:'.join',
       start:'top 90%',
       end:'bottom 100%',
       markers:true,
       toggleActions:'restart complete, reverse pause'
     } 
  })
  gsap.from('.dollar', {
    y:1500, duration:5, opacity: 0, scrollTrigger:{
      trigger:'.dollar',
      start:'top 90%',
      end:'bottom 100%',
      markers:true,
      toggleActions:'restart complete, reverse pause'
    } 
 })
 gsap.from('.button', {
  y:1500, duration:5, opacity: 0, scrollTrigger:{
    trigger:'.button',
    start:'top 90%',
    end:'bottom 100%',
    markers:true,
    toggleActions:'restart complete, reverse pause'
  } 
})
gsap.from('.img', {
  y:1500, duration:5, opacity: 0, scrollTrigger:{
    trigger:'.img',
    start:'top 90%',
    end:'bottom 100%',
    markers:true,
    toggleActions:'restart complete, reverse pause'
  } 
})
  },[])

  return (
    <div className="mx-8 py-20  z-10 overflow-hidden ">
            <div className="py-20 bg-[#e6f5f6] px-16 rounded-xl relative overflow-hidden" ref={ref}>
              <div className='jointInvestor' >
                <p className="mb-[1rem] title">Download The Rise App</p>
                <h2 className="font font-semibold text-4xl max-w-[500px] mb-[1.5rem] join ">Join our 200,000+ users investing and setting long term goals!</h2>
                <p className="mb-[1rem] dollar">Dollar investments that help you grow</p>
                <div className="flex gap-4">
                <div className="w-[160px] button">
                    <Button
                      title="Download on the"
                      subtitle="Play Store"
                      prefixIcon={<img src="/Public/Vectors/apple-fill.svg" />}
                      customClass="!py-2 !px-4 !space-x-2 whitespace-nowrap"
                      href="https://play.google.com/store/apps/details?id=com.rise.mobile"
                    />
                  </div>
                  <div className="w-[auto] button">
                    <Button
                      title="Download on the "
                      subtitle="Apple Store"
                      prefixIcon={
                        <img src="/Public/Vectors/google-play-fill.svg" />
                      }
                      customClass="!py-2 !px-4 !space-x-2 whitespace-nowrap"
                      href="https://play.google.com/store/apps/details?id=com.rise.mobile"
                    />
                  </div>
                </div>
              </div>
              <div
             className=" img w-[30%] h-full top-[40px] absolute right-0 bottom-[60px]">
           <img  src="/Public/Images/riseAppPhone.png" alt=""  className="object-contain  jesse top-0  overflow-hidden" />
           </div>
            </div>
         </div>
  )
}

export default JoinInvestors