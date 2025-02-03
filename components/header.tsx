'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="relative w-32 h-10">
                        <Image
                            src="/placeholder.svg"
                            alt="Modia Properties"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            href="/about"
                            className={cn(
                                "text-sm font-medium transition-colors",
                                scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/90 hover:text-white"
                            )}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/property"
                            className={cn(
                                "text-sm font-medium transition-colors",
                                scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/90 hover:text-white"
                            )}
                        >
                            Property
                        </Link>
                        <Link
                            href="/agent"
                            className={cn(
                                "text-sm font-medium transition-colors",
                                scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/90 hover:text-white"
                            )}
                        >
                            Agent
                        </Link>
                        <Button
                            className={cn(
                                "bg-[#3D0C11] text-white hover:bg-[#2D090D] transition-colors",
                                !scrolled && "bg-white/10 backdrop-blur-sm hover:bg-white/20"
                            )}
                        >
                            Contact
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

