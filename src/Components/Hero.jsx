import React from 'react'
import Button from './Button'


function Hero() {
  return (
    <div className=' w-full h-screen relative bg-[#EAF4F1] flex flex-col items-center  justify-between overflow-hidden'>
        <div className="top absolute top-32  text-center font-semibold  flex flex-col items-center ">
          <h3 className=' text-3xl leading-none tracking-tight '> Cruiser</h3>
          <h1 className='  text-[5vw] leading-none tracking-tight'> Hit Refresh</h1>
          <h4 className=' text-2xl mt-4 text-zinc-500'> Our Red Dot Best of the Best winning Cruiser is available <br /> in limited edition Mint. Get yours in time for summer.</h4>
          
          <span className='inline-block mt-10 text-xl  '> 
          <Button text='Explore' />
          
          </span>

        
        </div>
        
         
         <div className="bottom  absolute -bottom-3  h-[55vh]  w-[75vw] pointer-events-none  ">
          <img className=' absolute   h-full w-full object-contain object-center' src="https://cowboy.com/cdn/shop/t/32/assets/cruiser--hero-cropped__mint_1440x.png?v=138178123320978689841714646774" alt="" srcset="" />
         </div>



    </div>
  )
}

export default Hero