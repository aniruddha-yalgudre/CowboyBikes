import React from 'react'
import Card from './Card'

function Services() {

 const data=[{ img:"https://cowboy.com/cdn/shop/t/33/assets/warranty--hero_1440x.jpg?v=74273294603368293031715002505",text:"Warranty"},
            { img:"https://cowboy.com/cdn/shop/t/33/assets/cowboy-services-theft-insurance_520x.jpg?v=126605467044018060681715002499",text:"Theft Insurance"},
            { img:"https://cowboy.com/cdn/shop/t/33/assets/cowboy-services-care_520x.jpg?v=111059325592511806261715002505",text:"Cowboy Care"}
];

  return (
    <div className=' w-full  h-[94vh]  px-20 mt-14'>
      
       <h2 className='text-2xl text-zinc-500 font-semibold'>Cowboy at your service</h2>
       <h1 className='text-3xl text-zinc-700 font-semibold mt-5'>A network of support at <br /> the ready and on the road.</h1>
       <h3 className='text-lg text-zinc-800 font-normal mt-5' > Learn More ⟩ </h3>
      
      <div className='cards  flex justify-evenly items-center mt-20   '>

      {data.map((item,index)=>(
       <Card key={index} data={item} />
      ))}
      
      </div>
    </div>
  )
}

export default Services