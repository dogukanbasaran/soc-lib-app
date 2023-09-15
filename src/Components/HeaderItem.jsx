import React from 'react'

function HeaderItem({name, Icon}) {
  return (
    <div className='text-white flex items-center gap-1  text-[18px]  cursor-pointer'>
      <Icon className={'hidden lg:block'}/>
      <h2 className='hidden lg:block whitespace-nowrap hover:text-slate-400'>{name}</h2>
    </div>
  )
}

export default HeaderItem
