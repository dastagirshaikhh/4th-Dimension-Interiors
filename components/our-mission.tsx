"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Users, TrendingUp } from "lucide-react"

const missions = [
    {
        icon: Home,
        title: "Exceptional Properties",
        description: "We curate a portfolio of the most prestigious and unique interior designs in Mumbai.",
    },
    {
        icon: Users,
        title: "Client-Centric Approach",
        description: "Our team is dedicated to providing personalized service tailored to each client's needs.",
    },
    {
        icon: TrendingUp,
        title: "Market Expertise",
        description: "We leverage deep design insights to help our clients create inspired spaces.",
    },
]

export default function OurMission() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-12"
                >
                    Our Mission
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {missions.map((mission, index) => (
                        <motion.div
                            key={mission.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <Card className="h-full">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <mission.icon size={48} className="text-[#3D0C11] mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">{mission.title}</h3>
                                    <p className="text-gray-600">{mission.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

