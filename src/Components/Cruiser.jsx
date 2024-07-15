import React from 'react'
import Button from './Button'

function Cruiser() {
  return (

    <div className=' w-full h-screen bg-[#E4E6FC] flex  items-end   '>

       <div className="relative left  h-5/6  w-[58vw]   ">
        <img className='img absolute  h-full w-fit    object-contain object-center' src="https://cowboy.com/cdn/shop/t/32/assets/cruiser-st-lavender_hero-cropped_alt_852x.png?v=38052067644987718681714646778" alt="" srcset="" />
        </div>

       <div className="right   w-[38vw]  h-5/6  flex items-center px-2  ">
          <div className=''>
          <h3 className=' text-3xl leading-none tracking-tight '> Cruiser ST</h3>
          <h1 className='  text-[5vw]  leading-none tracking-tight mt-8'>Step through to <br /> a new colorway</h1>

          <div  className='price flex items-center gap-10 mt-14 '>
           <Button text='Explore' />
           <h4>From €2.699</h4>
           <h4>Book a free test ride ⟩</h4>
          </div>  

          <div  className='price flex  items-center justify-between  mt-24  '>
           
           <h4  className=' border-r-2 border-zinc-400  pl-1 pr-4 '>
            <span className='text-xs  '> Find my bike <br /></span>
            Theft Detection
           </h4>
           
           <h4 className=' border-r-2 border-zinc-400 px-4 '>
            <span className='text-sm '>Cowboy AdaptivePower™ <br /></span>
            Automatic assistance
           </h4>

           <h4 className=' border-r-2 border-zinc-400 px-4 '>
            <span className='text-sm '>Cowboy Mobile Service <br /></span>
            At-home repairs
           </h4>
          </div>   

          </div>
               
        </div>


               

    </div>
  )
}

export default Cruiser