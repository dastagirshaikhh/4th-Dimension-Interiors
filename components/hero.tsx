'use client'

import { useEffect, useState } from 'react'
import { libreFranklin, jetbrainsMono } from '@/app/fonts'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

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
                    backgroundImage: "url('https://images.pexels.com/photos/8092435/pexels-photo-8092435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: `translateY(${offset * 0.5}px)`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-transparent" />
            </div>
            <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
                <div className="max-w-3xl space-y-6">
                    {/* <h1 className={`${libreFranklin.className} text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight animate-fade-up`}>
                        4thdimension <br/> Interiors
                    </h1> */}
                    {/* <h1
                        className={`${libreFranklin.className} text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text leading-tight tracking-tight animate-fade-up`}
                    >
                        4thdimension <br /> Interiors
                    </h1> */}
                    {/* <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className={`${libreFranklin.className} text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight`}
                    >
                        4thdimension <br /> Interiors
                    </motion.h1> */}
                    {/* <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className={`${libreFranklin.className} text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight`}
                    >
                        4<sup className="text-xs opacity-50">th</sup>D<span className="ml-1">imension</span> <br /> Interiors
                    </motion.h1> */}

                    {/* final */}
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

                    {/* <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className={`${libreFranklin.className} text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight relative`}
                    >
                        <span className="relative inline-block text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-yellow-500 drop-shadow-[0_5px_15px_rgba(255,215,0,0.8)]">
                            4
                            <span className="absolute -top-3 left-7 text-xs md:text-sm text-yellow-300 opacity-90 tracking-wide">
                                th
                            </span>
                        </span>
                        <span className="text-white/90">D<span className="ml-1">imension</span></span> <br />
                        Interiors
                    </motion.h1> */}



                    <p className={`${libreFranklin.className} text-lg md:text-xl text-white/80 max-w-xl animate-fade-up animation-delay-100`}>
                        Bring your vision to life. Our design expertise will guide you in creating a space you'll love.
                    </p>
                    <Button
                        className={`${jetbrainsMono.className} bg-white text-[#3D0C11] hover:bg-white/90 transition-colors animate-fade-up animation-delay-200`}
                        size="lg"
                    >
                        Explore Projects
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

