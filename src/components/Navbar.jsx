import React from 'react'

export const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='brand'>
          Title
        </div>
        <div className=' right flex p-10'>
            <div>home</div>
            <div>about</div>
            <div>blog</div>
            <div>contact</div>
          <div>
          <button className='btn'>login</button>
          </div>
        </div>
    </div>
  )
}

 