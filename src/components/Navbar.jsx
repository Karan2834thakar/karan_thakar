import kt from '../assets/kt.png'
import { FaLinkedin } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'


import React from 'react'

const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6 '>
        <div className='flex flex-shrink-0 items-center'>
            <img className='w-20' src={kt} alt="logo" />
        </div>

        <div className='m-8 items-center justify-center flex gap-4 text-3xl'>
            
            <a href="https://www.linkedin.com/in/karan-thakar-7ba477268"><FaLinkedin /></a>
             <a href="https://github.com/Karan2834thakar"><FaGithub /></a>
            
        </div>
    </nav>
  )
}

export default Navbar