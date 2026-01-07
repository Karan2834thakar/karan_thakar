import React from 'react'
import { CONTACT } from '../constants'

const Contect = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h1 className='my-10 text-center text-4xl'>Get in Touch</h1>
        <div className='text-center tracking-tighter'>
       
           <a href={`mailto:${CONTACT.email}`} className='border-b text-blue-400 hover:text-blue-300'>{CONTACT.email}</a>
            <p className='my-4 text-xl '>
                {CONTACT.address}
            </p>
           

        </div>
    </div>
  )
}

export default Contect
