'use client'

import { useEffect, useState } from 'react'
import { libreFranklin, jetbrainsMono } from '@/app/fonts'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section className="relative h-screen overflow-hidden">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: `translateY(${offset * 0.5}px)`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-transparent" />
            </div>
            <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
                <div className="max-w-3xl space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className={`${libreFranklin.className} text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight relative`}
                    >
                        <span className="relative inline-block text-6xl md:text-7xl">
                            4
                            <span className="absolute top-0 left-10 text-sm md:text-base text-white opacity-80">
                                th
                            </span>
                        </span>
                        &nbsp;D<span className="ml-1">imension</span> <br /> Interiors
                    </motion.h1>
                    <p className={`${libreFranklin.className} text-lg md:text-xl text-white/80 max-w-xl animate-fade-up animation-delay-100`}>
                        Bring your vision to life. Our design expertise will guide you in creating a space you'll love.
                    </p>
                    <Button
                        className={`${jetbrainsMono.className} bg-white text-[#3D0C11] hover:bg-white/90 transition-colors animate-fade-up animation-delay-200`}
                        size="lg" asChild
                    >
                        <Link href="/projects">
                            Explore Projects
                        </Link>
                    </Button>
                </div>
                <div className="absolute bottom-32 right-4 md:right-16 max-w-md text-right animate-fade-up animation-delay-300">
                    <h2 className={`${jetbrainsMono.className} text-2xl md:text-4xl font-bold text-white leading-tight`}>
                        Journey To Your Perfect Home
                    </h2>
                </div>
            </div>
        </section>
    )
}

