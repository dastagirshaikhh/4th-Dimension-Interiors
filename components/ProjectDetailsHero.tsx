"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ProjectDetailsHero({ image }: { image?: string }) {
    return (
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
            {image ? (
                <Image
                    src={image}
                    alt="Interior design projects"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                    priority
                />
            ) : (
                <>
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 text-center text-white"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-4">No image available</h1>
                    </motion.div>
                </>
            )}

        </section>
    )
}

