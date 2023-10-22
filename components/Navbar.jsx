import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navIcons = [
    {src:'assets/icons/search.svg', alt:'search'},
    {src:'assets/icons/black-heart.svg', alt:'heart'},
    {src:'assets/icons/user.svg', alt:'user'},
]

const Navbar = () => {
  return (
    <header className='w-full'>
        <nav className='nav'>
            <Link href='/' className='flex items-center gap-1'>
                <Image src='/assets/icons/logo.svg' width={27} height={27} alt='logo'/>
                <p className='nav-logo'>
                    Watch<span className='text-primary'>er</span>
                </p>
            </Link>
            <div className='flex items-center gap-5'>
                {navIcons.map((items,idx)=>{
                    return <Image 
                    key={idx} 
                    src={items.src} 
                    alt={items.alt} 
                    height={27} 
                    width={27} 
                    className='object-contain'/>
                })}
            </div>            
        </nav>
    </header>
  )
}

export default Navbar
