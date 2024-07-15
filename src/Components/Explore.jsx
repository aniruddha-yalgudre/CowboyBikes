import React from 'react'
import Button from './Button'

function Explore() {
  return (
    <div className=' w-full  bg-[#FAF3EA] overflow-hidden '>
      <div className="imgcontainer flex justify-center items-center   ">
         <div className=' flex justify-center items-center gap-14  mt-44'>
           <img src="https://cowboy.com/cdn/shop/t/32/assets/app--highlight-1_260x.png?v=165346312981359265831710880140" alt="" srcset="" />
           <img src="https://cowboy.com/cdn/shop/t/32/assets/app--highlight-2_260x.png?v=61479686058518892251710880152" alt="" srcset="" />
           <img className=' scale-150  mx-6 mt-10 ' src="https://cowboy.com/cdn/shop/t/32/assets/app--highlight-3_260x.png?v=41290082708368369271712137717" alt="" srcset="" />
           <img src="https://cowboy.com/cdn/shop/t/32/assets/app--highlight-4_260x.png?v=115248657249618336131710880063" alt="" srcset="" />
           <img src="https://cowboy.com/cdn/shop/t/32/assets/app--highlight-5_260x.png?v=146593974302665880801710880119" alt="" srcset="" />
         </div>
      </div>
      
      <div className=" text-center mt-32 flex flex-col justify-evenly items-center gap-5">

          <h1 className=' text-6xl mt-3 text-zinc-900 font-semibold'> More connected, more fun</h1>
          <h4 className=' text-xl mb-5 text-zinc-500 leading-7'>Combine the thrill of level-based challenges with Cowboy's interactive social <br /> features and safely infuse your ride with an extra layer of excitement.</h4>
          
        <span className='font-semibold decoration-none mb-32' >
          <Button text='Explore Connect'/> 
        </span>          
      
      </div>
      
    </div>
  )
}

export default Explore