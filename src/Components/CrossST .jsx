import React from 'react'
import Button from './Button'

function CrossST () {
  return (

      
    <div className=' w-full  h-screen  bg-gradient-to-bl from-[#675e5c] via-[#A69896] to-[#fff] flex  items-end  text-white  '>

       <div className="relative left  h-5/6  w-[58vw]  ">
        <img className='img absolute   top-1/2 left-1/2 -translate-x-[45%] -translate-y-[50%] h-full w-fit  object-contain object-center' src="https://cowboy.com/cdn/shop/t/32/assets/cross-st--front-mushroom_852x.png?v=60259799687320514271714646799" alt="" srcset="" />
        </div>
 
       <div className="right   w-[38vw]  h-5/6  flex items-center px-6  ">
          <div className=''>
          <h3 className=' text-3xl leading-none tracking-tight '> Cross ST</h3>
          <h1 className='  text-[5vw]  leading-none tracking-tight mt-8'>Shockingly <br />smooth</h1>

           <div  className='price flex items-center gap-10 mt-14 '>
             
              <Button text='Explore'  />
              <h4>From Bird price <span className='inline-block decoration-dashed'> €3.699 </span>   €3.499</h4>
          
          </div>   

          <div  className='price flex  items-center justify-between text-zinc-100  mt-24  '>
           
           <h4  className=' border-r-2 border-zinc-400  font-semibold  text-white pl-1 pr-4 '>
            <span className='text-xs   text-zinc-200 font-semibold  '> Suspension <br /></span>
            Fork & seatpost
           </h4>
           
           <h4 className=' border-r-2 border-zinc-400 font-semibold text-white px-4 '>
            <span className='text-sm text-zinc-200 font-semibold  '>Cowboy AdaptivePower™ <br /></span>
            Automatic assistance
           </h4>

           <h4 className=' border-r-2 border-zinc-400  font-semibold text-white px-4 '>
            <span className='text-sm  text-zinc-200 font-semibold '>All-new battery <br /></span>
            60-120 ange
           </h4>
          </div>   

          </div>
               
        </div>  

           
    </div>
  )
}

export default CrossST 