'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { libreFranklin, jetbrainsMono } from '@/app/fonts'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={cn(
                "fixed w-full z-50 transition-all duration-300",
                isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className={`${jetbrainsMono.className} text-xl font-bold text-[#3D0C11] transition-all duration-300 hover:scale-105`}>
                        <span className="relative inline-block text-xl md:text-2xl">
                            <span className='font-extrabold'>4</span>
                            <span className="absolute top-0 left-3 text-[5px] md:text-base text-[#3D0C11] opacity-80">
                                th
                            </span>
                        </span>
                        &nbsp;&nbsp;<span>Dimension</span><br />Interiors
                        {/* <Image src="/logo.png" width={100} height={100} alt="logo" /> */}
                    </Link>
                    <div className="hidden md:flex space-x-8 items-center">
                        {navItems.map((item) => (
                            <div key={item.name} className="relative group">
                                <Link
                                    href={item.href}
                                    className={cn(
                                        `${libreFranklin.className} text-sm transition-colors duration-300 group-hover:text-[#3D0C11]`,
                                        isScrolled ? "text-gray-700" : "text-white",
                                        "flex items-center"
                                    )}
                                    onMouseEnter={() => setActiveDropdown(item.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    {item.name}
                    
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="hidden md:block">
                        <Button
                            className={cn(
                                `${jetbrainsMono.className} bg-[#3D0C11] text-white hover:bg-[#2D090D] transition-all duration-300`,
                                !isScrolled && "bg-white/10 backdrop-blur-sm hover:bg-white/20",
                                "hover:scale-105"
                            )}
                            asChild
                        >
                            <Link href="/questionnaire">
                                Get Started
                            </Link>
                        </Button>
                    </div>
                    <button
                        className="md:hidden text-[#3D0C11] transition-transform duration-300 hover:scale-110"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`${libreFranklin.className} md:hidden absolute top-full left-0 right-0 bg-white shadow-md overflow-hidden`}
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <div key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-700 hover:text-[#3D0C11] transition-colors duration-300 block"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                        
                                </div>
                            ))}
                            <Button
                                className={`${jetbrainsMono.className} bg-[#3D0C11] text-white hover:bg-[#2D090D] transition-colors w-full`}
                                onClick={() => setIsOpen(false)}
                                asChild
                            >
                                <Link href="/questionnaire">
                                    Get Started
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

