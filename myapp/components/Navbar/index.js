import React from 'react'
import Logo from '../Logo'
import Themebutton from '../Themebutton'

const Navbar = () => {
  return (
    <header className='px-4 py-8'>
        <nav className='flex justify-between mx-auto max-w-screen-xl'>
            <Logo />
            <Themebutton />
        </nav>
    </header>
  )
}

export default Navbar