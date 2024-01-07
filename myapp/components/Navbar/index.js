import React from 'react'
import ThemeToggle from '../Themebutton'
import Logo from '../Logo'

const Navbar = () => {
  return (
    <header className='px-4 py-8'>
        <nav className='flex justify-between mx-auto max-w-screen-xl'>
            <Logo />
            <ThemeToggle />
        </nav>
    </header>
  )
}

export default Navbar