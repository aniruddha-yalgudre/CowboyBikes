import React from 'react'
import Button from './Button'

function World() {
  return (
    <div className=' relative w-full  h-screen '>

<div className='absolute w-full h-full flex justify-center  flex-col items-center text-center '>
    
    <img className=' absolute w-full h-full object-cover  object-center p-3 overflow-hidden pointer-events-none ' src="https://cowboy.com/cdn/shop/t/33/assets/bcorp--hero_landscape_3200x.jpg?v=59764853729233097731714647604%201x,%20//cowboy.com/cdn/shop/t/33/assets/bcorp--hero_landscape_3200x@2x.jpg?v=59764853729233097731714647604%202x,%20//cowboy.com/cdn/shop/t/33/assets/bcorp--hero_landscape_3200x@3x.jpg?v=59764853729233097731714647604%203x" alt="" srcset="" />
     
     <div className='head absolute items-center flex flex-col justify-center '>
        

            <h1 className='text-[4vw] font-semibold '>World first</h1>
            <h3 className='text-[1.3vw] font-medium mt-10 mb-10 text-zinc-500 '>
            We're the first e-bike producer to achieve B Corp status, thanks in part to initiatives like <br /> Circular, our carefully refurbished range that ensures all our bikes find a happy home.
            </h3>

            <span className=' text-xl  '> 
                    <Button text='Explore Circular'/>
            </span>

     </div>


</div>
        

    </div>
  )
}

export default World