"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const navbarLinks = [
    {
        id: 0,
        name: 'Home',
        href: '/'
    },
    {
        id: 1,
        name: 'About',
        href: '/about'
    },
    {
        id: 2,
        name: 'UI Kits',
        href: '/ui-kits'
    },
    {
        id: 3,
        name: 'Templates',
        href: '/templates'
    }
    
]

export default function NavbarLinks() {
    const location = usePathname()
  return (
    <div className='hidden md:flex justify-center items-center col-span-6 gap-x-2'>
        {navbarLinks.map((item) => (
            <Link href={item.href} key={item.id} className=''>
                {item.name}
            </Link>
        ))}
      
    </div>
  )
}
