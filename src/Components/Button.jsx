import React from 'react'

function Button({text="button"}) {
  return (
    <div className={`px-6 py-3 w-fit bg-black  text-white rounded-full hover:bg-slate-100
    hover:text-black   hover:transition-all ease-linear hover:border-[1px] border-zinc-600  `  }>
      {text}
    </div>
  )
}

export default Button