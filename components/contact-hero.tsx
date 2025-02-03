"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ContactHero() {
    return (
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
            <Image
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80"
                alt="Luxury real estate office"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
                priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center text-white"
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-4">Contact Us</h1>
                <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                    Let's start a conversation about your luxury real estate needs
                </p>
            </motion.div>
        </section>
    )
}
