import React from 'react'

function HeaderItem({name, Icon}) {
  return (
    <li className='list-none'>
           <a href='https://www.instagram.com/dogukanbasarannn/' className='text-white flex items-center gap-1  text-[18px]  cursor-pointer hover:text-slate-400'>
              <Icon className={'hidden xl:block'}/>
              <h2 className='hidden xl:block whitespace-nowrap'>{name}</h2>
            </a>
    </li>
  )
}

export default HeaderItem
