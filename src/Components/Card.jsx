import React from 'react'

function Card({data}) {
 
    const {img,text} = data

  return (
    <div className=''>
        <div className='card  relative h-96 w-96 bg-zinc-500'>
              <img className='top  absolute h-full w-full object-cover  object-center ' src={img} alt="" srcset="" />

         <div className='bottom  absolute w-full  flex justify-between items-center text-white bottom-5 px-10 py-2'>
            <h1 className='text-3xl font-semibold'>{text}</h1>
            <span className='inline-block text-3xl  '>
            <i class="ri-arrow-right-line"></i>
            </span>

         </div>

        </div>

    </div>
  )
}

export default Card