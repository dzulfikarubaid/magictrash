import React from 'react'
import './Web.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className='flex flex-row justify-between items-center p-6 px-10 bg-color7 text-teks1'>

        <a href="" className='flex flex-row gap-4 items-center'>
        <img className='w-[50px]' src="magiclogo.png" alt="" />
        <div className='text-center'>
        <h1 className='font-semibold text-xl'>MAGICTRASH.ID</h1>
        <p className='text-[12px]'>Re-wearing is caring</p>
        </div>
        </a>
    
        <div className='flex flex-row gap-5 font-semibold'>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/sell">Sell</a></li>
        <li><a href="/donation">Donation</a></li>
        <li><Link to="#service">Service</Link></li>
        <li><Link to="#faq">FAQ</Link></li>
        </div>
    </nav>
  )
}

export default Navbar