import React from 'react'
import Button from './Button'

function Cross() {
  return (
    <div className=' w-full  h-screen  bg-gradient-to-bl from-[#343C3A] via-[#5C6461] to-[#7F8784] flex flex-row-reverse  items-end  text-white  overflow-hidden '>

    <div className="relative left  h-5/6  w-[58vw]  ">
     <img className='img absolute   top-1/2 left-1/2 -translate-x-[45%] -translate-y-[50%] h-full w-fit  scale-105 object-contain object-center' src="https://cowboy.com/cdn/shop/files/cross-moss_1440x.png?v=1710703100" alt="" srcset="" />
     <img  className='absolute z-10   top-1/2 left-1/2 -translate-x-[58%] -translate-y-[8.6%]  h-full w-full   object-contain object-center'     src="https://cowboy.com/cdn/shop/t/32/assets/cross-shadow.png?v=23359708718524171551711353740" alt="" srcset="" />
     </div>

    <div className="right   w-[38vw]  h-5/6  flex items-center px-6  ">
       <div className=''>
       <h3 className=' text-3xl leading-none tracking-tight '> Cross </h3>
       <h1 className='  text-[5vw]  leading-none tracking-tight mt-8'>Build for  <br />adventure</h1>

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
         60-120 Range
        </h4>
       </div>   

       </div>
            
     </div>  

        
 </div>
  )
}

export default Cross