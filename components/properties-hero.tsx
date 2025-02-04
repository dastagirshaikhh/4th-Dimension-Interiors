'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PropertiesHero() {
    return (
        <section className="relative bg-[#3D0C11] text-white py-24 md:py-32">
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src="https://images.pexels.com/photos/3935342/pexels-photo-3935342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Luxury Property"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-20"
                />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Discover Your Ideal Living Space
                    </h1>
                    <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
                        Discover our portfolio of exceptional spaces and find your design inspiration.
                    </p>
                    {/* <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
                        <div className="flex-grow relative">
                            <Input
                                type="text"
                                placeholder="Search by location, property type, or features"
                                className="pl-10 pr-4 py-3 w-full text-gray-900"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        </div>
                        <Button className="bg-white text-[#3D0C11] hover:bg-gray-100 transition-colors py-3 px-6 text-lg font-semibold">
                            Search Properties
                        </Button>
                    </div> */}
                </motion.div>
            </div>
        </section>
    )
}

