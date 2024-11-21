import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../style'
import { navLinks } from '../constants'
import { logo, menu, close, github, linkedin } from '../assets'

const Navbar = () => {

  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xL margin-auto'>
        <Link to="/" className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }} >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">Vidith &nbsp; <span className='sm:block hidden'>| Agarwal</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li key={nav.id} className={`${active === nav.title ? "text-white" : "text-secondary"} 
            hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/VidithAgarwal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
            >
              <img src={github} alt="GitHub" className="w-6 h-6 inline-block" />
            </a>
          </li>

          <li>
            <a
              href="https://linkedin.com/in/vidithagarwal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
            >
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6 inline-block" />
            </a>
          </li>
          
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)} />
          <div className={`${toggle ? "flex" : "hidden"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex flex-col items-start gap-4 justify-end'>
              {navLinks.map((nav) => (
                <li key={nav.id} className={`${active === nav.title ? "text-white" : "text-secondary"} 
             font-poppins text-[16px] font-medium cursor-pointer`} onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title)
                  }}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
                
              ))}
              <li className="text-secondary
             font-poppins text-[16px] font-medium cursor-pointer">
            <a
              href="https://github.com/VidithAgarwal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
            >
              Github
            </a>
          </li>

          <li className="text-secondary
             font-poppins text-[16px] font-medium cursor-pointer">
            <a
              href="https://linkedin.com/in/vidithagarwal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
            >
              LinkedIn
            </a>
          </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar