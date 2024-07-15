import React from 'react'
import Button from './Button'

function Classic() {
  return (
    
    <div className=' w-full  h-screen  bg-gradient-to-bl from-[#FCFAF4] via-[#EAEAE1] to-[#D7D9CE] flex  items-end  text-black  '>

       <div className="relative left  h-5/6  w-[58vw]  ">
        <img className='img absolute   top-1/2 left-1/2 -translate-x-[45%] -translate-y-[50%] h-full w-fit  object-contain object-center' src="https://cowboy.com/cdn/shop/t/33/assets/classic-black-front_hero-cropped_671x.png?v=57133987399447051901710792235" alt="" srcset="" />
        </div>
 
       <div className="right   w-[38vw]  h-5/6  flex items-center px-6  ">
          <div className=''>
          <h3 className=' text-3xl leading-none tracking-tight '> Classic </h3>
          <h1 className='  text-[5vw]  leading-none tracking-tight mt-8'>Step over to <br /> the agile ride</h1>

           <div  className='price flex items-center gap-10 mt-14 '>
             
              <Button text='Explore'  />
              <h4>From €2.699 </h4>
              <h4>Book free a test ride ⟩ </h4>
          
          </div>   

          <div  className='price flex  items-center justify-between text-zinc-600  mt-24  '>
           
           <h4  className=' border-r-2 border-zinc-300  border-opacity-70  font-semibold   pl-1 pr-4 '>
           <span className='text-sm text-zinc-400 font-semibold '> Find my bike <br /></span>
            Theft Detection
           </h4>
           
           <h4 className=' border-r-2 border-zinc-300  border-opacity-70 font-semibold  px-3 '>
           <span className='text-sm text-zinc-400 font-semibold'>Cowboy AdaptivePower™ <br /></span>
            Automatic assistance
           </h4>

           <h4 className='  font-semibold  px-3 '>
           <span className='text-sm text-zinc-400 font-semibold'>Cowboy Mobile Service <br /></span>
            At-home repairs
           </h4>
          </div>   

          </div>
               
        </div>  

           
    </div>
  )
}

export default Classic