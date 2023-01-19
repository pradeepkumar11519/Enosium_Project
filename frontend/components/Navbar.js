import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div className='flex justify-between py-3 border-2 border-black'>
      <div className='border-2 border-red-500'>LOGO</div>
      <div>
        <ul className='flex '>
            <li className='border-2 border-black mx-5 p-2 rounded-md font-bold hover:scale-105 transition-all fade-in-out'><Link href="/">HOME</Link></li>
            <li className='border-2 border-black mx-5 p-2 rounded-md font-bold hover:scale-105 transition-all fade-in-out'><Link href="/AboutPage">ABOUT US</Link></li>
        </ul>
      </div>
      <div></div>
    </div>
  )
}
