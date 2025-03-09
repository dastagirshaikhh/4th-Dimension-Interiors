"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
    {
        name: "Azim Idricy",
        role: "CEO & Founder",
        image: "/azimbhai.jpg",
    },

]

export default function TeamSection() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-12"
                >
                    Meet Our Team
                </motion.h2>
                <div className={`grid ${teamMembers.length === 1 ? "place-items-center" : "grid-cols-1 md:grid-cols-3"} gap-8`}>
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`${teamMembers.length === 1 ? "w-full max-w-lg" : ""}`}
                        >
                            <Card className="overflow-hidden w-full">
                                <CardContent className="p-0">
                                    <div className="relative h-96"> {/* Increased height for better scaling */}
                                        <Image
                                            src={member.image || "/placeholder.svg"}
                                            alt={member.name}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                    <div className="p-6 text-center">
                                        <h3 className="text-2xl font-semibold mb-2">{member.name}</h3> {/* Slightly larger text */}
                                        <p className="text-gray-600">{member.role}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>


    )
}

