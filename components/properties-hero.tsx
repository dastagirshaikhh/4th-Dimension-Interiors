'use client'

import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function PropertiesHero() {
    return (
        <section className="relative bg-[#3D0C11] text-white py-24 md:py-32">
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
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
                        Discover Your Perfect Property Match
                    </h1>
                    <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
                        Explore our curated selection of premium properties and find your ideal home or investment opportunity.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
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
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

