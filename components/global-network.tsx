'use client'

import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { libreFranklin, poppins } from '@/app/fonts'

const cities = [
    { name: 'Lagos', x: '10%', y: '60%' },
    { name: 'London', x: '45%', y: '30%' },
    { name: 'New York', x: '25%', y: '40%' },
    { name: 'Dubai', x: '65%', y: '50%' },
    { name: 'Tokyo', x: '85%', y: '45%' },
]

export default function GlobalNetwork() {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    return (
        <section ref={ref} className="relative py-32 overflow-hidden bg-black">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center opacity-20" />
            <div className="relative container mx-auto px-4 z-10">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
                    }}
                    className={`${libreFranklin.className} bg-white/5 backdrop-blur-md rounded-[50px] p-12 md:p-16 text-center`}
                >
                    <motion.h2
                        className={`${poppins.className} text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight`}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
                        }}
                    >
                        Global Property Network
                    </motion.h2>
                    <motion.p
                        className="text-white/90 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.6 } },
                        }}
                    >
                        Modia Properties is revolutionizing real estate, starting in Nigeria and expanding globally.
                        We connect property owners, buyers, and renters through an innovative platform designed for
                        seamless, secure, and efficient transactions.
                    </motion.p>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1, transition: { delay: 0.6, duration: 0.4 } },
                        }}
                    >
                        <Button
                            variant="secondary"
                            size="lg"
                            className={`${poppins.className} bg-white hover:bg-white/90 text-black px-8 py-6 text-lg font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105`}
                        >
                            Learn More
                        </Button>
                    </motion.div>
                </motion.div>
                <div className="mt-16 relative h-[400px]">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    >
                        <Image
                            src="https://thumbs.dreamstime.com/b/global-network-across-planet-earth-blockchain-global-network-across-planet-earth-blockchain-elements-image-136686433.jpg"
                            alt="World Map"
                            layout="fill"
                            objectFit="contain"
                            className="opacity-30"
                        />
                    </motion.div>
                    {cities.map((city, index) => (
                        <motion.div
                            key={city.name}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={controls}
                            variants={{
                                hidden: { opacity: 0, scale: 0 },
                                visible: { opacity: 1, scale: 1, transition: { delay: 1 + index * 0.2, duration: 0.5 } },
                            }}
                            className="absolute"
                            style={{ left: city.x, top: city.y }}
                        >
                            <div className="relative">
                                <div className="w-3 h-3 bg-white rounded-full animate-ping absolute" />
                                <div className="w-3 h-3 bg-white rounded-full relative z-10" />
                            </div>
                            <motion.p
                                className={`${poppins.className} text-white text-sm mt-2 whitespace-nowrap`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 + index * 0.2, duration: 0.3 }}
                            >
                                {city.name}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

