"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Menu, Search } from 'lucide-react'
import { ThemeSwitcher } from './theme-switcher'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const NavBar = () => {

    // const scrolledClasses = ``

    return (
        <div className='fixed w-full top-10  z-20 text-foreground  '>
            <nav className='max-w-6xl mx-auto p-4 transition-all duration-300  rounded-full shadow-lg shadow-primary/10 backdrop-blur-2xl  bg-background/80 border '>
                <div className='flex gap-10 items-center'>
                    <p className='font-mono text-2xl font-bold text-center pl-4'>KAREN RETREAT</p>
                    <ul className=' hidden sm:flex gap-4 '>
                        <li><NavLink title='Home' href='/' /></li>
                        <li><NavLink title='Services' href='/services' /></li>
                        <li><NavLink title='About Us' href='about-us' /></li>
                        <li className='relative group'>
                            <NavLink title='Contact Us' href='contact-us'/>
                            <div className='hidden group-hover:absolute   bg-red-600 p-4 z-20 '>dasdas
                            dasdsa
                            </div>

                        
                        </li>
                        
                    </ul>
                    <MobileMenu />
                    <div className='ml-auto hidden md:flex gap-4 items-center'>
                        <Search />
                        <ThemeSwitcher />
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default NavBar


function NavLink({ title = 'Link Name', href = '/' }) {


    const router = useRouter();

    return (
        <Link href={href} className=''>
            {title}
        </Link>
    )
}


function MobileMenu() {

    return (

        <Menu className='ml-auto sm:hidden' />
    )
}